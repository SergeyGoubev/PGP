// ãëîáàëüíûå ïåðåìåííûå
var container, camera, controls, scene, renderer, light;
var Cube;
var CubeWire;
var Cu;
var CuSolid;
var Cu2;
var Cu2Solid;

// íà÷èíàåì ðèñîâàòü ïîñëå ïîëíîé çàãðóçêè ñòðàíèöû
window.onload = function () {
    init();
    animate();
}

function init() {
    scene = new THREE.Scene(); //ñîçäàåì ñöåíó
    AddCamera(0, 500, 700); //äîáàâëÿåì êàìåðó
    AddLight(0, 0, 700); //óñòàíàâëèâàåì áåëûé ñâåò

//ñîçäàåì ðåíäåðåð
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container = document.getElementById('MyWebGLApp');
    container.appendChild(renderer.domElement);

//äîáàâëÿåì êóá
    var geometry = new THREE.BoxGeometry(500, 200, 300);
    var geometry2 = new THREE.BoxGeometry(150, 200, 100);
    var geometry3 = new THREE.BoxGeometry(150, 200, 100);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var material2 = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
    Cube = new THREE.Mesh(geometry, material);
    Cube.position.z = -100;
    // Cube.rotation.z = Math.PI / 6;
    CubeWire = new THREE.Mesh(geometry, material2);
    CubeWire.position.z = -100;
    Cu = new THREE.Mesh(geometry2, material2);
    CuSolid = new THREE.Mesh(geometry2, material);
    Cu2 = new THREE.Mesh(geometry3, material2);
    Cu2Solid = new THREE.Mesh(geometry3, material);
    Cu.position.z = 100;
    Cu.position.y = 0;
    Cu.position.x = -175;
    CuSolid.position.z = 100;
    CuSolid.position.y = 0;
    CuSolid.position.x = -175;
    Cu2.position.z = 100;
    Cu2.position.y = 0;
    Cu2.position.x = 175;
    Cu2Solid.position.z = 100;
    Cu2Solid.position.y = 0;
    Cu2Solid.position.x = 175;
    scene.add(Cube);
    scene.add(CubeWire);
    scene.add(Cu);
    scene.add(Cu2);
    scene.add(CuSolid);
    scene.add(Cu2Solid);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    // Cube.position.x = Cube.position.x + 0; // +1 - êóá äâèæåòñÿ
    // Cube.rotation.y = Cube.rotation.y + 0.01; //è âðàùàåòñÿ âîêðóã îñè
    // CubeWire.rotation.y = CubeWire.rotation.y + 0.01; //è âðàùàåòñÿ âîêðóã îñè
    // Cu.rotation.y = Cu.rotation.y + 0.01; //è âðàùàåòñÿ âîêðóã îñè
    controls.update();
    renderer.render(scene, camera);
}

function AddCamera(X, Y, Z) {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(X, Y, Z);
    controls = new THREE.TrackballControls(camera, container);
    controls.rotateSpeed = 2;
    controls.noZoom = false;
    controls.zoomSpeed = 1.2;
    controls.staticMoving = true;
}

function AddLight(X, Y, Z) {
    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(X, Y, Z);
    scene.add(light);
}
