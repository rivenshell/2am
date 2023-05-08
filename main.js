console.log("i love the abyss")

import * as THREE from "three"

//canvas
const canvas = document.querySelector("canvas.webgl")
const scene = new THREE.Scene()

//object

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
renderer.render(scene, camera)
