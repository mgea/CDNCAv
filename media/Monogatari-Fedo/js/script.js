/********************************/
/*    FEDO Visual Novel, 2016   */
/*       to Monogatari.io       */
/********************************/
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

/* RAMIFICACION NARRATIVA */
/*                                                     */ 
/* https://sketchboard.me/VBl5czywdsZs#/   with Chrome */ 
/* https://www.draw.io/                                */
/* http://utopolis.ugr.es/media/storytelling/fedo      */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "lalalala",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Hola",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {
 
};

// Define the music used in the game.
const music = {
    grito: "grito.mp3",
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
   
    "background": "background.jpg",
    
};

// Define the Characters
const characters = {
	
    "f": {
		"Name": "Fedo",
		"Color": "#5bcaff",
        "Images": {
            "happy": "fedohappy.png",
            "normal": "fedonormal.png",
            "sad": "fedosad.png",
            "surprised" : "fedosurprised.png",
            "angry" : "fedoangry.png",
            "hurt" : "fedohurt.png"
        }
	}, 
    
   
    
    
};

let script = {
	// The game starts here.
	"Start": [
        "centered Las Aventuras de Fedo",
        "centered Idea original de Maria, Fede y Elena. Comunicacion Audiovisual, Universidad de Granada (2016)",
        "play music doh.mp3",
        "scene black",
        "...",
		"f Ufff... suputamadre, vaya cuesta",
        "scene puertaprincipal with RubberBand",
        "show f happy center with bounceInUp",
        
        // ___ ATAJO 
        // "jump Clase",  
        // ___ 
        
        
        "f Bueno, al menos ya he llegado..",
        "f Qué ganas de empezar el curso...",
        
        "f  Todos me han dicho que audiovisuales es una carrera muy chula...seguro que aprendo un montón.",
    
        "show f surprised with wobble",
        "f La verdad es que he llegado un poco pronto...",
        "f podría entrar antes o darme un paseo e investigar",
        "show f happy with pulse", 
       {
			"Choice": {
				"Dialog": "f Que hago?",
				"Yes": {
					"Text": "Entrar a la Facultad",
					"Do": "jump Hall"
				},
				"No": {
					"Text": "Pasear un rato por el jardín",
					"Do": "jump Jardin"
				}
			}
		},
	],

	"Hall": [
        "scene hall",
        "show f happy with bounceInRight",
        "f Wow, qué bonito es esto... A ver, según mi horario",
        "show f surprised",
        "f Ufff, tengo Derecho...",
        "show f sad",
        "f Ufff... bueno, no pasa nada, he tenido clases peores.",
        "show f normal",
        
        {
			"Choice": {
				"Dialog": "f Pero, ¿por dónde se irá??",
				"Yes": {
					"Text": "Ir por el pasillo",
					"Do": "jump Pasillo"
				},
				"No": {
					"Text": "Subir las escaleras",
					"Do": "jump gameover"
				}
			}
		},
		
		"end"
	],

	
    
    
    
     "gameover": [
        "play sound pacman-dies.mp3",
        "ooooohhh",
        "scene black",
        "play sound gameover.mp3",   
         "GAME OVER... ¡VUELVE A INTENTARLO!",
         "end"
	],
    
     "win": [
        // "scene black",
         "scene background with jello",
        "play sound aleluya.mp3",   
         "¡HAS GANADO!!!!!",
         "end"
	],
    
};