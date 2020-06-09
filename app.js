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
