import { WebGLRenderer, Scene, OrthographicCamera } from 'three';

const requestAnimationFrame = window.requestAnimationFrame
  // @ts-ignore
  || window.mozRequestAnimationFrame
  // @ts-ignore
  || window.webkitRequestAnimationFrame
  // @ts-ignore
  || window.msRequestAnimationFrame;

export function startAnimationFrame(
  renderer: WebGLRenderer,
  scene: Scene,
  camera: OrthographicCamera,
) {
  const draw = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);
}

export function tmp() {
  throw new Error('not implement');
}
