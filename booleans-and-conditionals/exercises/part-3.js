let engineIndicatorLight = 'red blinking';
let fuelLevel = 21000;
let engineTemperature = 1200;

if ( fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") { 
    console.log("ENGINE FAILURE IMMINENT!");
}

else if (fuelLevel > 2000 && engineTemperature <= 2500) {
    console.log("Full tank. Engines good.");
}

else if (fuelLevel> 10000 && engineTemperature <= 2500){
    console.log ("Fuel level above 50%. Engines good.");
}

else if (fuelLevel > 5000 && engineTemperature <= 2500){ 
    console.log("Fuel level above 25%. Engines good.");
}

else if (fuelLevel < 5000 || engineTemperature > 2500){
    console.log ("Check fuel levels. Engines running hot.");

}

else {
    console.log("Fuel and engine status pending...");

}

let commandOverride = true

if (fuelLevel > 20000 && engineIndicatorLight != "red blinking" || commandOverride === true){
    console.log("Cleared to launch!");
}

else {
    console.log ("Launch scrubbed!")
}