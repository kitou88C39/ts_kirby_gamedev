import { KaboomCtx } from 'kaboom';
import { scale } from './constants';

export async function makeMap(k: KaboomCtx, name: String) {
  const mapData = await (await fetch(`./${name}.json`)).json();
  const map = k.make([k.sprite(name), k.scale(scale), k.pos(0)]);
  const spawnPoints: { [key: string]: { x: number; y: number } } = {};
}
