// Task no 2:
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric,
// would you like to learn some Python today?

  let personName = "Eric"
console.log(`Hello ${personName}},would you like to learn some pythen today?`);

// Task no:3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase;

let personname:string = "Irshad Ahmed shaikh"
 console.log("lowercase:",personname.toLowerCase());
 console.log("uppercase:", personname.toUpperCase());
 console.log('titlecase:',personName)

//Task no:4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the
// following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

 let quote = "A person who never made a mistake never tried anything new."
 let auther = "Albert Einstein";
 console.log(`${auther} Once said , "${quote}"`);

//Task no:5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_person = "Albert Einstein";
let message="A person who never made a mistake never tried anything new";
console.log(`${famous_person} once said, "${message}"`);

// //Task no:6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const myName:string= "   irshad ahmed    "
console.log(myName.trim());
const myName:string= " \t irshad ahmed";
console.log(myName);
const myName:string= " \n irshad ahmed";
console.log(myName);

// //Task no:7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the result:

const addition:number=4+4
const subtraction:number=10-2
const multiplication:number=4*2
const division:number=16/2
console.log(addition,subtraction,multiplication,division);

// //Task no:8
// 8. You should create four lines that look like this:

_____________________________________________

console.log(5 + 3)

_____________________________________________

Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);

// //Task no:9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

const favoritenumber:string = "7"
let message:string=`My favorite Number is: ${favoritenumber}`
console.log(`${message}`);

//Task no:10

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write
//because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence
//describing what the program does.*/


const myName:string='irshad ahmed shaikh'
const num1:number=4
const num2:number=7

// this will add num1 + num2=11
console.log(num1 + num2)
console.log(myName);


//Task no:11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.


const friendnames:string[]= ["irshad", "asbat", "ishfaque ", "aliya ", "aliza", "arshad"];
for(let i=0;i<friendnames.length;i++)
    console.log(friendnames[i]);

//Task no: 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s name.

const friendnames:string[] = ["irshad", "asbat", "hussain", "ishfaque", "azam", "ali"];
for(let i=0;i<friendnames.length;i++)
    console.log(`${friendnames[i]}: is inteligent student`);*/


//Task no:13;
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
//to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


const transportance:string[] = ["civic", "honda", "car", "suzuki", "motorcycle"];
for (var i = 0; i < transportance.length; i++) {
        console.log(`I would like to own a ${transportance[i]} `);

}


//Task no:14 
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
//invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


 let myfriend:string[]=["ali","ahmed","meer","jabar","manzoor"];
 let message:string='you are invited to dinner today at my home.'
 for(let  i=0;i<myfriend.length;i++){
    console.log(` Mr.${myfriend[i]}! ${message}`)
}


//Task no:15
 //Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.• Start with your program from Exercise 14. Add a print statement at the
//end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with
//the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still
//in your list.

 let myfriend1:string[]=["ali","ahmed","meer","jabar","manzoor"];

 console.log(`due to some reason ${myfriend[1]} will not come :`);

 myfriend[1]="asbaat";

 console.log(`new list if my ${myfriend}`);
 for(let i=0;i<myfriend.length;i++){
    console.log(`Mr.${myfriend[i]}! you are invited for dinner at my home today`)
    
 }

//Task no:16 
//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.

let myfriend2:string[]=["ali","ahmed","meer","jabar"];
myfriend2.unshift("shahzado")
myfriend2.splice(2,0,"hussain")
myfriend2.push("tofique")
for(let i=0;i<myfriend2.length;i++){
console.log(`Mr.${myfriend2[i]}! you are  invited for dinner at my home today`)}*/

//Task no:17

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//of your program.

let myfriend1:string[]=["ali","ahmed","meer","jabar","manzoor","khadim"];
console.log(myfriend1);

console.log('Table is not present i will invite only two frient');
let friend1=myfriend1.pop()
console.log(`sorry Mr.${friend1},you are not invited!`);
let friend2=myfriend1.pop()
console.log(`sorry Mr.${friend2},you are not invited!`);
let friend3=myfriend1.pop()
console.log(`sorry Mr.${friend3},you are not invited!`);
let friend4=myfriend1.pop()
console.log(`sorry Mr.${friend4},you are not invited!`);

for(let i=0;i<myfriend1.length;i++){
    console.log(`Mr.${myfriend1[i]} you are still invited to dinner`);
    
}
myfriend1.pop()
myfriend1.pop()
console.log(`${myfriend1} empty list`);


//Task no:18

//. Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its
//order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed



let myplaces:string[]=["naran kagan","koh mari","makkah","madina","dubai"]
console.log(myplaces);
//sorted by alphabetic:
let copyOfarray=myplaces.slice()
let sortedarray=copyOfarray.sort()
console.log(sortedarray);

// // now printing  in original array

console.log(myplaces);


// // reverse alphabetical:

let reversearray=myplaces.slice()
let copyreverse=reversearray.reverse()
console.log(copyreverse);

//printing in original array
console.log(myplaces);

//reverse the order of original array;
let reverseoriArray=myplaces.reverse()
console.log(reverseoriArray);

let againReverse=reverseoriArray.reverse();
console.log(againReverse);

//sorted original array;
let sortoriArray=myplaces.sort();
console.log(sortoriArray);

let reversesortedArray=sortoriArray.reverse();
console.log(reversesortedArray)



//Task no:19;
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


let myFriends:string[]=["manzoor","ali","jabbar","asbat","ishfaque"];
console.log(`I am inviting ${myFriends.length} friends to my dinner which are following\n`)
for(let i=0;i< myFriends.length;i++){
    console.log(`${i+1}.${myFriends[i]}`);
}


//Task no:20;
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
//else you’d like. Write a program that creates a list containing these items.

let famous_places:string[]=['karachi','islamabad','lahore','hyderabad','kashmire'];
for(let i=0;i<famous_places.length;i++){
    console.log(famous_places[i]);
    
}


//Task no:21;
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let studentdelail={
    name:"Irshad Ahmed Shaikh",
    age:32,
    gender:"male",
    rollnumber:12345
}
console.log(studentdelail);*/


//Task no:22;

//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
//to produce an index error. Make sure you correct the error before closing the program.

let personName: (string|number) []=['irshad',32,"ali",25,"asbat",10,"ishfaque",4,];
console.log(personName[0]);
console.log(personName[1]);
console.log(personName[2]);
console.log(personName[3]);
console.log(personName[4]);
console.log(personName[5]);
console.log(personName[8]);  //error ,undefined*/

//Task no:23;

//Conditional Tests: Write a series of conditional tests. Print a statement
//describing each test and your prediction for the results of each test. Your code
//should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

//1
let myCar='civic'
console.log(myCar == 'civic');
console.log(myCar == 'Civic');

//2

let fruit='apple'
console.log(fruit == 'apple');
console.log(fruit == 'Apple');

//3

let proglan='typescript'
console.log(proglan == 'typescript');
console.log(proglan == 'javascript');

//4
let mymobile='vivo'
console.log(mymobile == 'vivo');
console.log(mymobile == 'Vivo');

//5

let myName='irshad'
console.log(myName == 'irshad');
console.log(myName == 'Irshad');


//Task no:24

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array



let myName='irshad'
console.log(myName =='irshad');  //true         equality
console.log(myName !=='Irshad'); //true         inequality



let myNumber=12
console.log(myNumber == 12);      //true
console.log(myNumber !== 12);    //false
console.log(myNumber > 8);    //    true   greater than
console.log(myNumber < 8);     // false   less than
console.log(myNumber >= 8);    // true    greater than or equal to
console.log(myNumber <= 8);    //false    less than or equal to


//using and (&) and or (|);
 

// && operator
let a=5
let b=9
console.log((a<b)&&(a>b)); //condition will be false because one condition is false and one is true & operator consider both condition falde in && both conditions are true;


// | operator 

let num1=10
let num2=20
console.log((num1<num2)||(num2>num1));

items in array or not in array;

let myArray=[12,34,'irshad'];
let mystring='ali'
console.log(Array.isArray(myArray));
console.log(Array.isArray(mystring)


//Task no:25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a
//variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

//• Write an if statement to test whether the alien’s color is green. If it is, print
//a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that
//fails. (The version that fails will have no output.)


let alian_color:string='green'
if(alian_color=='green'){
    console.log('player just earned 5 points')
}else{

}

//Task no:26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
//write an if-else chain.

//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.


let alian_color:string='green'
if(alian_color=='green'){
    console.log('player just earned 5 points for shooting the alian');
    
}else{
    console.log('the player just earned 10 points')
    
}
if(alian_color=='blue'){
    console.log('player just earned 5 points for shooting the alian');
    
}else{
    console.log('the player just earned 10 points')
    
}

//Task no:27

//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alian_color:string='white'
if(alian_color=='green'){
    console.log('player earned 5 points')
    
}else if(alian_color== 'yellow'){
    console.log('player earned 10 points')
    
}else if(alian_color=='red'){
    console.log('player earned 15 points');
    
}else{
    console.log('player earned 0 points');
    
}

//Task no:28

//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder.



let person_age:number=10

if(person_age>2){
    console.log('person is baby')
    
}else if((person_age>4) || (person_age<13)){
    console.log('person is a kid  ')
}else if((person_age>13) || (person_age<20)){
    console.log('person is a teenagar');
    
}else if((person_age>20)|| (person_age<65)){
    console.log('person is a adult')
}else if (person_age>=65){
    console.log('person is an elder')
    
}else{
    console.log('invalid');
    
}


//Task no:29
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
//such as You really like bananas!


let favorite_fruits:string[]=['mango','apple','banana']

if(favorite_fruits.includes (`apple`)){
    console.log('you  realy like apple')
}else if(favorite_fruits.includes(`banana`)){
    console.log('you realy like banana')
}else if(favorite_fruits.includes(`mango`)){
    console.log('you realy like mango')
    
}else{
    console.log('your favorite fruit is not present in array');
    
}



//Task no:30

//30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
//after they log in to a website. Loop through the array, and print a greeting to each user:

//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let usernames:string[]=["Irshad",'Asbat','Admin','Ahmed','Ali']
for(let i=0;i<usernames.length;i++){
    if(usernames[i]=='Admin'){
        console.log(`\n Hello ${usernames[i]} would you like to see status reports? \n`)

    }else{console.log(`Hello ${usernames[i]} thank you logging again`);
    

    }
} 

//Task no:31

//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.



let users:string[]=["Irshad",'Asbat','Admin','Ahmed','Ali']
users=[];
console.log('We need to find some users!');
if(users.length===0){
    console.log('All users have been removed '+users.length)
}



//Task no:32


//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
//new username. If a username has not been used, print a message saying that the username is available.

//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["Irshad", "Ali", "Ahmed", "Asbat", "hussain,"];

let new_users: string[] = ["Mansoor", "Barkat", "Illahi", "Ali", "Irshad"];


new_users.forEach((new_user) => {
  let new_userlower = new_user.toLowerCase();

  let usertaken = current_users.some(
    (current_users) => current_users.toLowerCase() === new_userlower
  );
  if (usertaken) {
    console.log(
      `\n${new_user} needs to choose a new username beacause its already taken`
    );
  } else {
    console.log(`${new_user} is the new member added`);
    current_users.push(new_user);
  }
 });
console.log(current_users);





//Task no:33

//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
//7th 8th 9th", and each result should be on a separate line.

let myNumber=[1,2,3,4,5,6,7,8,9,]

for(let i=0;i<myNumber.length;i++){
    if(myNumber[i]==1){
        console.log(`${myNumber[i]}st`)
        
    }else if(myNumber[i]==2){
        console.log(`${myNumber[i]}nd`);
        
    }else if(myNumber[i]==3){
        console.log(`${myNumber[i]}rd`);
    }else if(myNumber[i]>=4 && myNumber[i]<=9){
        console.log(`${myNumber[i]}th`);
        
    }
}



//Task no:34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these
//pizza names in a array, and then use a for loop to print the name of each pizza.

//• Modify your for loop to print a sentence using the name of the pizza
//instead of printing just the name of the pizza. For each pizza you should
//have one line of output containing a simple statement like I like pepperoni
//pizza.

//• Add a line at the end of your program, outside the for loop, that states
//how much you like pizza. The output should consist of three or more lines
//about the kinds of pizza you like and then an additional sentence, such as
//I really love pizza!

let Pizzas: string[] = ["cheez pizza", "pepperoni pizza", "vegeterian pizza"];

for (let i = 0; i < Pizzas.length; i++) {
  console.log(Pizzas[i]);
}
for (let i = 0; i < Pizzas.length; i++) {
  console.log(`I like to eat ${Pizzas[i]}`);
}

console.log("\nI REALY LOVE PIZZA");


//Task no:35
 //Animals: Think of at least three different animals that have a common characteristic.
//Store the names of these animals in a list, and then use a for loop to
//print out the name of each animal.
//• Modify your program to print a statement about each animal, such as
//A dog would make a great pet.
//• Add a line at the end of your program stating what these animals have in
//common. You could print a sentence such as Any of these animals would
make a great pet!

let animal_Name:string[]=["cow","camel","goat","sheep"]
for(let i of animal_Name){
    console.log(i);
    
}
for(let r of animal_Name){
    console.log(`A ${r} is domestic animal`);
    
}
console.log(`All these animals ${animal_Name[0]},${animal_Name[1]},${animal_Name[2]} and ${animal_Name[3]} meat is halal in islam`)


//Task no:36
//T-Shirt: Write a function called make_shirt() that accepts a size and the
//text of a message that should be printed on the shirt. The function should print
//a sentence summarizing the size of the shirt and the message printed on it.
//Call the function.

function make_shirt(size: number, text: string) {
  return size + text;
}
let result = make_shirt(34, "the sunny day");

console.log(result)

//Task no:37
//Large Shirts: Modify the make_shirt() function so that shirts are large
//by default with a message that reads I love TypeScript. Make a large shirt and a
//medium shirt with the default message, and a shirt of any size with a different
//message.

 function make_shirt(message:string,size:string="large"){
     return size +message

 }

 let result=make_shirt('i love typecsript',)
 console.log(result);

function make_shirt(size:string,message:string='I love type sript'){
return size + message
}
console.log(make_shirt(" medium "));*/


//Task no:38
//Cities: Write a function called describe_city() that accepts the name of
//a city and its country. The function should print a simple sentence, such as
//Karachi is in Pakistan. Give the parameter for the country a default value.
//Call your function for three different cities, at least one of which is not in the
//default country.

  function describe_city(nameofcities:string,country:string="pakistan"){

    return `${nameofcities} is in ${country}`
  }

  let city1=describe_city("karachi")
  let city2=describe_city("islamabad")
  let city3=describe_city("sukkur")
  let city4=describe_city("madina","saudi arab")
  console.log(city1);
  console.log(city2);
  console.log(city3);
  console.log(city4);
  



//  Task no:39
  //39. City Names: Write a function called city_country() that takes in the name
//of a city and its country. The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value
//that’s returned.
  
  



function city_country(city:string,country:string)
{
    return `"${city},${country}"`
}

let a=city_country("lahore","pakistan")
let b=city_country("islamabad","pakistan")
let c=city_country("wagni","pakistan")
let d=city_country("dubai","uae")
console.log(a);
console.log(b);
console.log(c);
console.log(d);




//Task no:40
//40. Album: Write a function called make_album() that builds a Object
//describing a music album. The function should take in an artist name and an
//album title, and it should return a Object containing these two pieces of
//information. Use the function to make three dictionaries representing different
//albums. Print each return value to show that Objects are storing the
//album information correctly.
//Add an optional parameter to make_album() that allows you to store the
//number of tracks on an album. If the calling line includes a value for the number
//of tracks, add that value to the album’s Object. Make at least one new
//function call that includes the number of tracks on an album.


function make_album(artistName:string,albumtitle:string){
    return {artistName,albumtitle}
}
let album1=make_album("irshad","roshan-andhera")
let album2=make_album("ali","doorian")
let album3=make_album("asbat","pathar dunya")
console.log(album1);
console.log(album2);
console.log(album3);


function make_album(artistName:string,albumtitle:string,albumnumber?:number){
    return {artistName,albumtitle,albumnumber}
}
let album1=make_album("irshad","roshan-andhera",29)
let album2=make_album("ali","doorian",5)
let album3=make_album("asbat","pathar dunya")
console.log(album1);
console.log(album2);
console.log(album3);




///Task no:41

//41. Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.


function show_magicians(){

let magiciannames:string[]=["irshad","ali","asbat","ishfaque"]
for(let names of magiciannames)
    console.log(names);
    

}
show_magicians()



//Task no:42

//42. Great Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians by adding
//the phrase the Great to each magician’s name. Call show_magicians() to
//see that the list has actually been modified.



let magiciannames:string[]=["irshad","ali","asbat","ishfaque"]

function make_great(great:string){
    let magiciannames:string[]=["irshad","ali","asbat","ishfaque"]
for(let i of magiciannames)
    console.log(`${great} ${i}`)
    

}
make_great("Hello How are you Mr.")
make_great("Hello,")




//Task no:43

//43. Unchanged Magicians: Start with your work from Exercise 40. Call the
//function make_great() with a copy of the array of magicians’ names. Because the
//original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original
//names and one array with the Great added to each magician’s name.




let magiciannames:string[]=["irshad","ali","asbat","ishfaque"]

let magiciannamescopy=[...magiciannames]

function make_great(great:string){
    let withgreeting=""
    
for(let i of magiciannamescopy){
    withgreeting +=`${great} ${i}\n`;
}
    return withgreeting
    

}

let mygreeting=make_great("hello");
let makearray=mygreeting.split('\n');
console.log(makearray);
console.log(magiciannames);





//Task no:44
//44. Sandwiches: Write a function that accepts a array of items a person wants
//on a sandwich. The function should have one parameter that collects as many
//items as the function call provides, and it should print a summary of the sandwich
//that is being ordered. Call the function three times, using a different number
//of arguments each time.


function mysandwiches(...items:string[]){
    return `I wants sandwich of ${items}`
}
let collection1=mysandwiches("piza","zinger burger")
let collection2=mysandwiches("samosa","chai")
let collection3=mysandwiches("chips")


console.log(collection1);
console.log(collection2);
console.log(collection3);





//Task no:45

//45. Cars: Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name. It
//should then accept an arbitrary number of keyword arguments. Call the function
//with the required information and two other name-value pairs, such as a
//color or an optional feature. 
//Print the Object that’s returned to make sure all the information was
//stored correctly.*/


function carDetails(manufacturer:string,modelname:string,...additionalinfo:any
){
    const car={manufacturer,modelname,...Object.fromEntries(additionalinfo)}
    return car
}
const mycarDetails=carDetails("toyota","corolla",['color','red'],['year' , 2024] )


console.log(mycarDetails);





















