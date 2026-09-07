import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist/client');
const generatedAssetsDirectory = path.join(
  outputDirectory,
  'ti-sevis-website',
  '_next',
);
const publishedAssetsDirectory = path.join(outputDirectory, '_next');

// Vinext includes the asset prefix in its output directory. GitHub Pages already
// serves this artifact below /ti-sevis-website, so flatten the generated assets
// to the artifact root while keeping the public URLs unchanged.
await rm(publishedAssetsDirectory, { recursive: true, force: true });
await cp(generatedAssetsDirectory, publishedAssetsDirectory, { recursive: true });
await rm(path.join(outputDirectory, 'ti-sevis-website'), {
  recursive: true,
  force: true,
});

// The export uses flat .html files so Vinext can prerender every route. Keep
// those files for direct access and add the directory/index.html shape that
// GitHub Pages resolves when a visitor follows our friendly /route/ links.
async function addPrettyRouteCopies(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await addPrettyRouteCopies(fullPath);
      continue;
    }
    if (!entry.name.endsWith('.html') || entry.name === 'index.html' || entry.name === '404.html') continue;
    const routeName = entry.name.slice(0, -'.html'.length);
    const routeDirectory = path.join(directory, routeName);
    await mkdir(routeDirectory, { recursive: true });
    await cp(fullPath, path.join(routeDirectory, 'index.html'));
  }
}

await addPrettyRouteCopies(outputDirectory);
await writeFile(path.join(outputDirectory, '.nojekyll'), '');
