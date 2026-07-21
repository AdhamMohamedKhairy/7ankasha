import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvas = document.getElementById('chicken')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, 1200/400, 0.1, 1000)

camera.position.z = 3

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
renderer.setSize(1200, 400)
const loader = new THREE.TextureLoader()

const texture1 = loader.load("monke.jpg")
texture1.colorSpace = THREE.SRGBColorSpace

const texture2 = loader.load("lebron.jpg")
texture2.colorSpace = THREE.SRGBColorSpace

const texture3 = loader.load("dol.jpg")
texture3.colorSpace = THREE.SRGBColorSpace

const texture4 = loader.load("images.jpg")
texture4.colorSpace = THREE.SRGBColorSpace

const material1 = new THREE.MeshPhongMaterial({map: texture1})
const material2 = new THREE.MeshPhongMaterial({map: texture2})
const material3 = new THREE.MeshPhongMaterial({map: texture3})
const material4 = new THREE.MeshPhongMaterial({map: texture4})

const cubeGeo = new THREE.BoxGeometry(1,1,1)
const cube = new THREE.Mesh(cubeGeo, material1)
cube.position.x = -1.5

const cubeGeo2 = new THREE.BoxGeometry(1,1,1)
const cube2 = new THREE.Mesh(cubeGeo2, material4)
cube2.position.x = 1.5

const sphereGeo = new THREE.BoxGeometry(1,1,1)
const sphere = new THREE.Mesh(sphereGeo, material2)
sphere.position.x = -5

const pyramidGeo = new THREE.BoxGeometry(1,1,1)
const pyramid = new THREE.Mesh(pyramidGeo, material3)
pyramid.position.x = 5

const light = new THREE.DirectionalLight(0xffffff, 2)
light.position.set(2, 2, 5)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

scene.add(cube, cube2, sphere, pyramid, light, ambientLight)

const controls = new OrbitControls(camera, canvas)

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.005
    cube.rotation.y += 0.01

    cube2.rotation.x += 0.005
    cube2.rotation.y += 0.01

    sphere.rotation.x += 0.005
    sphere.rotation.y += 0.01

    pyramid.rotation.x += 0.005
    pyramid.rotation.y += 0.01
    controls.update()
    renderer.render(scene, camera)
}
animate()