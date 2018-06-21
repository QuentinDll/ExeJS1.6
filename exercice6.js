//declaration de fonction number
function number(){
  //declaration des variables
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var regex = /^[0-9.,]+$/;
  //boite de dialogue avec appel des variables
  if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true)){
    //conversion de la chaine de caractére
    var firstNumberInt = parseInt(firstNumber);
    var secondNumberFloat = parseFloat(secondNumber);
    //calcul si vrai
    var result1 = firstNumberInt % secondNumberFloat;
    //affichage du resulta
    alert(result1);
  }else{
    alert('Veuillez réessayer');
  }
}
