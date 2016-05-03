//Carlos Andres Barrientos Pardo
//Jhonatan Alexander Mancera


window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;

	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
	
	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter, 
									imagen	: 'img/jupiter.jpg'
							  }),
		escalajupiter = true;
	escena.add(jupiter);

	/*var mercurio = crearPlaneta({
									tamano 	: tamanomercurio,
									imagen	: 'img/mercurio.jpg'
							  }),
			escalamercurio = true;
	escena.add(mercurio);

	var tierra = crearPlaneta({
									tamano 	: tamanotierra,
									imagen	: 'img/tiera.jpg'
							  }),
			escalatierra = true;
	escena.add(tierra);
	var marte = crearPlaneta({
									tamano 	: tamanovenus,
									imagen	: 'img/venus.jpg'
							  }),
			escalavenus = true;
	escena.add(venus);*/
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	jupiter.position.x = 500;
	/*tierra.position.x = 100;
	venus.position.x = 200;
	mercurio.position.x= 50;*/
	escena.add(camara);

	var mercurio = crearPlaneta({
									tamano 	: tamanoJupiter*0.03, 
									imagen	: 'img/mercurio.jpg'
							  }),
		escalaMercurio = true;
	escena.add(mercurio);
	mercurio.position.x = 100;

	var  tierra = crearPlaneta({
									tamano 	: tamanoJupiter*0.09, 
									imagen	: 'img/tierra.jpg'
							  }),
		escalaTierra = true;
	escena.add(tierra);
	tierra.position.x = -10;


	var  venus = crearPlaneta({
									tamano 	: tamanoJupiter*0.08, 
									imagen	: 'img/venus.jpg'
							  }),
		escalaVenus = true;
	escena.add(venus);
	venus.position.x = -150;

	var  marte = crearPlaneta({
									tamano 	: tamanoJupiter*0.05, 
									imagen	: 'img/marte.jpg'
							  }),
		escalaMarte = true;
	escena.add(marte);
	marte.position.x = -300;


	function renderizar()
	{
		jupiter.rotation.y += 0.001;
		mercurio.rotation.y += 0.030;
		tierra.rotation.y += 0.015;
		venus.rotation.y += 0.010;
		marte.rotation.y += 0.040;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}
	renderizar();
};
