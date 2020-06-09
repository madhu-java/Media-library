//parent class

class Media{
  constructor(title){
    
    this._title=title;
    this._isCheckedOut= false;
    this._rating = [];
    
  }
  
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get rating(){
    return this._rating;
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus(){
    if(this._isCheckedOut){
      this._isCheckedOut = false;
    }
    else{
      this._isCheckedOut = true;
    }
  }
  getAverageRating(){
     let sum = this._rating.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

     return (sum/(this.rating.length)).toFixed(2);
  }
//In .addRating(), make sure input is between 1 and 5.
  addRating(rating){
    if(rating >=1 && rating <=5){
    this._rating.push(rating);
    }
    else{
      console.log('enter rating between 1 and 5 ...'+this._rating);
    }
  }
}

//book class
/*Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()*/
class Book extends Media{
  constructor(author,title,pages){
    super(title);
    this._pages =pages;
    this._author =author;
  }
  get pages(){
    return this._pages;
  }
  get author(){
    return this._author;
  }
}
//movie class 
/*Movie
properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
getters: all properties have a getter
methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()*/
class Movie extends  Media{
  constructor(director,title,runtime){
    super(title);
    this._runTime = runtime;
    this._director = director;
  }
  get runTime(){
    return this._runTime;
  }
  get director(){
    return this._director;
  }
}

//creating instance of Book
 const historyOfEverything =new Book('Bill Bryson', 'A Short History of Nearly Everything',544);
//testing the book class
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.rating);
console.log(historyOfEverything.getAverageRating());

//creating movie instance
const speed =new Movie('Jan de Bont','Speed',116);
//testing
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed .addRating(1);
speed .addRating(2);
speed .addRating(5);
console.log(speed.getAverageRating());
// cd class
/*CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property. 
*/
class CD extends Media{
  constructor(artist,title,songs){
    super(title);
    this._artist = artist;
    this._songs= songs;
  }
  get artist(){
    return this._artist;
  }
  get songs(){
    return this._songs;
  }
 shuffle(){
   for(let i = this.songs.length-1;i>=0;i--){
     const j = Math.floor(Math.random() * i);
     let k= this._songs[i];
     this._songs[i]=this._songs[j];
     this._songs[j] =k;
   }
   return this._songs;
   }
 }


const myCd = new CD('artsitOne', 'myworld',
['songOne','songTwo','songThree','songFour']);
console.log(myCd.songs);
console.log(myCd.shuffle());

//Create class called Catalog that holds all of the Media items in our library.
  class Catalog {
    constructor(){
        this._book=[];
        this._movie=[];
        this._cd=[];
    }
     
    get book(){
      return this._book;
    }
    get movie(){
      return this._movie;
    }
    get cd(){
      return this._cd;
    }
    set book(book){
      (this._book).push(book);
    }
    set movie(movie){
      this._movie.push(movie);
    }
    set cd(cd){
      this._cd.push(cd);
    }
    }
const historyOfEverything1 =new Book('Bill Bryson', 
'A Short History of Nearly Everything',544);
historyOfEverything1.toggleCheckOutStatus();
historyOfEverything1.addRating(4);
historyOfEverything1.addRating(5);
historyOfEverything1.addRating(5);
const speed1 =new Movie('Jan de Bont','Speed',116);
speed1.toggleCheckOutStatus();
speed1.addRating(1);
speed1.addRating(2);
speed1.addRating(5);
const myCd1 = new CD('artsitOne', 'myworld',
['songOne','songTwo','songThree','songFour']);
myCd1.addRating(3);
myCd1.addRating(4);
myCd1.addRating(5);
const book2 =new Book('Book2', 'A Short History of Nearly Everything book2',504);
book2.addRating(4);
book2.addRating(3);
book2.addRating(2);
const speed2 =new Movie('Jan de Bont','Speed2',136);
speed2.addRating(3);
speed2.addRating(2);
speed2.addRating(4);
const myCd2 = new CD('artsitTwo', 'myworld2',
['songOne','songTwo','songThree','songFour']);
myCd2.toggleCheckOutStatus();
myCd2.addRating(2);
myCd2.addRating(3);
myCd2.addRating(3);

//catalog instance
const newCatalog = new Catalog();
//adding all types of media to catalogue
newCatalog.book=historyOfEverything1;
newCatalog.movie=speed1;
newCatalog.cd=myCd1;
newCatalog.book=book2; 
newCatalog.movie=speed2;
newCatalog.cd=myCd2;
console.log('.................MEDIA CATALOGUE.................');
//printing all book media 
console.log('<<<<<<<BOOKS>>>>>>>>>');
(newCatalog.book).forEach(book => {
  console.log(`${book.title} , ${(book.isCheckedOut)? 'Available' : 'NotAvailable'} ,rating:${book.getAverageRating()}`);
  });
  //printing all movie media 
  console.log('<<<<<<<MOVIES>>>>>>>>>');
  (newCatalog.movie).forEach(book => {
  console.log(`${book.title} , ${(book.isCheckedOut)? 'Available' : 'NotAvailable'} ,rating:${book.getAverageRating()}`);
  });
//(newCatalog.movie).forEach(movie => {
  //console.log(movie.title);
  //});
  //printing all cd media 
  console.log('<<<<<<<CD`S>>>>>>>>>');
  (newCatalog.cd).forEach(book => {
  console.log(`${book.title} , ${(book.isCheckedOut)? 'Available' : 'NotAvailable'} ,rating:${book.getAverageRating()}`);
  });
//(newCatalog.cd).forEach(cd => {
  //console.log(cd.title);
  //});



