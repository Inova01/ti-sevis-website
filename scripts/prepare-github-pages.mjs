import { cp, rm, writeFile } from 'node:fs/promises';
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
await writeFile(path.join(outputDirectory, '.nojekyll'), '');
