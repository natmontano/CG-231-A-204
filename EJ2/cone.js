var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xF6C9D0, 1);
document.body.appendChild(renderer.domElement);
//Escena
var scene = new THREE.Scene();

//posicion de la camara
var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 30;
camera.position.x = 30;
camera.position.y = 30;
camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//Construccion del cono 
//Parametros cono
const radio=8;
const altura=radio*3;

//Geometria cono 
var geometry = new THREE.ConeGeometry(radio, altura, 10);

//Material y color del cono
var material = new THREE.MeshPhysicalMaterial({ color: 0xC14BF5 });
var cone = new THREE.Mesh(geometry, material);
scene.add(cone);

//Luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

//posicion, translaciones y rotacion
cone.position.set(0,0,radio+radio/2); 
geometry.rotateX(Math.PI/2);  
geometry.rotateY(Math.PI/2);
geometry.translate(radio+radio/2,radio,-(radio+radio/2));  
geometry.rotateZ(-Math.atan(radio/altura)); 

const size = 150;
const divisions = 160;

//Crear la Grilla
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

//Crear visualizador de ejes
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);
scene.add(cone);


//funcion renderizar
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();