import {
  Geometry,
  Vector3,
  LineBasicMaterial,
  Line,
  MeshBasicMaterial,
  PlaneGeometry,
  Face3,
  Mesh,
  PerspectiveCamera,
  BoxGeometry,
  CircleGeometry,
  CylinderGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  SphereGeometry,
  TetrahedronGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  OrthographicCamera,
  Scene,
  WebGLRenderer,
} from 'three';

export function createBaseData() {
  return {
    renderer: null as (WebGLRenderer | null),
    scene: new Scene(),
    camera: new OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100),
    material: new MeshBasicMaterial({
      color: 0xffff00,
      wireframe: true,
    }),
  };
}

/**
 * 一个 3D 空间坐标轴
 */
export function createXyzAxis() {
  // x-axis
  const xGeo = new Geometry();
  xGeo.vertices.push(new Vector3(0, 0, 0));
  xGeo.vertices.push(new Vector3(1, 0, 0));
  const xMat = new LineBasicMaterial({
    color: 0xff0000,
  });
  const xAxis = new Line(xGeo, xMat);
  // scene.add(xAxis);

  // y-axis
  const yGeo = new Geometry();
  yGeo.vertices.push(new Vector3(0, 0, 0));
  yGeo.vertices.push(new Vector3(0, 1, 0));
  const yMat = new LineBasicMaterial({
    color: 0x00ff00,
  });
  const yAxis = new Line(yGeo, yMat);
  // scene.add(yAxis);

  // z-axis
  const zGeo = new Geometry();
  zGeo.vertices.push(new Vector3(0, 0, 0));
  zGeo.vertices.push(new Vector3(0, 0, 1));
  const zMat = new LineBasicMaterial({
    color: 0x00ccff,
  });
  const zAxis = new Line(zGeo, zMat);
  // scene.add(zAxis);
  return {
    xAxis,
    yAxis,
    zAxis,
  };
}

// 创建机位
export function createCamera() {
  const camera = new PerspectiveCamera(45, 4 / 3, 1, 1000);
  camera.position.set(0, 0, 5);
  camera.lookAt(new Vector3(0, 0, 0));
  return camera;
}

// 创建一个平面
export function createPlane(meterial: MeshBasicMaterial) {
  const planeGeo = new PlaneGeometry(1.5, 1.5);
  const plane = new Mesh(planeGeo, meterial);
  plane.position.x = 1;
  return plane;
}

// 创建一个三角形
export function createTriangle(meterial: MeshBasicMaterial) {
  const triangleGeo = new Geometry();
  // 指定三个端点
  const vertices: [number, number, number][] = [
    [0, -0.8, 0],
    [-2, -0.8, 0],
    [-1, 0.8, 0],
  ];
  triangleGeo.vertices = vertices.map(([x, y, z]) => new Vector3(x, y, z));
  triangleGeo.faces.push(new Face3(0, 2, 1));
  return new Mesh(triangleGeo, meterial);
}


export function drawCube(material: MeshBasicMaterial) {
  const cube = new Mesh(new BoxGeometry(1, 2, 3, 2, 2, 3), material);
  return cube;
}

export function drawPlane(material: MeshBasicMaterial) {
  const plane = new Mesh(new PlaneGeometry(2, 4), material);
  return plane;
}

export function drawSphere(material: MeshBasicMaterial) {
  const sphere = new Mesh(new SphereGeometry(3, 8, 6), material);
  return sphere;
  // const sphere = new Mesh(new SphereGeometry(3, 8, 6,
  //      0, Math.PI * 2, Math.PI / 6, Math.PI / 2), material);
  // const sphere = new Mesh(new SphereGeometry(3, 8, 6,
  //      Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2), material);
  // const sphere = new Mesh(new SphereGeometry(3, 8, 6,
  //      Math.PI / 6, Math.PI / 3), material);
  // const sphere = new Mesh(new SphereGeometry(3, 8, 6,
  //      0, Math.PI * 2, Math.PI / 6, Math.PI / 3), material);
  // const sphere = new Mesh(new SphereGeometry(3, 8, 6,
  //      Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2), material);
}

export function drawCircle(material: MeshBasicMaterial) {
  const circle = new Mesh(new CircleGeometry(3, 18, Math.PI / 3, Math.PI / 3 * 4), material);
  return circle;
}

export function drawCylinder(material: MeshBasicMaterial) {
  const cylinder = new Mesh(new CylinderGeometry(2, 2, 4, 18, 3), material);
  // const cylinder = new Mesh(new CylinderGeometry(2, 3, 4, 18, 3), material);
  // const cylinder = new Mesh(new CylinderGeometry(2, 3, 4, 18, 3, true), material);
  return cylinder;
}

export function drawTetra(material: MeshBasicMaterial) {
  const tetra = new Mesh(new TetrahedronGeometry(3), material);
  return tetra;
}

export function drawOcta(material: MeshBasicMaterial) {
  const octa = new Mesh(new OctahedronGeometry(3), material);
  return octa;
}

export function drawIcosa(material: MeshBasicMaterial) {
  const icosa = new Mesh(new IcosahedronGeometry(3), material);
  return icosa;
}

export function drawTorus(material: MeshBasicMaterial) {
  const torus = new Mesh(new TorusGeometry(3, 1, 4, 8), material);
  // const torus = new Mesh(new TorusGeometry(3, 1, 12, 18), material);
  // const torus = new Mesh(new TorusGeometry(3, 1, 4, 8, Math.PI / 3 * 2), material);
  return torus;
}

export function drawTorusKnot(material: MeshBasicMaterial) {
  const torus = new Mesh(new TorusKnotGeometry(2, 0.5, 32, 8), material);
  return torus;
}

// function drawTube(scene: Scene, material: MeshBasicMaterial) {
//   const tube = new Mesh(new TubeGeometry(1, 0.5), material);
//   scene.add(tube);
// }
