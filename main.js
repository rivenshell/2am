import * as THREE from "three"
console.log("i love the abyss")

//cursor (mouse/finger tracker)
const cursor = {
  X: 0,
  Y: 0,
}
window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = -(event.clientY / sizes.height - 0.5)
})

//canvas
const canvas = document.querySelector("canvas.webgl")
const scene = new THREE.Scene()

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(5, 8),
  new THREE.MeshBasicMaterial({ color: 0x7393b3 })
)
scene.add(plane)

const plane2 = new THREE.Mesh(
  new THREE.PlaneGeometry(5, 8),
  new THREE.MeshBasicMaterial({ color: 0x7393b3 })
)
scene.add(plane2)

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
plane.rotation.x = -Math.PI * 0.5
plane.position.y = -0.5

plane2.position.z = -Math.PI * 0.8

cube1.position.x = 1
cube2.position.x = 3

group.position.y = Math.PI * 0.2
group.position.x = -0.5

const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

const sizes = {
  width: 800,
  height: 720,
}

//cam
const camera = new THREE.PerspectiveCamera(
  90,
  sizes.width / sizes.height,
  0.1,
  100
)
camera.position.z = 3
camera.position.x = 0.5
camera.position.y = 1
console.log(camera.position.length())
scene.add(camera)

//ren
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)

//time
let time = Date.now()

//animation
const fluid = () => {
  //time
  const currentTime = Date.now()
  const deltaTime = currentTime - time
  time = currentTime

  //update
  // group.rotation.x += 0.001 * deltaTime
  // cube2.rotation.x += 0.001 * deltaTime

  //Update Camera
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
  camera.position.y = cursor.y * 5
  camera.lookAt(group.position)

  //render
  renderer.render(scene, camera)
  window.requestAnimationFrame(fluid)
}

fluid()
