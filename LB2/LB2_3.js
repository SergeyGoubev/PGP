// глобальные переменные
var container, camera, controls, scene, renderer, light;
v0 = new THREE.Vector2(1, 8);
v1 = new THREE.Vector2(3, 4);
v2 = new THREE.Vector2(4, 3);
v3 = new THREE.Vector2(7, 6);
v4 = new THREE.Vector2(7, 10);
v5 = new THREE.Vector2(7, 10);
v6 = new THREE.Vector2(7, 12);
v7 = new THREE.Vector2(8, 8);
v8 = new THREE.Vector2(10,4);
v9 = new THREE.Vector2(10, 6);
v10 = new THREE.Vector2(11, 11);
v11 = new THREE.Vector2(12, 0);
vFat0 = new THREE.Vector3(1, 8, 0);
vFat1 = new THREE.Vector3(3, 4, 0);
vFat2 = new THREE.Vector3(4, 3, 0);
vFat3 = new THREE.Vector3(7, 6, 0);
vFat4 = new THREE.Vector3(7, 10, 0);
vFat5 = new THREE.Vector3(7, 10, 0);
vFat6 = new THREE.Vector3(7, 12, 0);
vFat7 = new THREE.Vector3(8, 8, 0);
vFat8 = new THREE.Vector3(10,4, 0);
vFat9 = new THREE.Vector3(10, 6, 0);
vFat10 = new THREE.Vector3(11, 11, 0);
vFat11 = new THREE.Vector3(12, 0, 0);

var line = [
    {x:1, y:8},
    {x:3, y:4},
    {x:4, y:3},
    {x:7, y:6},
    {x:7, y:10},
    {x:7, y:10},
    {x:7, y:12},
    {x:8, y:8},
    {x:10, y:4},
    {x:10, y:6},
    {x:11, y:11},
    {x:12, y:0},
]
var spline = new THREE.SplineCurve([
    v0,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11
]);

var splineFat = new THREE.SplineCurve3([
    vFat0, vFat1, vFat2, vFat3, vFat4, vFat5, vFat6, vFat7, vFat8, vFat9, vFat10, vFat11
]);
var quadraticBezier0 = new THREE.QuadraticBezierCurve( v0, v1, v2 );
var quadraticBezier1 = new THREE.QuadraticBezierCurve( v2, v3, v4 );
var quadraticBezier2 = new THREE.QuadraticBezierCurve( v4, v5, v6 );
var quadraticBezier3 = new THREE.QuadraticBezierCurve( v6, v7, v8 );
var quadraticBezier4 = new THREE.QuadraticBezierCurve( v8, v9, v10 );

var CubicBezier0 = new THREE.CubicBezierCurve3(v0, v1, v2, v3)
var CubicBezier1 = new THREE.CubicBezierCurve3(v3, v4, v5, v6)
var CubicBezier2 = new THREE.CubicBezierCurve3(v6, v7, v8, v9)
var CubicBezier3 = new THREE.CubicBezierCurve3(v9, v10, v11, v11)

var BezeFat = new THREE.CubicBezierCurve3( vFat0, vFat1, vFat2, vFat3 );
var BezeFat2 = new THREE.CubicBezierCurve3( vFat3, vFat4, vFat5, vFat6 );
var BezeFat3 = new THREE.CubicBezierCurve3( vFat6, vFat7, vFat8, vFat9 );
var BezeFat4 = new THREE.CubicBezierCurve3( vFat9, vFat10, vFat11, vFat11 );


var BezeFatCuadro = new THREE.QuadraticBezierCurve( vFat4, vFat5, vFat6);
// начинаем рисовать после полной загрузки страницы
window.onload = function()
{
    init();
    animate();
}

function init()
{
    scene = new THREE.Scene(); //создаем сцену
    AddCamera( 0, 30, 50); //добавл¤ем камеру
    AddLight( 0, 0, 50 ); //устанавливаем белый свет

//создаем рендерер
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor( 0xffffff );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container = document.getElementById('MyWebGLApp');
    container.appendChild( renderer.domElement );

// Сплайн
    var geometryLine = new THREE.Geometry;
    var geometrySpline = new THREE.Geometry;
    var quadraticBezierLine0 = new THREE.Geometry;var quadraticBezierLine1 = new THREE.Geometry;var quadraticBezierLine2 = new THREE.Geometry;var quadraticBezierLine3 = new THREE.Geometry;var quadraticBezierLine4 = new THREE.Geometry;
    var cubicBezierLine0 = new THREE.Geometry;var cubicBezierLine1 = new THREE.Geometry;var cubicBezierLine2 = new THREE.Geometry;var cubicBezierLine3 = new THREE.Geometry;
    var materialLine = new THREE.LineBasicMaterial( { color: 0xcc0000 } );
    var materialSpline = new THREE.LineBasicMaterial( { color: 0x00cccf } );
    var materialQuadraticBezier = new THREE.LineBasicMaterial( { color: 0xff00ff } );
    var materialCubicBezier = new THREE.LineBasicMaterial( { color: 0xff00cc } );
// «аносим вершины в geometry:

    /*for (let i = 0; i < line.length -1; i++){
        var vec = new THREE.Vector3( line[i].x, line[i].y, 0 );
        geometryLine.vertices.push( vec );
    }*/
    for (var i = 0; i <= 1; i+=0.01)
    {
        //spline
        var x = spline.getPoint( i ).x;
        var y = spline.getPoint( i ).y;
        var vec = new THREE.Vector3( x, y, 0 );
        geometrySpline.vertices.push( vec );

        //qubic beze
        var x0 = quadraticBezier0.getPoint( i ).x;
        var y0 = quadraticBezier0.getPoint( i ).y;
        var vec0 = new THREE.Vector3( x0, y0, 0 );
        quadraticBezierLine0.vertices.push( vec0 );

        var x1 = quadraticBezier1.getPoint( i ).x;
        var y1 = quadraticBezier1.getPoint( i ).y;
        var vec1 = new THREE.Vector3( x1, y1, 0 );
        quadraticBezierLine1.vertices.push( vec1 );

        var x2 = quadraticBezier2.getPoint( i ).x;
        var y2 = quadraticBezier2.getPoint( i ).y;
        var vec2 = new THREE.Vector3( x2, y2, 0 );
        quadraticBezierLine2.vertices.push( vec2 );

        var x3 = quadraticBezier3.getPoint( i ).x;
        var y3 = quadraticBezier3.getPoint( i ).y;
        var vec3 = new THREE.Vector3( x3, y3, 0 );
        quadraticBezierLine3.vertices.push( vec3 );

        var x4 = quadraticBezier4.getPoint( i ).x;
        var y4 = quadraticBezier4.getPoint( i ).y;
        var vec4 = new THREE.Vector3( x4, y4, 0 );
        quadraticBezierLine4.vertices.push( vec4 );

        //cube beze
        var h0 = CubicBezier0.getPoint( i ).x;
        var k0 = CubicBezier0.getPoint( i ).y;
        var vector0 = new THREE.Vector3( h0, k0, 0 );
        cubicBezierLine0.vertices.push( vector0 );

        var h1 = CubicBezier1.getPoint( i ).x;
        var k1 = CubicBezier1.getPoint( i ).y;
        var vector1 = new THREE.Vector3( h1, k1, 0 );
        cubicBezierLine1.vertices.push( vector1 );

        var h2 = CubicBezier2.getPoint( i ).x;
        var k2 = CubicBezier2.getPoint( i ).y;
        var vector2 = new THREE.Vector3( h2, k2, 0 );
        cubicBezierLine2.vertices.push( vector2 );

        var h3 = CubicBezier3.getPoint( i ).x;
        var k3 = CubicBezier3.getPoint( i ).y;
        var vector3 = new THREE.Vector3( h3, k3, 0 );
        cubicBezierLine3.vertices.push( vector3 );
    }
    var drawLine = new THREE.Line( geometryLine, materialLine );
    var drawSpline = new THREE.Line( geometrySpline, materialSpline );

    var drawuadraticBezier0 = new THREE.Line( quadraticBezierLine0, materialQuadraticBezier );
    var drawuadraticBezier1 = new THREE.Line( quadraticBezierLine1, materialQuadraticBezier );
    var drawuadraticBezier2 = new THREE.Line( quadraticBezierLine2, materialQuadraticBezier );
    var drawuadraticBezier3 = new THREE.Line( quadraticBezierLine3, materialQuadraticBezier );
    var drawuadraticBezier4 = new THREE.Line( quadraticBezierLine4, materialQuadraticBezier );

    var drawCubicBezierLine0 = new THREE.Line( cubicBezierLine0, materialCubicBezier );
    var drawCubicBezierLine1 = new THREE.Line( cubicBezierLine1, materialCubicBezier );
    var drawCubicBezierLine2 = new THREE.Line( cubicBezierLine2, materialCubicBezier );
    var drawCubicBezierLine3 = new THREE.Line( cubicBezierLine3, materialCubicBezier );

    scene.add( drawLine );
    scene.add( drawSpline );
    //
    scene.add( drawuadraticBezier0 );
    scene.add( drawuadraticBezier1 );
    scene.add( drawuadraticBezier2 );
    scene.add( drawuadraticBezier3 );
    scene.add( drawuadraticBezier4 );
    //
    scene.add( drawCubicBezierLine0 );
    scene.add( drawCubicBezierLine1 );
    scene.add( drawCubicBezierLine2 );
    scene.add( drawCubicBezierLine3 );


    var axes = new THREE.AxisHelper(150);
    axes.position.set( 0,0,0 );
    scene.add(axes);
    var gridXY = new THREE.GridHelper(50, 50);
    gridXY.position.set( 0,0,0 );
    gridXY.rotation.x = Math.PI/2;
    gridXY.setColors( new THREE.Color(0x000066), new THREE.Color(0x000066) );
    scene.add(gridXY);



    var tubegeoSpline = new THREE.TubeGeometry(splineFat, 128, 0.3, 12);
    var tubeSpline = new THREE.Mesh(tubegeoSpline, materialLine);
    //scene.add(tubeSpline);

    var tubegeo = new THREE.TubeGeometry(BezeFat, 128, 0.3, 12);
    var tube = new THREE.Mesh(tubegeo, materialLine);
    var tubegeo1 = new THREE.TubeGeometry(BezeFat4, 128, 0.3, 12);
    var tube1 = new THREE.Mesh(tubegeo1, materialLine);
    var tubegeo2 = new THREE.TubeGeometry(BezeFat2, 128, 0.3, 12);
    var tube2 = new THREE.Mesh(tubegeo2, materialLine);
    var tubegeo3 = new THREE.TubeGeometry(BezeFat3, 128, 0.3, 12);
    var tube3 = new THREE.Mesh(tubegeo3, materialLine);




    /* scene.add(tube);
     scene.add(tube1);
     scene.add(tube2);
     scene.add(tube3);*/
}

function animate()
{
    requestAnimationFrame(animate);
    render();
}

function render()
{
    controls.update();
    renderer.render(scene, camera);
}

function AddCamera(X,Y,Z)
{
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set(X,Y,Z);
    controls = new THREE.TrackballControls( camera, container );
    controls.rotateSpeed = 2;
    controls.noZoom = false;
    controls.zoomSpeed = 1.2;
    controls.staticMoving = true;
}

function AddLight(X,Y,Z)
{
    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set(X,Y,Z);
    scene.add( light );
}
