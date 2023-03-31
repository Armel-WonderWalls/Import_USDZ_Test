import * as THREE from "three";
import { USDZLoader } from "three/examples/jsm/loaders/USDZLoader";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(3, 3, 3);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.SpotLight("#FFFFFF", 2);
scene.add(light);
light.position.set(3, 3, 3);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

const usdzLoader = new USDZLoader();
usdzLoader.load(
  "./assets/RoomBureau.zip",
  (usdzScene) => {
    console.log(usdzScene);
    scene.add(usdzScene.scene);
  },
  undefined,
  (error) => {
    console.log(error);
  }
);
