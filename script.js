function isThereACat(animals) {
    var cat= /cat/gi;

    if  (animals.match(cat)) {
        console.log("true");
    } else {
        console.log("false");
    }
}

isThereACat('dog, zebra, Cat, frog');
isThereACat('dog, zebra, frog');
isThereACat('dog, zebra, CaT, frog');


console.log('-----------------------------------------------------------------------------------');

function isPythagoreanTheorem(a, b, c) {
    if ((a*a)+(b*b) == (c*c)) {
        console.log ("true");
    }else{
        console.log("false");
    }
}


isPythagoreanTheorem (6, 8, 10);
isPythagoreanTheorem (2, 8, 16);


console.log('-----------------------------------------------------------------------------------');


function gentleSum(a, b) {
    var Sum = (parseInt(a)+parseInt(b));
    if (Sum > 0) {
        console.log(Sum);
    }else{
        console.log('Please enter valid data');
    }
}


gentleSum ('123sadadas', 5); 
gentleSum ('hello word', 5);
gentleSum ('222as', '1asd');