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
const jimp = require('jimp')

clearConsole()

jimp.read('world.jpg', (err, map_image) => {
  if (err) throw err;
  map_image.resize(100, 50);
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
  const chalk = require('chalk');
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




//Vorerst nur ein Platzhalter
setInterval(function () {

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