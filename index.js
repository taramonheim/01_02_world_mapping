/*
 * WORLD MAP VISUALIZER
 * Author: <Tara Monheim>
 * ---------------------------
 *
 * Visualizing the world!
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe 2.0: Das Script soll eine Weltkarte auf der Konsole als ASCII-Art zeichnen.
 *  Dafür muss jeder Pixel eines Bild einer Weltkarte gelesen und geprüft werden (world.jpg).
 *  Ist der Pixel schwarz, soll ein Zeichen (z.B. "#") an die richtige Stelle der Konsole 
 *  gesetzt werden. Dafür braucht ihr zwei Funktionen:
 *
 *  getPixelColor(x,y) - kann mit map_image-Objekt benutzt werden (also map_image.getPixelColor(x,y))
 *  writeCharacterToConsole(char, x, y) - Schreibt ein Zeichen an eine Position x/y auf die Konsole
 *
 *  Aufgabe 2.1: Farbe! Schaut euch das npm-Modul "chalk" an, und versucht die Zeichen in Farbe auszugeben
 *
 */

const rl = require('readline')
// eslint-disable-next-line no-unused-vars
const jimp = require('jimp')

clearConsole()
/*
jimp.read('katzi.jpg', (err, map_image) => {
  if (err) throw err;
  map_image.resize(100, 50);*/
//console.log(map_image.getPixelColor(0, 0)); //gibt die Farbe des Pixels links oben zurück
//writeCharacterToConsole('#', 0, 0); //schreibt ein # links oben in die Konsole

/*1. eine boolean erschaffen, der die einzelnen Positionen der Karte berechnet und mit Hashtags
ersetzt */
//2. wenn ein Pixel an einer Stelle ist wird dieses mit einem Hashtag an genau der gleichen Position ersetzt
//3. Hierzu braucht man die Position des Pixels und die Größe der Console 
//4. Hierzu braucht man die X und Y Koordinate
//5. unsere Schleife muss den Schwarz und Weissraum auf dem Bild automatisch erkennen 
//6. if = schwarz ersetze mit Hashtag ; else if = ersetze es nicht und gehe zum nächsten Pixel
//7. wenn die Reihe durch ist springe eine Reihe runter 
//8. brauche Pixel for - Schleife in der Linien - for Schleife
/*const chalk = require('chalk');
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 50; y++) {

      const color = jimp.intToRGBA(map_image.getPixelColor(x, y));
      writeCharacterToConsole(chalk.rgb(color.r, color.g, color.b)('##'), x, y);
    }
  }
});*/

const chalk = require('chalk');
let invader = [];

function generateInvader (width, height, xpos, ypos) {
  /*1. um den Spaceinvader zu generieren brauche ich eine Funktion,
  die in Pixelschritten auf meiner x und y Achseç
  läuft, innerhalb meines vorgegebenen Rahmens (width, height).*/
  for (let x = 0; x < width; x++) {
    invader[x] = [];
    for (let y = 0; y < height; y++) {
      let random = Math.random();
      const hue = Math.random() * 360;
      let r = Math.floor(Math.random() * 100);
      let g = Math.floor(Math.random() * 100);
      /*let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);*/

      if (random <= 0.5) {
        writeCharacterToConsole(chalk.hsv(hue, r, g)('■'), x + xpos, y + ypos);
        writeCharacterToConsole(chalk.hsv(hue, r, g)('■'), width * 2 - x + xpos, y + ypos); //spiegelverkehrt deswegen kann man nicht addieren von der Grenze aus
        rl.cursorTo(process.studout, 0, 0)
        invader[x][y] = 1

      } else {
        invader[x][y] = 0
      }
    }
  }
}

//return invader;
//generiert Zufallszahlen zwischen 0 und 1 - 0.5 Grenze kleiner = schwarz größer = weiß 

//2. Wenn die Reihe durchgelaufen ist springt sie eine Zeile runter.

//3. Diese Angaben (W, H) kann man ändern.

//4. Das Bild wird an der y - Achse gespiegelt. 

//5. Hierzu brauche ich eine Funktion die zufällig schwarze Pixel generiert.

/*const chalk = require('chalk');
  for (let x = 0; x < 101; x++) {
    for (let y = 0; y < 51; y++) {
      //console.log(map_image.getPixelColor(x, y)); //um zu checken, wo welches Muster ist
      if (map_image.getPixelColor(x, y) < 256) { //4294967295
        writeCharacterToConsole(chalk.red('#'), x, y);
      } else { //4294967295
        writeCharacterToConsole(chalk.blue('#'), x, y);
      }
    }
  }
});

*/
//Vorerst nur ein Platzhalter
setInterval(function () {
  const xpos = Math.floor(Math.random() * 40);
  const ypos = Math.floor(Math.random() * 40);
  clearConsole()
  generateInvader(10, 6, xpos, ypos);

}, 1000);

/*
 * HELPER FUNCTIONS - DO NOT CHANGE
 */
function clearConsole () {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)

  rl.cursorTo(process.stdout, 0, 0)
  rl.clearScreenDown(process.stdout)
}

function writeCharacterToConsole (char, x, y) {
  rl.cursorTo(process.stdout, x, y)
  process.stdout.write(char)
}

// let arrayPixels = []
// arrayPixels[0] = []
//arrayPixels[0][0] = 1
//arrayPixels[1][2] = 1
//arrayPixels[0][2] = 1
// x und y Werte darein setzten 