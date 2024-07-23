//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let totalScore =0 ;
        for(let i=0; i< this.scores.length; i++){
            totalScore += this.scores[i];
        }
        let average = Math.round((totalScore/this.scores.length )*10)/10;
        return average;
    
    }
    status(){
        let status;
        if(this.average() >= 90.0){
            return status = "Accepted";
        } else if (this.average() >= 80.0){
            return status = "Reserve";
        }else if (this.average() >= 70.0){
            return status = "Probationary";
        }else {
            return status = "Rejected"
        }
    }
}
let bubbaBear = new CrewCandidate ('Bubba Bear',135,[88,85,90]);
let merryMaltese = new CrewCandidate ('Merry Maltese',1.5,[93,88,97]);
let gladGator = new CrewCandidate ('Glad Gator',225,[75, 78,62]);
 console.log(bubbaBear);
 console.log(merryMaltese);
 console.log(gladGator);

bubbaBear.addScore(83);
console.log(bubbaBear.scores);
console.log(merryMaltese.average());


console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.'`)
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.'`)
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.'`)

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let addTest = 0;
while(gladGator.status() == "Probationary"){
    gladGator.addScore(100);
    addTest++
}
console.log(gladGator.status());
console.log(gladGator.scores);
