var firstName= ["Ali ", "Peter ", "Thomas ", "Mustafa ", "Hasan ",    "Khalid ", "Omar ", "Jonas ", "Daniel ", "Kevin ", "Abraham ", "Mert ", "Yahya ", "Yusuf ", "Yassin ", "Anas ", "lukas ", "Markus ", "Domenik ", "Enes ", "Furat ", "Adam ", "Steffan ", "Ozan ", "Batuhan ", "Abu bakr ", "Talha ", "Malik "];

var lastName= ["Lsane", "Mustermann", "Mikulu", "Toprak", "Zimmermann", "Steiner", "Gashi", "Finster", "Schwarz", "Anand","Bhavsar", "Dutt", "Kapoor", "Kumar", "Raj", "Thakur", "Mehta", "Varma", "Pandey", "Miller", "Acharya", "Tiwari", "Abudulai", "ibn Hasan", "Friedlich", "Dunkelmann", "ibn Walid", "Stock"];


function getName(){
  var randomName = firstName[Math.floor(Math.random()* firstName.length)] +''+ lastName[Math.floor(Math.random()* lastName.length)];
  return randomName;
}

function nameQty(){
  var userQty = document.querySelector('.qty').value;

  document.querySelector('.nameList').innerHTML = '';

  if(userQty > 10){
    document.querySelector('.nameList').innerHTML = 'Nur 10 Namen können Generiert werden!';
  }
  else{
    for(var i = 0; i < userQty; i++){
      document.querySelector('.nameList').innerHTML += getName() + '<br>';
    }
  }
}