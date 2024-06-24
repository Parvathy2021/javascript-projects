//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.


const input = require('readline-sync');

let startingFuelLevel = 0;
let numOfAstronauts = 0;
let altitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  startingFuelLevel = input.question("Enter Starting Fuel Level = ");
  while(!(startingFuelLevel > 5000 && startingFuelLevel < 30000))
  {
    console.log("\n Please enter a value between 5000 and 30000 : ");
    startingFuelLevel = input.question("Enter Starting Fuel Level : ");
  }
console.log("...........................................................................................");


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numOfAstronauts = input.question("Enter Number of Astraunauts = ");
while(numOfAstronauts > 7)
{
 console.log("\n Please enter a value less than 8 ");
 numOfAstronauts = input.question("Enter Number of Astraunauts = ");
}
  
console.log("...........................................................................................");


//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let i = 0;
while(i < numOfAstronauts){

  startingFuelLevel = startingFuelLevel - 100;
  altitude = altitude + 50;
  i ++;
}
console.log(`\n The Fuel Status is ${startingFuelLevel} and the shuttle gained an altitude of ${altitude} km`);
console.log("...........................................................................................");


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
 
if(altitude >=2000){
  console.log( `"Orbit achieved!"`);

 }else{
  console.log(`"Failed to reach orbit.”`);

 }
 console.log("...........................................................................................");

