console.log("i love the abyss")

import * as THREE from "three"

//canvas
const canvas = document.querySelector("canvas.webgl")
const scene = new THREE.Scene()

//group
const group = new THREE.Group()
scene.add(group)

//group meshes
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
)
group.add(cube2)

//positioning
cube1.position.x = 1
cube2.position.x = 3

group.position.y = Math.PI * 0.2

const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

const sizes = {
  width: 800,
  height: 600,
}

//cam
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

//ren
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

//animation
const fluid = () => {
  //update
  group.rotation.x += 0.01
  cube2.rotation.y += 0.01
  //render
  renderer.render(scene, camera)
  window.requestAnimationFrame(fluid)
}

fluid()
