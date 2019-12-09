function init() {

	var rotateVarN = 0.0;
		//Parameters that can be modified.
				guiControls = new function() {
					this.model = 'Default';
					this.steps = 786.0;
					this.alphaCorrection = 0.99;
					this.minR = 0.3;
					this.maxR = 0.7;
					this.minG = 0.3;
					this.maxG = 0.7;
					this.minB = 0.3;
					this.maxB = 0.7;
					this.rotateVar3D =0.0;
					this.modeGBC = 1.0;
					this.r_fe = 1.0;
          this.r_mass = 0.0;
          this.r_pd = 0.0;
          this.r_pt = 0.0;
          this.g_fe = 0.0;
          this.g_mass = 1.0;
          this.g_pd = 0.0;
          this.g_pt = 0.0;
          this.b_fe = 0.0;
          this.b_mass = 0.0;
          this.b_pd = 1.0;
          this.b_pt = 0.0;
          this.radialValue = 0.0;
					this.binValue = 5.0;
					this.testValue=0.0;
					this.radiusR = 155.1;
					this.xValue = 0.0;
					this.yValue = 0.0;
					this.arcWidth = 6.3;
					this.modeARC = 1.0;
					this.startAng = 0.1;
          this.aa= 0.0;
					this.points = 26700.0;
					this.lensMode = 0.0;
					this.lensAng = 0.0;
					this.lensMove = 1.0;
					this.rangeVal = 0.01;
					this.maxrangeVal=0.99;
					this.blend=1.0;
					this.xClippingPlaneMin = 0.91;
					this.xClippingPlaneMax = 0.00999;
					this.yClippingPlaneMin = 0.91;
					this.yClippingPlaneMax = 0.00999;
					this.zClippingPlaneMin = 0.91;
					this.zClippingPlaneMax = 0.00999;
					this.wClippingPlane = 2.001;
					this.brushMode = 0.0;

					this.color1 = "#e41a1a";
					this.color2 = "#0E8BF0";
					this.color3 = "#18E134";
					this.color4 = "#ff7f00";
					this.color5 = "#984EA3";
					this.color6 = "#ff7f00";

					this.hslh1 = 0.0;
					this.hslh2 = 270.0;
					this.hslh3 = 128.0;
					this.hslh4 = 30.0;
					this.hslh5 = 292.0;
					this.hsls1 = 0.8;
					this.hsls2 = 0.8;
					this.hsls3 = 0.8;
					this.hsls4 = 0.8;
					this.hsls5 = 0.5;
					this.hsll = 0.5;

					this.clusters = 1.0;

          this.defaultLens = false;
					this.axishow = false;
					this.showbox = false;
          this.texthelper = false;

					this.axisClipping = 1.0;
          this.views = 0.0;
					this.startX = 0.0;
					this.startY =  0.0;

					this.polySide = 6.0;

					this.x1 = 0.0;
					this.x2 = 0.0;
					this.x3 = 0.0;
					this.x4 = 0.0;
					this.x5 = 0.0;
					this.x6 = 0.0;
					this.x7 = 0.0;
					this.x8 = 0.0;
					this.x9 = 0.0;

					this.y1 = 0.0;
					this.y2 = 0.0;
					this.y3 = 0.0;
					this.y4 = 0.0;
					this.y5 = 0.0;
					this.y6 = 0.0;
					this.y7 = 0.0;
					this.y8 = 0.0;
					this.y9 = 0.0;

					this.x11 = 0.0;
					this.x12 = 0.0;
					this.x13 = 0.0;
					this.x14 = 0.0;
					this.x15 = 0.0;
					this.x16 = 0.0;
					this.x17 = 0.0;
					this.x18 = 0.0;
					this.x19 = 0.0;

					this.y11 = 0.0;
					this.y12 = 0.0;
					this.y13 = 0.0;
					this.y14 = 0.0;
					this.y15 = 0.0;
					this.y16 = 0.0;
					this.y17 = 0.0;
					this.y18 = 0.0;
					this.y19 = 0.0;

					this.x31 = 0.0;
					this.x32 = 0.0;
					this.x33 = 0.0;
					this.x34 = 0.0;
					this.x35 = 0.0;
					this.x36 = 0.0;
					this.x37 = 0.0;
					this.x38 = 0.0;
					this.x39 = 0.0;

					this.y31 = 0.0;
					this.y32 = 0.0;
					this.y33 = 0.0;
					this.y34 = 0.0;
					this.y35 = 0.0;
					this.y36 = 0.0;
					this.y37 = 0.0;
					this.y38 = 0.0;
					this.y39 = 0.0;

					this.x41 = 0.0;
					this.x42 = 0.0;
					this.x43 = 0.0;
					this.x44 = 0.0;
					this.x45 = 0.0;
					this.x46 = 0.0;
					this.x47 = 0.0;
					this.x48 = 0.0;
					this.x49 = 0.0;

					this.y41 = 0.0;
					this.y42 = 0.0;
					this.y43 = 0.0;
					this.y44 = 0.0;
					this.y45 = 0.0;
					this.y46 = 0.0;
					this.y47 = 0.0;
					this.y48 = 0.0;
					this.y49 = 0.0;

					this.x51 = 0.0;
					this.x52 = 0.0;
					this.x53 = 0.0;
					this.x54 = 0.0;
					this.x55 = 0.0;
					this.x56 = 0.0;
					this.x57 = 0.0;
					this.x58 = 0.0;
					this.x59 = 0.0;

					this.y51 = 0.0;
					this.y52 = 0.0;
					this.y53 = 0.0;
					this.y54 = 0.0;
					this.y55 = 0.0;
					this.y56 = 0.0;
					this.y57 = 0.0;
					this.y58 = 0.0;
					this.y59 = 0.0;


				};

				container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.001, 30000.0 );

				camera.position.z = 2.0;
				// camera.position.x = 1.1;
        // camera.position.y = 1.0;

        ChangeView();

        function ChangeView(newValue){
          if (newValue == 0.0){
            camera.position.x = 0.0;
            camera.position.y = 0.0;
            camera.position.z = 2.0;
            controls.update();
            controls.center.set( 0.0, 0.0, 0.0 );
          }
          else if (newValue == 1.0){
            camera.position.x = 0.0;
            camera.position.y = 1.0;
            camera.position.z = 2.0;
            controls.update();
            controls.center.set( 0.0, 0.0, 0.0 );
          }
        }

				changeMousePositionX();
				changeMousePositionY();



        // camera.target = new THREE.Vector3(0, 0, 0);
        // camera.lookAt(camera.target);

				var dirLight = new THREE.DirectionalLight( 0xffffff );
				dirLight.position.set( 200, 200, 1000 ).normalize();

				camera.add( dirLight );
				camera.add( dirLight.target );

        controls = new THREE.OrbitControls( camera, container );
        controls.center.set( 0.0, 0.0, 0.0 );

	      var gui = new dat.GUI();


			//	var modelSelected = gui.add(guiControls, 'model', [ 'Default'] );
			  var f2 = gui.addFolder("3D-2D-COLORMAP")
				var colorS = f2.add(guiControls, 'steps', 0.0, 2000.0).name('STEPS');
				f2.add(guiControls, 'alphaCorrection', 0.00, 1.0).step(0.01).name('ALPHA');
				f2.add(guiControls, 'rangeVal', 0.00, 1.0).step(0.01).name('MIN-RANGE');
				f2.add(guiControls, 'maxrangeVal', 0.00, 1.0).step(0.01).name('MAX-RANGE');
				//f2.add(guiControls, "axishow").onChange(showAxis).name('AXIS');
				f2.add(guiControls, "axishow").name('AXIS-HELPER').onChange(function(newValue) {
					showAxis(newValue) });

				f2.add(guiControls, "showbox").name('BOX-HELPER').onChange(function(newValue) {
					showBOX(newValue)});

        f2.add(guiControls, "texthelper").name('TEXT-HELPER').onChange(function(newValue) {
					showTEXT(newValue)});
				//
				// f2.add(guiControls, "axisClipping").name('AXIS CLIPPING').onChange(function(newValue) {
				// 	//guiControls.axisClipping = 1.0;
				// 	planeClipping(newValue)});



			 var controllerColor1,controllerColor2,controllerColor3,controllerColor4,controllerColor5;

				var ColorMap = gui.addFolder("2D-COLORMAP");
				gui.add(guiControls, 'points', 0.0, 165000.0).step(10.0).name('POINTS');
				gui.add(guiControls, 'rotateVar3D', 0.0, 6.3).step(0.01).name('ROTATE');
        gui.add(guiControls, 'radialValue', 0.0, 200).step(2).name('RADIAL');
				gui.add(guiControls, 'binValue', 0.0, 100).step(2).name('BIN');
				// gui.add(guiControls,'modeGBC',{NORMAL:0.0,GBC:1.0,DGBC:2.0}).name('MODE');
				// gui.add(guiControls,'blend',{AVERAGE:1.0,NORMAL:0.0}).name('BLEND-MODE');
				// gui.add(guiControls,'modeARC',{WEDGE:0.0,LENS:1.0}).name('WEDGE / LENS');


				var PAINT = gui.addFolder("PAINT_Clusters");
				PAINT.add(guiControls,'clusters',{ONE:1.0,TWO:2.0,THREE:3.0,FOUR:4.0,FIVE:5.0}).name('No of Clusters').onChange(function(newValue) {
					changeCLusterNo(newValue)});
				PAINT.add(guiControls,'polySide',{FOUR:5.0,FIVE:6.0,SIX:7.0,SEVEN:8.0,EIGHT:9.0}).name('Polygon Shape');




				function changeCLusterNo(newValue){

				guiControls.clusters = newValue;
				if (guiControls.clusters == 1.0){

				if (controllerColor2 != undefined){
					PAINT.remove(controllerColor2);
					controllerColor2 = undefined;
				}

				if (controllerColor3 != undefined){
					PAINT.remove(controllerColor3);
					controllerColor3 = undefined;
				}

				if (controllerColor4 != undefined){
					PAINT.remove(controllerColor4);
					controllerColor4 = undefined;
				}

				if (controllerColor5 != undefined){
					PAINT.remove(controllerColor5);
					controllerColor5 = undefined;
				}

				if (controllerColor1 == undefined){
					controllerColor1 = PAINT.addColor(guiControls, 'color1').name('Cluster-1');
				}
					controllerColor1.onChange(changeColors)
				}

				else if (guiControls.clusters == 2.0){

					if (controllerColor3 != undefined){
						PAINT.remove(controllerColor3);
						 controllerColor3 = undefined;
					}

					if (controllerColor4 != undefined){
						PAINT.remove(controllerColor4);
						controllerColor4 = undefined;
					}

					if (controllerColor5 != undefined){
						PAINT.remove(controllerColor5);
						controllerColor5 = undefined;
					}

					if (controllerColor1 == undefined){
						controllerColor1 = PAINT.addColor(guiControls, 'color1').name('Cluster-1');
					}
				if (controllerColor2 == undefined){
					controllerColor2 = PAINT.addColor(guiControls, 'color2').name('Cluster-2');
				}
				controllerColor1.onChange(changeColors)
				controllerColor2.onChange(changeColors)
				}
				else if (guiControls.clusters == 3.0){

					if (controllerColor4 != undefined){
						PAINT.remove(controllerColor4);
						controllerColor4 = undefined;
					}

					if (controllerColor5 != undefined){
						PAINT.remove(controllerColor5);
						controllerColor5 = undefined;
					}

					if (controllerColor1 == undefined){
						controllerColor1 = PAINT.addColor(guiControls, 'color1').name('Cluster-1');
					}
					if (controllerColor2 == undefined){
						controllerColor2 = PAINT.addColor(guiControls, 'color2').name('Cluster-2');
					}
					if (controllerColor3 == undefined){
						controllerColor3 = PAINT.addColor(guiControls, 'color3').name('Cluster-3');
					}


				controllerColor2.onChange(changeColors)
				controllerColor1.onChange(changeColors)
				controllerColor3.onChange(changeColors)
				}

				else if (guiControls.clusters == 4.0){

					if (controllerColor5 != undefined){
						PAINT.remove(controllerColor5);
						controllerColor5 = undefined;
					}

					if (controllerColor1 == undefined){
						controllerColor1 = PAINT.addColor(guiControls, 'color1').name('Cluster-1');
					}
					if (controllerColor2 == undefined){
						controllerColor2 = PAINT.addColor(guiControls, 'color2').name('Cluster-2');
					}
					if (controllerColor3 == undefined){
						controllerColor3 = PAINT.addColor(guiControls, 'color3').name('Cluster-3');
					}
					if (controllerColor4 == undefined){
						controllerColor4 = PAINT.addColor(guiControls, 'color4').name('Cluster-4');
					}


				controllerColor2.onChange(changeColors)
				controllerColor1.onChange(changeColors)
				controllerColor3.onChange(changeColors)
				controllerColor4.onChange(changeColors)
				}

				else if (guiControls.clusters == 5.0){

					if (controllerColor1 == undefined){
						controllerColor1 = PAINT.addColor(guiControls, 'color1').name('Cluster-1');
					}
					if (controllerColor2 == undefined){
						controllerColor2 = PAINT.addColor(guiControls, 'color2').name('Cluster-2');
					}
					if (controllerColor3 == undefined){
						controllerColor3 = PAINT.addColor(guiControls, 'color3').name('Cluster-3');
					}
					if (controllerColor4 == undefined){
						controllerColor4 = PAINT.addColor(guiControls, 'color4').name('Cluster-4');
					}
					if (controllerColor5 == undefined){
						controllerColor5 = PAINT.addColor(guiControls, 'color5').name('Cluster-5');
					}

				controllerColor2.onChange(changeColors)
				controllerColor1.onChange(changeColors)
				controllerColor3.onChange(changeColors)
				controllerColor4.onChange(changeColors)
				controllerColor5.onChange(changeColors)
				}

				}

				changeCLusterNo(guiControls.clusters);
				// var controllerColor2 = PAINT.addColor(guiControls, 'color2').name('Cluster-2');
				// controllerColor2.onChange(changeColors)
				// var controllerColor3 = PAINT.addColor(guiControls, 'color3').name('Cluster-3');
				// controllerColor3.onChange(changeColors)

				var customContainer2 = document.getElementById('my-gui-container2');
				customContainer2.appendChild(PAINT.domElement);


				var LENS = gui.addFolder("LENS");
        LENS.add(guiControls, 'defaultLens').name('LENS').onChange(function (newValueLens){
					changeLensPar(newValueLens)
				});



				//.onChange(function (value){ init();         });
				LENS.add(guiControls,'radiusR',0.0,156.0).step(1.0).name('LENS RADIUS');

				function changeLensPar(newValueLens){
				if (newValueLens == false){
					guiControls.xValue = 0.0;
					guiControls.yValue = 0.0;
					guiControls.radiusR = 155.1;
				}
			}
				// LENS.add(guiControls,'xValue',-140.0,140.0).step(1.0).name('MOVE-X');
				// LENS.add(guiControls,'yValue',-140.0,140.0).step(1.0).name('MOVE-Y');
				// LENS.add(guiControls,'lensAng',0.0,6.3).step(0.1).name('ROTATE LENS');
				LENS.add(guiControls,'lensMode',{NORMAL:0.0,INVERTED:1.0}).name('LENS MODE');
				// LENS.add(guiControls,'lensMove',{ROTATIONAL:0.0,TRANSLATIONAL:1.0}).name('LENS MOVEMENT');
				// var WEDGE = gui.addFolder("WEDGE");
				// gui.add(guiControls,'startAng',0.0,360.0).step(1.0).name('START ANGLE');
				// gui.add(guiControls,'arcWidth',0.0,6.3).step(0.01).name('END ANGLE');

				f2.domElement.classList.add('red');

				var Clip = gui.addFolder("CLIPPING");
        // Clip.add(guiControls, 'views', {XY:0.0,YX:1.0,XZ:2.0,ZX:3.0,YZ:4.0,ZY:5.0}).name('VIEWS').onChange(function(newValue) {
					// ChangeView(newValue)});

				Clip.add(guiControls, 'axisClipping', {NO:0.0,YES:1.0}).name('AXIS CLIP')
				Clip.add(guiControls, 'xClippingPlaneMin', -0.90001, 0.999).step(0.001).name('X CLIP').onChange(function(newValue) {

          console.log(guiControls.axisClipping);
          if (guiControls.axisClipping == 0.0){
					changeMousePositionX(newValue)
          }
				});
		//		gui.add(guiControls, 'xClippingPlaneMin2', -0.99, 0.99).step(0.01);
				Clip.add(guiControls, 'xClippingPlaneMax', 0.0001, 0.999).step(0.01).name(' - X CLIP');
				Clip.add(guiControls, 'yClippingPlaneMin', 0.0001, 0.999).step(0.001).name('Y CLIP').onChange(function(newValue) {
          if (guiControls.axisClipping == 0.0){
					changeMousePositionY(newValue)
        }
				});
				Clip.add(guiControls, 'yClippingPlaneMax', 0.0001, 0.999).step(0.01).name(' - Y CLIP');
				Clip.add(guiControls, 'zClippingPlaneMin', 0.0001, 0.999).step(0.0001).name('Z CLIP');
        Clip.add(guiControls,'zClippingPlaneMax', 0.0001, 0.999).step(0.01).name('- Z CLIP');
				Clip.add(guiControls, 'wClippingPlane', -2.001, 3.001).step(0.0001).name('PLANE');



				var customContainer = document.getElementById('my-gui-container');
				customContainer.appendChild(LENS.domElement);

				f2.open();
				LENS.open();
				Clip.open();
				PAINT.open();

				/*****************************************************************************************
						LOAD THE IMAGE TEXTURE TO BE USED FOR RENDERING
				******************************************************************************************/
			//	cubeTextures['Default'] = THREE.ImageUtils.loadTexture('./img/Final_Padded_FeMassPdPt.png' );
				/*cubeTextures['Default'] = THREE.ImageUtils.loadTexture('./img/12CeCoFeGd.png');
        cubeTextures['Default'].generateMipmaps = false;
				cubeTextures['Default'].minFilter = THREE.LinearFilter;
				cubeTextures['Default'].magFilter = THREE.LinearFilter;
*/
				//cubeTextures['d3'] = THREE.ImageUtils.loadTexture('./img/Final_Padded_FeMassPdPt.png');
				//	cubeTextures['d3'] = THREE.ImageUtils.loadTexture('./img/24CoFeCeGd.png');

					//cubeTextures['d3'] = THREE.ImageUtils.loadTexture('./img/CoAlTidpc_256.png');
				// cubeTextures['d3'] = THREE.ImageUtils.loadTexture('./img/O_Mass_O_Mass_new_2.png');15GdCeCoFe
				cubeTextures['d3'] = THREE.ImageUtils.loadTexture('./img/15GdCeCoFe.png');
        // cubeTextures['d3'].generateMipmaps = false;
				// cubeTextures['d3'].minFilter = THREE.LinearFilter;
				// cubeTextures['d3'].magFilter = THREE.LinearFilter;
			 // cubeTextures['Default'] = THREE.ImageUtils.loadTexture('./img/12CeCoFeGd.png');
				//cubeTextures['Default'] = THREE.ImageUtils.loadTexture('./img/FeNiONi_256.png');

			//	cubeTextures['Default'] = THREE.ImageUtils.loadTexture('./img/CodpTiAl_256.png');
		  //	cubeTextures['Default'] = THREE.ImageUtils.loadTexture('./img/CoAlTidpc_256_mag.png');O_Mass_O_Mass_2--Ni_Mn_Co_Mass_2
			//	cubeTextures['Default'] = THREE.ImageUtils.loadTexture('./img/Ni_Mn_Co_Mass_new_2.png');
			cubeTextures['Default'] = THREE.ImageUtils.loadTexture('./img/12CeCoFeGd.png');
        // cubeTextures['Default'].generateMipmaps = false;
				// cubeTextures['Default'].minFilter = THREE.LinearFilter;
				// cubeTextures['Default'].magFilter = THREE.LinearFilter;



			//	var transferTexture = updateTransferFunction();

				var screenSize = new THREE.Vector2( window.innerWidth/2, window.innerHeight/2 );
				rtTexture = new THREE.WebGLRenderTarget( screenSize.x, screenSize.y,
														{ 	minFilter: THREE.LinearFilter,
															magFilter: THREE.LinearFilter,
															wrapS:  THREE.ClampToEdgeWrapping,
															wrapT:  THREE.ClampToEdgeWrapping,
															format: THREE.RGBFormat,
															type: THREE.FloatType,
															generateMipmaps: false} );


				var materialFirstPass = new THREE.ShaderMaterial( {
					vertexShader: document.getElementById( 'vertexShaderFirstPass' ).textContent,
					fragmentShader: document.getElementById( 'fragmentShaderFirstPass' ).textContent,
					side: THREE.BackSide
				} );

				materialSecondPass = new THREE.ShaderMaterial( {
					vertexShader: document.getElementById( 'vertexShaderSecondPass' ).textContent,
					fragmentShader: document.getElementById( 'fragmentShaderSecondPass' ).textContent,
					side: THREE.FrontSide,
					uniforms: {	tex:  { type: "t", value: rtTexture },

								cubeTex2:  { type: "t", value: cubeTextures['d3'] },
								cubeTex:  { type: "t", value: cubeTextures['Default'] },

								transferTex:  { type: "t", value: transferTexture },
								steps : {type: "1f" , value: guiControls.steps },
								modeGBC : {type: "1f" , value: guiControls.modeGBC },
								rotateVar3D : {type: "1f" , value: guiControls.rotateVar3D },
								alphaCorrection : {type: "1f" , value: guiControls.alphaCorrection },
                radialValue : {type: "1f" , value: guiControls.radialValue },
								testValue : {type: "1f" , value: guiControls.testValue },
								binValue : {type: "1f" , value: guiControls.binValue },
								xValue : {type: "1f" , value: guiControls.xValue },
								yValue : {type: "1f" , value: guiControls.yValue },
								radiusR : {type: "1f" , value: guiControls.radiusR },
								arcWidth : {type: "1f" , value: guiControls.arcWidth },
								modeARC : {type: "1f" , value: guiControls.modeARC },
								points : {type: "1f" , value: guiControls.points },
                aa : {type: "1f" , value: guiControls.aa },
								lensMode : {type: "1f" , value: guiControls.lensMode },
								startAng : {type: "1f" , value: guiControls.startAng },
								lensMove : {type: "1f" , value: guiControls.lensMove },
								rangeVal : {type: "1f" , value: guiControls.rangeVal },
								maxrangeVal : {type: "1f" , value: guiControls.maxrangeVal },
								blend : {type: "1f" , value: guiControls.blend },
								lensAng : {type: "1f" , value: guiControls.lensAng },
								xClippingPlaneMin : {type: "1f" , value: guiControls.xClippingPlaneMin },
								xClippingPlaneMin2 : {type: "1f" , value: guiControls.xClippingPlaneMin2 },
								xClippingPlaneMax : {type: "1f" , value: guiControls.xClippingPlaneMax },
								yClippingPlaneMin : {type: "1f" , value: guiControls.yClippingPlaneMin },
								yClippingPlaneMax : {type: "1f" , value: guiControls.yClippingPlaneMax },
								zClippingPlaneMin : {type: "1f" , value: guiControls.zClippingPlaneMin },
								zClippingPlaneMax : {type: "1f" , value: guiControls.zClippingPlaneMax },
								wClippingPlane : {type: "1f" , value: guiControls.wClippingPlane },
								axisClipping: {type: "1f" , value: guiControls.axisClipping },
								startX: {type: "1f" , value: guiControls.startX },
								brushMode: {type: "1f" , value: guiControls.brushMode },
								startY: {type: "1f" , value: guiControls.startY },
								x1: {type: "1f" , value: guiControls.x1 },
								x2: {type: "1f" , value: guiControls.x2 },
								x3: {type: "1f" , value: guiControls.x3 },
								x4: {type: "1f" , value: guiControls.x4 },
								x5: {type: "1f" , value: guiControls.x5 },
								x6: {type: "1f" , value: guiControls.x6 },
								x7: {type: "1f" , value: guiControls.x7 },
								x8: {type: "1f" , value: guiControls.x8 },
								y1: {type: "1f" , value: guiControls.y1 },
								y2: {type: "1f" , value: guiControls.y2 },
								y3: {type: "1f" , value: guiControls.y3 },
								y4: {type: "1f" , value: guiControls.y4 },
								y5: {type: "1f" , value: guiControls.y5 },
								y6: {type: "1f" , value: guiControls.y6 },
								y7: {type: "1f" , value: guiControls.y7 },
								y8: {type: "1f" , value: guiControls.y8 },
								x11: {type: "1f" , value: guiControls.x11 },
								x12: {type: "1f" , value: guiControls.x12 },
								x13: {type: "1f" , value: guiControls.x13 },
								x14: {type: "1f" , value: guiControls.x14 },
								x15: {type: "1f" , value: guiControls.x15 },
								x16: {type: "1f" , value: guiControls.x16 },
								x17: {type: "1f" , value: guiControls.x17 },
								x18: {type: "1f" , value: guiControls.x18 },
								y11: {type: "1f" , value: guiControls.y11 },
								y12: {type: "1f" , value: guiControls.y12 },
								y13: {type: "1f" , value: guiControls.y13 },
								y14: {type: "1f" , value: guiControls.y14 },
								y15: {type: "1f" , value: guiControls.y15 },
								y16: {type: "1f" , value: guiControls.y16 },
								y17: {type: "1f" , value: guiControls.y17 },
								y18: {type: "1f" , value: guiControls.y18 },
								x31: {type: "1f" , value: guiControls.x31 },
								x32: {type: "1f" , value: guiControls.x32 },
								x33: {type: "1f" , value: guiControls.x33 },
								x34: {type: "1f" , value: guiControls.x34 },
								x35: {type: "1f" , value: guiControls.x35 },
								x36: {type: "1f" , value: guiControls.x36 },
								x37: {type: "1f" , value: guiControls.x37 },
								x38: {type: "1f" , value: guiControls.x38 },
								y31: {type: "1f" , value: guiControls.y31 },
								y32: {type: "1f" , value: guiControls.y32 },
								y33: {type: "1f" , value: guiControls.y33 },
								y34: {type: "1f" , value: guiControls.y34 },
								y35: {type: "1f" , value: guiControls.y35 },
								y36: {type: "1f" , value: guiControls.y36 },
								y37: {type: "1f" , value: guiControls.y37 },
								y38: {type: "1f" , value: guiControls.y38 },
								x41: {type: "1f" , value: guiControls.x41 },
								x42: {type: "1f" , value: guiControls.x42 },
								x43: {type: "1f" , value: guiControls.x43 },
								x44: {type: "1f" , value: guiControls.x44 },
								x45: {type: "1f" , value: guiControls.x45 },
								x46: {type: "1f" , value: guiControls.x46 },
								x47: {type: "1f" , value: guiControls.x47 },
								x48: {type: "1f" , value: guiControls.x48 },
								y41: {type: "1f" , value: guiControls.y41 },
								y42: {type: "1f" , value: guiControls.y42 },
								y43: {type: "1f" , value: guiControls.y43 },
								y44: {type: "1f" , value: guiControls.y44 },
								y45: {type: "1f" , value: guiControls.y45 },
								y46: {type: "1f" , value: guiControls.y46 },
								y47: {type: "1f" , value: guiControls.y47 },
								y48: {type: "1f" , value: guiControls.y48 },
								x51: {type: "1f" , value: guiControls.x51 },
								x52: {type: "1f" , value: guiControls.x52 },
								x53: {type: "1f" , value: guiControls.x53 },
								x54: {type: "1f" , value: guiControls.x54 },
								x55: {type: "1f" , value: guiControls.x55 },
								x56: {type: "1f" , value: guiControls.x56 },
								x57: {type: "1f" , value: guiControls.x57 },
								x58: {type: "1f" , value: guiControls.x58 },
								y51: {type: "1f" , value: guiControls.y51 },
								y52: {type: "1f" , value: guiControls.y52 },
								y53: {type: "1f" , value: guiControls.y53 },
								y54: {type: "1f" , value: guiControls.y54 },
								y55: {type: "1f" , value: guiControls.y55 },
								y56: {type: "1f" , value: guiControls.y56 },
								y57: {type: "1f" , value: guiControls.y57 },
								y58: {type: "1f" , value: guiControls.y58 },
								hslh1:{type: "1f" , value: guiControls.hslh1 },
								hslh2:{type: "1f" , value: guiControls.hslh2 },
								hslh3:{type: "1f" , value: guiControls.hslh3 },
								hslh4:{type: "1f" , value: guiControls.hslh4 },
								hslh5:{type: "1f" , value: guiControls.hslh5 },
								hsls1:{type: "1f" , value: guiControls.hsls1 },
								hsls2:{type: "1f" , value: guiControls.hsls2 },
								hsls3:{type: "1f" , value: guiControls.hsls3 },
								hsls4:{type: "1f" , value: guiControls.hsls4 },
								hsls5:{type: "1f" , value: guiControls.hsls5 },
								hsll:{type: "1f" , value: guiControls.hsll },
								polySide:{type: "1f" , value: guiControls.polySide },
								clusters:{type: "1f" , value: guiControls.clusters },
                defaultLens : {type: "bool" , value: guiControls.defaultLens }
								}
				 });



				sceneFirstPass = new THREE.Scene();
				sceneSecondPass = new THREE.Scene();


				var boxGeometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);
				boxGeometry.doubleSided = true;

				var meshFirstPass = new THREE.Mesh( boxGeometry, materialFirstPass );
				var meshSecondPass = new THREE.Mesh( boxGeometry, materialSecondPass );

				sceneFirstPass.add( meshFirstPass );
				sceneSecondPass.add( meshSecondPass );



							// add 3D text
var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var materialSide = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var materialArray = [ materialFront, materialSide ];
var textGeom1 = new THREE.TextGeometry( "X -- Y ",
{
	size: 0.1, height: 0.0, curveSegments: 0,
//	font: "helvetiker_regular", weight: "bold", style: "normal",
	bevelThickness: 0.001, bevelSize: 0, bevelEnabled: true,
	material: 0, extrudeMaterial: 1
});

var textGeom2 = new THREE.TextGeometry( "Y -- Z ",
{
	size: 0.1, height: 0.0, curveSegments: 0,
//	font: "helvetiker_regular", weight: "bold", style: "normal",
	bevelThickness: 0.001, bevelSize: 0, bevelEnabled: true,
	material: 0, extrudeMaterial: 1
});
var textGeom3 = new THREE.TextGeometry( "Y -- X ",
{
	size: 0.1, height: 0.0, curveSegments: 0,
//	font: "helvetiker_regular", weight: "bold", style: "normal",
	bevelThickness: 0.001, bevelSize: 0, bevelEnabled: true,
	material: 0, extrudeMaterial: 1
});
// font: helvetiker, gentilis, droid sans, droid serif, optimer
// weight: normal, bold

var textMaterial = new THREE.MeshFaceMaterial(materialArray);
var textMesh1 = new THREE.Mesh(textGeom1, textMaterial );
var textMesh2 = new THREE.Mesh(textGeom2, textMaterial );
var textMesh3 = new THREE.Mesh(textGeom3, textMaterial );

textGeom1.computeBoundingBox();
textGeom2.computeBoundingBox();
textGeom3.computeBoundingBox();

var textWidth = textGeom1.boundingBox.max.x - textGeom1.boundingBox.min.x;
var textWidth2 = 10
textMesh1.position.set( -0.15, 0.5, 0.5 );
textMesh2.position.set( 0.5, 0.5, 0.0 );

      function showTEXT(newValue){
        	if (newValue){
            sceneSecondPass.add(textMesh1);
            sceneSecondPass.add(textMesh2);
            sceneSecondPass.add(textMesh3);
          }
          else{
            sceneSecondPass.remove( textMesh1 );
            sceneSecondPass.remove( textMesh2 );
            sceneSecondPass.remove( textMesh3 );
          }
      }
//textMesh.rotation.x = -Math.PI / 4;


				// wireframe helper
			wireframeHelper = new THREE.WireframeHelper(meshSecondPass, 0xffffff);

			function showBOX(newValue){
				if (newValue){
					sceneSecondPass.add(wireframeHelper  );
					}
					else
						sceneSecondPass.remove( wireframeHelper );
			}

			//sceneSecondPass.add(wireframeHelper);

			meshAxis = new THREE.AxisHelper(1 );

			function showAxis(newValue){
				if (newValue){
					sceneSecondPass.add(meshAxis  );
					}
					else
						sceneSecondPass.remove( meshAxis );
			}


				renderer = new THREE.WebGLRenderer({ alpha: false });
				container.appendChild( renderer.domElement );


				onWindowResize();

				window.addEventListener( 'resize', onWindowResize, false );

				function changeColors(value)
				{
					var newCo1 = guiControls.color1;
					var steelblue1 = d3.hsl(newCo1);
					var newCo2 = guiControls.color2;
					var steelblue2 = d3.hsl(newCo2);
					var newCo3 = guiControls.color3;
					var steelblue3 = d3.hsl(newCo3);
					var newCo4 = guiControls.color4;
					var steelblue4 = d3.hsl(newCo4);
					var newCo5 = guiControls.color5;
					var steelblue5 = d3.hsl(newCo5);
					guiControls.hslh1 = steelblue1.h;
					guiControls.hslh2 = steelblue2.h;
					guiControls.hslh3 = steelblue3.h;
					guiControls.hslh4 = steelblue4.h;
					guiControls.hslh5 = steelblue5.h;
					guiControls.hsls1 = steelblue1.s;
					guiControls.hsls2 = steelblue2.s;
					guiControls.hsls3 = steelblue3.s;
					guiControls.hsls4 = steelblue4.s;
					guiControls.hsls5 = steelblue5.s;
					guiControls.hsll = steelblue1.l;
				}



				function changeMousePositionX(newValue)
			{
				if (newValue == null && guiControls.axisClipping == 0.0)
				{
					camera.position.x = 1.0;
					camera.position.z = 1.0;
          camera.position.y = 1.0;
					//controls.update();
				}
				else if(newValue && guiControls.axisClipping == 0.0) {
					camera.position.x = newValue;
					controls.update();
					//controls.center.set( 0.0, 0.0, 0.0 );
				}

				// camera.position.y = 1.0;
				// camera.position.z = 1.0;
			}

			function changeMousePositionY(newValue)
		{
			if (newValue == null && guiControls.axisClipping == 0.0)
			{
				camera.position.y = 1.0;
				camera.position.z = 1.0;
        camera.position.x = 1.0;
					//controls.update();
			}
			else if (newValue && guiControls.axisClipping == 0.0){
				camera.position.y = newValue;
				controls.update();
				controls.center.set( 0.0, 0.0, 0.0 );
			}

			// camera.position.y = 1.0;
			// camera.position.z = 1.0;
		}
		//axisClipping =
		// function planeClipping(newValue){
		// 	if (newValue == null){
		// 		guiControls.axisClipping = 0.0
		// 	}
		// 	else{
		// 		guiControls.axisClipping = 1.0
		// 	}
		// 	console.log(guiControls.axisClipping);
		// }

			}
