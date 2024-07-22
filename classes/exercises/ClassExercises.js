// Define your Book class here:
class Book {
    constructor(theTitle, theAuthor, copyright, isbn, noOfPages, noOfTimesCheckedOut, discarded  ){
      this.theTitle = theTitle;
      this.theAuthor = theAuthor;
      this.copyright = copyright;
      this.isbn = isbn;
      this.noOfPages = noOfPages;
      this.noOfTimesCheckedOut = noOfTimesCheckedOut;
      this.discarded = discarded;      
    
    }
    checkout(uses=1){
        this.noOfTimesCheckedOut += uses;
       }
 } 



// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(theTitle, theAuthor, copyright, isbn, noOfPages, noOfTimesCheckedOut, discarded  ){

        super(theTitle, theAuthor, copyright, isbn, noOfPages, noOfTimesCheckedOut, discarded  );
            
    }
    dispose(currentYear){
        if(currentYear - this.copyright > 5){
            this.discarded ="Yes";
        }
    }
 }

 class Novel extends Book{
    constructor(theTitle, theAuthor, copyright, isbn, noOfPages, noOfTimesCheckedOut, discarded  ){
        super(theTitle, theAuthor, copyright, isbn, noOfPages, noOfTimesCheckedOut, discarded  );
         
    }
    dispose(){
        if(this.noOfTimesCheckedOut > 100){
            this.discarded ="yes";
        }
    }
 }

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel('Pride and Prejudice','Jane Austen', 1813, 	1111111111111, 432, 32, 'No' );
let topSecretShuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual','Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:

prideAndPrejudice.checkout(105);
prideAndPrejudice.dispose();
topSecretShuttleBuildingManual.dispose(2024);
console.log(`prideAndPrejudice is disposed ${prideAndPrejudice.discarded}`);
console.log(`topSecretShuttleBuildingManual is disposed ${topSecretShuttleBuildingManual.discarded}`);