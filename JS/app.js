//%%%%%%%%%% Conditionals %%%%%%%%%%%%%%



//IF statements
//else if statements
//else statements
//switch


//console.log('Hello there');





//%%%%%%% AND operator



/*
const firstName = 'Victor';
const lastName = 'Rowland';
const middleName = 'Gspeed';

if ( firstName === 'Victor' && lastName ==='Daniel'){
    console.log('Hello Victor Daniel');
}
else if (firstName === 'Victor' || (lastName ==='Rowland' && middleName === 'Gspeed')){
    console.log('Hello Victor Rowland aka Gspeed');
}

else if (firstName === 'Victor' ){

}
else{
    console.log('Not on the list');
}

*/



// True && True = True
// True && false = false
// False && True = False
// False && False = False


// ==
//===


/*
const x = '1';        
const y = 1;

if (x === y) {
    console.log('The values are equal');
}
else{
    console.log('The values or types are different');
}

*/



//%% SWITCH 

const day = 'Sundeey';

switch (day) {
    case 'Monday':
        console.log('Go the company warehouse on Monday');   
        break;
    case 'Tuesday':
        console.log('Go to the supermarkt on Tuesday');
        break;
    case 'Sunday':
        console.log('Go to Church on Sunday');
        break;
    default:
        console.log('I do not know what day of the week is that!');
        break;
}

