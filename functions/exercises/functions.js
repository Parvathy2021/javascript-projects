function makeLine(size){

    let line = "";
    
   for (let i=0; i<size; i++){
    line += "#";
   }

   return line;

}

function makeSquare(size){
    let square = "";
    for (let i=0; i<size; i++){
        square += `${makeLine(5)}\n`;
    }
    return square;
}

function makeRectangle(width, height)
{
    let rectangle = "";
    for(let i =0; i< height;i++)
        {
            rectangle += `${makeLine(width)}\n`;
        }
        return rectangle;
}

function makeDownwardStairs(height){
    let downwardStair = "";
    for(let i =0;i<height;i++){
        downwardStair += `${makeLine(i+1)}\n`;
    }
    return downwardStair;
}

function makeSpace(noOfSpace){
    let spaceString ="";
    for(i=0; i< noOfSpace; i++){
        spaceString += " ";
    }
    return spaceString;
}

function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = '';
    spaceLine += `${makeSpace(numSpaces)} ${makeLine(numChars)} ${makeSpace(numSpaces)}\n`;
    
    return spaceLine.slice(0,-1);
}
function makeIsoscelesTriangle(height){
    let triangleString = "";
    for(let i=0; i< height; i++){
        triangleString += `${makeSpaceLine(height-i-1, 2*i+1)}\n`;
         
    }
    return triangleString.slice(0,-1);

}

function makeDiamond(height){
    let halfDiamond ="";
    for(let i=0;i<height;i++){
        halfDiamond += `${makeSpaceLine(height-i-1, 2*i+1)}\n`;
         
    }

    //halfDiamond = halfDiamond.slice(0,-1);
    return `${halfDiamond.slice(0,-1)}\n${reverse(halfDiamond.slice(0,-1))}`;
}

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

console.log(makeLine(5));
console.log("-----");
console.log(makeSquare(5));
console.log("-----");
console.log(makeRectangle(5,3));
console.log("-----");
console.log(makeDownwardStairs(5));
console.log("-----");
console.log(makeSpaceLine(3,5));
console.log("-----");
console.log(makeIsoscelesTriangle(5));
console.log("-----");
console.log(makeDiamond(5));

