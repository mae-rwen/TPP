console.log('Tarot Psychological Portrait');

//get name
const firstName = 'Przemek'
console.log(firstName)

// get birthdate
const day = 26
const month = 05
const year = 1992
console.log(`${day}.${month}.${year}`)

// get sum of cards between 1-22
function getCard(...args) {
    let sum = 0;
   
    for (let arg of args) sum += arg;
    
    while (sum > 22) {
        sum -= 22
    }
    return sum
}

// >>>>>>> 1,2,3 positions <<<<<<< 

//  get 1st and 2nd position (from day and month)
function positionFirstAndSecond(number) {
    if (number <= 22) {
        return number
    } else {
        return number - 22
    }
}

// get 3rd position (from a year)
function thirdPosition(number) {  

    let getSum = (number) => {     
        return String(number)
        .split('')
        .reduce((acc, curr) => {
        return acc + Number(curr);
        }, 0)
    }
   
    let getFinal = getSum(number)  
        if (getFinal <= 22) {
            return getFinal
        } else {
            return getFinal - 22
        }
}

    console.log('1st, 2nd, 3rd positions');
const first = positionFirstAndSecond(day);
        console.log(first);
const second = positionFirstAndSecond(month);
    console.log(second);
const third = thirdPosition(year);
    console.log(third);

// >>>>>>> 4,5,6 positions <<<<<<< 

    console.log('4th, 5th, 6th position');
const fourth = getCard(first, second)
    console.log(fourth);    
const fifth = getCard(second, third)
    console.log(fifth);    
const sixth = getCard(fourth, fifth)
    console.log(sixth);    

// >>>>>>> 7,8,12,13,14 positions <<<<<<< 

    console.log('7th, 8th, 12th, 13th, 14th position');
const seventh = getCard(first, fifth)
    console.log(seventh);    
const eighth = getCard(second, sixth)
    console.log(eighth);    
const twelve = getCard(seventh, eighth)
    console.log(twelve);

    console.log('---');
const thirteenth = getCard(first, fourth, sixth)
    console.log(thirteenth);
const fourteenth = getCard(third, fifth, sixth)
    console.log(fourteenth);

// >>>>>>> 16,19,20,21 positions <<<<<<< 

    console.log('16, 19, 20, 21 position');
const sixteen = getCard(first, third, fourth, fifth)
    console.log(sixteen);
const nineteenth = getCard(fourth, sixth)
    console.log(nineteenth);
const twenty = getCard(fifth, sixth)
    console.log(twenty);
const twentyOne = getCard(first, second, third, fourth, fifth, sixth)
    console.log(twentyOne);
 
// >>>>>>> SHADOW CARDS <<<<<<<
console.log('SHADOW');
const A = getCard(first, fourth)
    console.log(A);
    console.log('---');
const B = getCard(second, fourth)
    console.log(B);
const C = getCard(second, fifth)
    console.log(C);

    console.log('---');
const D = getCard(third, fifth)
    console.log(D);
const E = getCard(fourth, sixth)
    console.log(E);
const F = getCard(fifth, sixth)
    console.log(F);

    console.log('---');
const G1 = getCard(B, F)
    console.log(G1);
const G2 = getCard(C, D)
    console.log(G2);

    console.log('---');
const H = getCard(A, E)
    console.log(H);

