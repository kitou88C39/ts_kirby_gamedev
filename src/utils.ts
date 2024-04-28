import { KaboomCtx } from 'kaboom';
import { scale } from './constants';

export async function makeMap(k: KaboomCtx, name: String) {
  const mapData = await (await fetch(`./${name}.json`)).json();
  const map = k.make([k.sprite(name), k.scale(scale), k.pos(0)]);
  const spawnPoints: { [key: string]: { x: number; y: number } } = {};
  for (const layer of mapData.layer) {
    if (layer.name === 'colliders') {
      for (const collider of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), collider.width, collider.height),
          }),
        ]);
      }
    }
  }
}
