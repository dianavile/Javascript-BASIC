/*jshint esversion: 6 */

//ex 5
function myNote() {
  let nota_examen = 6;
  let i = nota_examen;

  //Step 1
  for (i = 0; i <= nota_examen.length; i++) {
    console.log(nota_examen[i]);
  }

  //Step 2
  if (i < 6) {
    alert("You did not pass your examen. Time to study again!");
  } else if (i >= 6) {
    alert("Congratulations, you passed your examen!");
  }
}
