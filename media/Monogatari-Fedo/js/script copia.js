"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
    "puertaprincipal" : "puertaprincipal01.jpg",
    "hall" : "Hall.jpg",
    "maquinas" : "maquinas.jpg",
    "avid" : "avid.jpg",
};

// Define the Characters
const characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	},
    
    "f": {
		"Name": "Fedo",
		"Color": "#5bcaff",
        "Images": {
            "happy": "fedohappy.png",
            "sad": "fedosad.png",
            "surprised" : "fedosurprised.png",
            "angry" : "fedoangry.png",
            "hurt" : "fedohurt.png"
        }
	}, 
    
     "fran": {
		"Name": "Fran",
		"Color": "#fb0a0f",
        "Images": {
            "normal": "fran.png",
            
        }
	}, 
    "d": {
		"Name": "Desconocido",
		"Color": "#5bcaff"
	}, 
    
    "b": {
		"Name": "Bolaños",
		"Color": "#5bcaff"
	}, 
    
    "e": {
		"Name": "Estrella",
		"Color": "#5bcaff"
	}, 
    
    "c": {
		"Name": "Julio",
		"Color": "#5bcaff"
	}, 
    
    "j": {
		"Name": "Jordi",
		"Color": "#5bcaff"
	}, 
    "g": {
		"Name": "Gea",
		"Color": "#5bcaff"
	}, 
    "s": {
		"Name": "Superperverso",
		"Color": "#5bcaff"
	}, 
    "t": {
		"Name": "Técnico",
		"Color": "#5bcaff"
	}, 
   
    "v": {
		"Name": "Voz",
		"Color": "#5bcaff"
	}, 
    
    
    
};

let script = {
	// The game starts here.
	"Start": [
        "centered Fedov2",
        "play music doh.mp3",
        "scene black",
        "scene puertaprincipal with bounce",
        "...",
        
       
        
        
        
        "...",
       // "show fran normal left",
        "show fran normal right with bounceInRight",
          "show f sad at left with bounceInLeft",
        //"show fran normal",
        "wait 1",
        " sds d sd s",
        "show fran normal right with bounceInUp",
         "show f happy center with bounce",
     //   "trasladar",
     //    "show fran normal left with bounceInLeft",
       // "show fran left  with rubberBand",
         "xcdff",
        "show f sad left with bounceInLeft",
        "show fran right  ",
      //  "show f sad left with SlideOutRight",
        
      
		"f Ufff... suputamadre, vaya cuesta",
        "scene puertaprincipal with FadeIn",
         "show f sad at left with bounce",
        "show fran normal",
        "sfdffdf",
        "show f happy center with SlideOutRight",
        "..",
        "hide f  with FadeIn",
         "show f happy left with SlideInRight",
        "f Bueno, al menos ya he llegado..",
        
        
        "jump Avid", 
        "f Qué ganas de empezar el curso...",
        "f  Todos me han dicho que audiovisuales es una carrera muy chula...seguro que aprendo un montón.",
        "f La verdad es que he llegado un poco pronto...podría entrar antes o darme un paseo e investigar",

       
	],

	"Hall": [
        "scene hall",
        "show f happy",
        "f Wow, qué bonito es esto... A ver, según mi horario",
        "show f surprised",
        "f Ufff, tengo Derecho...",
        "show f sad",
        "f Ufff... bueno, no pasa nada, he tenido clases peores.",
        "show f normal",
        
        {
			"Choice": {
				"Dialog": "f Pero, ¿por dónde se irá??",
				"Yes2": {
					"Text": "Ir por el pasillo",
					"Do": "jump Pasillo"
				},
				"No2": {
					"Text": "Subir las escaleras",
					"Do": "jump Escaleras"
				}
			}
		},
		
		"end"
	],

	"Pasillo": [

        "scene maquinas",
        "show f surprised",
        "f ¿Y estas máquinas tan antiguas? ¿De dónde habrán salido?",
        {
			"Choice": {
				"Dialog": "f ¿Que hago?",
				"Yes3": {
					"Text": "Acercarte a trastear",
					"Do": "jump Maquinas"
				},
				"No3": {
					"Text": "Mejor te estás quieto y te vas a clase",
					"Do": "jump Avid"
				}
			}
		},
		"end"
	],
    
    "Maquinas": [

    "scene black",
    "Fedo se acercó a mirar las máquinas con curiosidad. Extendió una mano y tocó con delicadeza una de ellas.",
    "stop music",
    "play sound golpe.wav",
    "La máquina se deshace en mil pedazos ante sus incrédulos ojos",

    "show f surprised",
    "f ¿Pero qué...?",
    "Fedo mira a ambos lados y descubre que un conserje ha visto todo lo que ha ocurrido",
    "jump gameover",
    "end"
	],
    
    
    
     "Avid": [

        "scene avid",
        "scene avid",
        "show f surprised at left with bounceInLeft", 
        "f Emmm… creo que esta no es mi clase…",
        "f ¿Avid? ¿Qué es Avid?",
         "show fran normal right with bounceInRight",
         "fran ¿No conoces Avid? Avid es el programa de montaje con el que se edita en la facultad…?",
        "fran Si quieres te pongo un ordenador.",
        "show f happy at left",
        {
			"Choice": {
				"Dialog": "f Que hago?",
				"Yes": {
					"Text": "Probar Avid",
					"Do": "jump gameover"
				},
				"No": {
					"Text": "Salir de Clase",
					"Do": "jump SalirClase"
				}
			}
		},
        
	   "end"
	],
    
    "Escaleras": [

        
		"h You can do it now.",

		"display message Help",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	],
    
    
    
    "SalirClase": [

    "scene black",
    "Fedo se acercó a mirar las máquinas con curiosidad. Extendió una mano y tocó con delicadeza una de ellas.",
    "stop music",
    "play sound golpe.wav",
    "La máquina se deshace en mil pedazos ante sus incrédulos ojos",

    "show f surprised",
    "f ¿Pero qué...?",
    "Fedo mira a ambos lados y descubre que un conserje ha visto todo lo que ha ocurrido",
    "jump gameover",
    "end"
	],
    
    
     "gameover": [

        "play sound gameover.mp3",
        "scene black",
         "GAME OVER... ¡VUELVE A INTENTARLO!",
         "end"
	],
    
    
};