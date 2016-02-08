//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  var me = {
    name: 'Breiden Busch',
    age: 24
  };

  // alert(me.name);




//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  var favoriteThings = {
    band: 'Tool',
    food: 'sushi',
    person: 'Kellan',
    book: 'A Song of Fire and Ice',
    movie: 'Batman',
    holiday: 'Halloween'
  };


//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  favoriteThings.car = 'Raptor';
  favoriteThings.brand = 'RVCA';


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  favoriteThings.food = 'Lettuce';
  favoriteThings.book = '50 Shades of Gray';




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  var backPack = {};
  var item = 'firstPocket';
  backPack['firstPocket'] = item;
  backPack.firstPocket = 'chapstick'
  backPack.color = 'maroon';

//After you do the above, alert your entire backPack object.

  // alert(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  console.log(backPack);




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  var alsoMe = {
    name: 'Breiden',
    age: 24,
    height: '5 foot 9 inches',
    gender: 'Male',
    married: 'No',
    eyeColor: 'Brown',
    hairColor: 'Brown'
  };

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  // for (prop in alsoMe) {
  //   alert(alsoMe[prop]);
  // }




//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  var album = {
    song1: '2 minutes',
    song2: '3 minutes',
    song3: '4 minutes',
    song4: '5 minutes',
    song5: '6 minutes'
  };

//Now, loop through your album object alerting every song title individually.

  // for (prop in album) {
  //   alert(prop);
  // }




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  var states = {
    Utah: 5000,
    California: 31000,
    Texas: 10000,
    Georgia: 7000,
    Alabama: 8000
  };

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  // for (var prop in states) {
  //   if (states[prop] > 30000) {
  //     alert(prop);
  //   }
  // }




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

  for (var prop in user1) {
    if (!user1[prop]) {
         delete user1[prop];
    }
  }

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  user1.name = 'Breiden';
  user1.username = 'bbusch';





//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  user2.name = 'Tyler S. McGinnis';
  user2.email = 'tyler.mcginnis@devmounta.in';

//Now call the sayName method that's on the user object which will alert the users email

  // user2.sayName();




//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  methodCollection.alertHello = function() {
    alert('hello');
  }

  methodCollection.logHello = function() {
    console.log('hello');
  }

//Now call your alertHello and logHello methods.

  // methodCollection.alertHello();
  // methodCollection.logHello();



//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

  function MakePerson(name, birthday, ssn) {
    var newPerson = {name: name, birthday: birthday, ssn: ssn};
    return newPerson;
  }



//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

  function MakeCard(name, cardNum, expiration) {
    var creditCard = {name: name, cardNum: cardNum, expiration: expiration};
    return creditCard;
  }



//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

  bindCard = function(person, creditcard) {
    var merge = {};
    for (var prop in person) {
      merge[prop] = person[prop];
    }
    for (var prop in creditcard) {
      merge[prop] = creditcard[prop];
    }
    return merge;
  }
