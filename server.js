/*
  Cesar Enrique Soto Peña
  2022-09-28

  The porpuse of the script is save a bunch of objects into an array list, then sort the array list by a object property,
  after that the date is adeed for each object to know when a user has saved their information, then the script check which users has the Active status if is the case 
  the script shows the name, favorite food and the date of each user, but if is not the case it show a message of error.
*/

let rockyObj = {
  'Name': 'Rocky',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'Back to The Future',
  'Status': 'Inactive'
}
let miroslavObj = {
  'Name': 'Miroslav',
  'Favorite Food': 'Sushi',
  'Favorite Movie': 'American Psycho',
  'Status': 'Active'
}
let donnyObj = {
  'Name': 'Donny',
  'Favorite Food': 'Singapore chow mei fun',
  'Favorite Movie': 'The Princess Bride',
  'Status': 'Inactive'
}
let mattObj = {
  'Name': 'Matt',
  'Favorite Food': 'Brisket Tacos',
  'Favorite Movie': 'The Princess Bride',
  'Status': 'Active'
}
//Create a object with my information in a similar format
let cesarObj = {
  'Name': 'Cesar',
  'Favorite Food': 'Hamburguers',
  'Favorite Movie': 'Pacific Rim',
  'Status': 'Active'
}
//push all the objects data into an array
let peoplesList = [rockyObj, miroslavObj, donnyObj, mattObj, cesarObj]

//Function to sort the output by object property in this case i use the name
function outOrder() {
  //I used the method sort() this sorts the elements of the array
  peoplesList.sort(function (a, b) {
    //b is less than a according to ordering criterion
    if (a.Name > b.Name) {
      return 1;
    }
    //a is less than b according to ordering criterion
    if (a.Name < b.Name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}
//Call the function outOrder to order the array peoplesList by name
outOrder()
//Use a for to get work with the objects inside the array 
for (peopleList in peoplesList) {
  //Add the date field to the objects with the current date in YYYY/MM/DD format
  peoplesList[peopleList].Date = new Date().toISOString().slice(0, 10);
  //If the status of each object is Active console.log the name, favorite movie and date
  if (peoplesList[peopleList].Status === 'Active') {
    console.log("Name: " + peoplesList[peopleList]['Name'], "- Favorite Movie: " + peoplesList[peopleList]['Favorite Movie'], "- Date: " + peoplesList[peopleList]['Date'])
  }
  //If the status of each object is Inactive console.log a message when that occurs
  else {
    console.log("Error, user " + peoplesList[peopleList]['Name'] + " has Inactive status");
  }
}

