function scuberGreetingForFeet(rideHeight){

  if (rideHeight > 2500) {
    return("No can do.");
  } else if (rideHeight > 2000) {
    return("I will gladly take your thirty bucks.");
  } else if (rideHeight <= 400) {
    return("This one is on me!");
  }
}

function ternaryCheckCity(cityName){

  return (cityName == "NYC" ? "Ok, sounds good." : "No go.");

}

function switchOnCharmFromTip(tipPercentage){
  
  switch (tipPercentage) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}