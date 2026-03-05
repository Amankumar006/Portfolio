import { NodeIO } from '@gltf-transform/core';
import { KHRDracoMeshCompression, EXTTextureWebP } from '@gltf-transform/extensions';
import { draco, textureCompress, dedup } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';
import sharp from 'sharp';

const io = new NodeIO()
  .registerExtensions([KHRDracoMeshCompression, EXTTextureWebP])
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  });

const doc = await io.read('public/models/Planet-original.glb');

console.log('Before transforms:');
doc.getRoot().listNodes().forEach(n => {
  const mesh = n.getMesh();
  console.log('  Node:', n.getName(), '| Mesh:', mesh ? mesh.getName() : 'none');
});

await doc.transform(
  dedup(),
  draco({ quantizePosition: 14, quantizeNormal: 10, quantizeTexcoord: 12 }),
  textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 80 }),
);

console.log('\nAfter transforms:');
doc.getRoot().listNodes().forEach(n => {
  const mesh = n.getMesh();
  console.log('  Node:', n.getName(), '| Mesh:', mesh ? mesh.getName() : 'none');
});

await io.write('public/models/Planet.glb', doc);

const fs = await import('fs');
const stats = fs.statSync('public/models/Planet.glb');
console.log('\nOutput size:', (stats.size / 1024).toFixed(1), 'KB');
console.log('Done!');
