'use strict';
// a small booking function
//default parameters
const book=[];
const bookingfunction=function(flightNum,numPassangers=1,price='Ksh 2,356'){

    // numPassangers=numPassangers || 1;
    // price=price || 'Ksh 2,845';
    const booking={
        flightNum,
        numPassangers,
        price,
    }

book.push(booking)
    console.log(booking);
}
bookingfunction('JIM-5299',3,65739);
console.log(book);

console.log(`....................................................................................`);

console.log(`....................................................................................`);
// showing whether the passanger is checked in
const FlightA='jim-01';
const PassDetails={
                  name:'James Mburu Wanjiru',
                 passport:123456789, //get this data from api
                  };

const checkInFunction=function(flights,passanger1){
    flights='jim-02';
    passanger1.name='Mr.' + passanger1.name;

    if(passanger1.passport=== PassDetails.passport){
alert(`Welcome`);
    }
    else{
        alert('wrong passport');
    }
}

checkInFunction(FlightA,PassDetails);

// incase the pass edits wrong passport
const newpasssport=function(person){
    person.passport=Math.trunc(Math.random()*2946739);
};

newpasssport(PassDetails);
checkInFunction(FlightA,PassDetails);

console.log(`....................................................................................`);


console.log(`....................................................................................`);


// //////First class functions ===>these are like normal functions

/* A function that accepts a string(words,names) and removes all gaps and then converts the string to lower case*/
const stringWord=function(str){
    return str.replace(/ /g,'').toLowerCase();
}
/*console.log(stringWord('James Mburu Wanjiru'));*/

/* A function that receive an imput of a string and converts the first letter to uper case and the joins the rest of a string*/
const str2=function(str){
    const[first, ...others]=str
    return [first.toUpperCase(), ...others].join('');
};
console.log(str2('James'));

console.log(`....................................................................................`);

console.log(`....................................................................................`);

//////higher order function===>A function that accepts other functiond as arguements
const Transformer=function(str,fn){
console.log(str);
const firstFunction=fn(str);
console.log(firstFunction);
}
Transformer('james is a very bright boy',str2);
Transformer('jim1123 fg ie ',stringWord);

console.log(`....................................................................................`);


console.log(`....................................................................................`);


////////functions that return a function
const greet=function(greetings){
    return function(name){
        console.log(`${greetings} ${name}`)
    }
}

const constantfunction=greet('Good evening');
constantfunction('Mburu');
constantfunction('James Mburu');
//using one function above
greet('Good Morning')('Mburu.');

console.log(`....................................................................................`);
//re implementing using arrow function 
    const trans=gree=>{
        return nam =>{
            console.log(`${gree} ${nam}`);
        }
    }
    trans(`Good Aftrnoon`)(`James`);
    console.log(`....................................................................................`);
//simplifird way
const greetArr=gre =>na => console.log(`${gre} ${na}`);
greetArr(`Have a Lovely Night`)(`Jim`);

console.log(`....................................................................................`);


console.log(`....................................................................................`);

// A function that output a simple text to a passanger showing flightplane,umique id of Pass(codevalue)

const MburuAirways={
    airline:'Mburu Airways',
    codeValue:'JM',
    bookArray:[],
    BookMessagefunction(flightCode,passName){
     console.log(`Hello ${passName}, you booked a seat on ${this.airline}.
     \nYour Flight code is ${this.codeValue}-${flightCode}.
     \nWe are very grateful for trusting us.
     \nThank You ${passName}.`)
    this.bookArray.push({codeValue:`${this.codeValue}${flightCode}`,passName});
    }
}

MburuAirways.BookMessagefunction(5299,'James Mburu');
console.log(MburuAirways.bookArray);
console.log(MburuAirways);
MburuAirways.BookMessagefunction(6265,'Grace Wamaitha');

console.log(`...........another airline.........................................................................`);

const outBookMessagefunction=MburuAirways.BookMessagefunction;
// this creates a new function outside but the 'THIS KEY WORD POINTS TO UNDEFINED'hence we change that
// we use CALL FUNCTION TO FIX THAT.which call the object and gives us a chaance to chamge this to a new

// suppose we RE-USE the function above of writing a message
// new object of another flight
const WamaithaAirways={
    airline:'Wamaitha Airways',
    codeValue:'GW',
    bookArray:[],
};
outBookMessagefunction.call(WamaithaAirways,6765,'Moses Mbugua');
console.log(WamaithaAirways);
//another book with another airline
const JamesMbuguaAirways={
    airline:'James Mbugua Airways',
    codeValue:'JIM',
    bookArray:[],
};
console.log(JamesMbuguaAirways);
outBookMessagefunction.call(JamesMbuguaAirways,725418234,'Peninah Wambui');

console.log(`..............APPLY METHOD...................`);
// THIS keyword also can be defined by 'APPLY METHOD' which takes an arguements as 1:obj/function that 'THIS' key word is supposed to point and 2:takes an array of imputs rather than inserting them mannually
//array that we pass in APPLY METHOD;    NB:must
const GukasCredential=[725418234,'Mburu Mbugua'];
//object
const MosesWanjiruAirways={
    airline:'Moses-Wanjiru-Airways',
    codeValue:'MOSE',
    bookArray:[],
}
outBookMessagefunction.apply(MosesWanjiruAirways,GukasCredential);
console.log(MosesWanjiruAirways);

console.log(`..............CALL METHOD THAT ACCEPTS AN ARRAY...................`);
//still I can use CALL METHOD when we have the arguements stored in array
const ShoshCredentials=[718390085,'Mary Njeri Mburu'];
outBookMessagefunction.call(MosesWanjiruAirways,...ShoshCredentials);
console.log(MosesWanjiruAirways);

console.log(`..............BIND METHOD...................`);
// BIND METHOD sets the function to a new variable where it specifies the arguements of needed object
//taking a flight for MsesWanjiruAirways and set its THIS KEYWORD.
const newMosesWanjiruAirways=outBookMessagefunction.bind(MosesWanjiruAirways);
newMosesWanjiruAirways(877563,'Peter kimani');

// still we can set a specific flight even with specific flight value.
// this applies where we have one plane and passamgers are the one to book
const  OnlyJamesMbuguaAirways=outBookMessagefunction.bind(JamesMbuguaAirways,364);
OnlyJamesMbuguaAirways('Mburu James');
OnlyJamesMbuguaAirways('Peter Gitau');
OnlyJamesMbuguaAirways('Grace Wanyoike');


// using bind method in Event Listeners
// a function that increases by one each time we have an eventlistener
const NumOfJets=15;
/*
const buyFunction=function(){
    NumOfJets++;
    console.log(NumOfJets);
}*/

MburuAirways.Planes=10;
MburuAirways.AddPlane=function(){
    this.Planes++;
    console.log(this.Planes);
};
// MburuAirways.AddPlane();
document.querySelector('.buy')
.addEventListener('click',MburuAirways.AddPlane
.bind(MburuAirways));

//partial application==>we can presetparameters
//calculating tax
const taxcalcultion=(rate,value)=>{
    const total=value+((value/100)*rate);
    const tax=(value/100)*rate;
    console.log(`total billed:Ksh ${total}`);
    console.log(`tax billed:Ksh ${tax}`);
}
taxcalcultion(10,500);



