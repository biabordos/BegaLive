let scene, camera, renderer, controls;
let markerSpheres = [];

document.addEventListener('DOMContentLoaded', function() {
    init3DMap();
});

function init3DMap() {
    const container = document.getElementById('map3d');
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color('#071a19');
    
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 15, 20);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.1;
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    const loader = new THREE.GLTFLoader();
    loader.load(
        'models/harta.glb',
        function (gltf) {
            const model = gltf.scene;
            model.scale.set(1, 1, 1); 
            model.position.set(0, 0, 0);
            scene.add(model);
            console.log("Harta 3D incarcata!");
            add3DMarkers();
        },
        undefined,
        function (error) {
            console.error('Eroare:', error);
            const ground = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshLambertMaterial({color: 0x222222}));
            ground.rotation.x = -Math.PI / 2;
            scene.add(ground);
            add3DMarkers();
        }
    );

    window.addEventListener('resize', onWindowResize);
    animate();
}

function add3DMarkers() {
    const geometry = new THREE.SphereGeometry(0.3, 32, 32);
    
    MONITORING_STATIONS.forEach(station => {
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x14b8a6, emissive: 0x14b8a6, emissiveIntensity: 0.5, roughness: 0.2 
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(station.pos3D.x, station.pos3D.y, station.pos3D.z);
        sphere.userData = { stationId: station.id, name: station.name };
        scene.add(sphere);
        markerSpheres.push(sphere);
    });
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function onWindowResize() {
    const container = document.getElementById('map3d');
    if(container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
}