// Project geoBoundaries/OpenStreetMap ADM1 coordinates into a small local SVG map.
// Data and derived paths: ODbL 1.0. See lib/haiti-map-source.md.
import { readFileSync, writeFileSync } from 'node:fs';
const geo = JSON.parse(readFileSync(new URL('../lib/haiti-departments.geojson', import.meta.url), 'utf8'));
const project = ([lon, lat]) => [25 + (lon + 74.6) * 160, 25 + (20.15 - lat) * 168];
const paths = Object.fromEntries(geo.features.map(({ properties, geometry }) => {
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  return [properties.shapeISO, polygons.flatMap(polygon => polygon.map(ring => ring.map((point, i) => `${i ? 'L' : 'M'}${project(point).map(n => n.toFixed(1)).join(',')}`).join('') + 'Z')).join('')];
}));
writeFileSync(new URL('../lib/haiti-map-paths.json', import.meta.url), JSON.stringify(paths));
