'use strict';
// Things are a little bit messed up
// Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
// Assemble the fragments into the out variable


//output should be : 
/* Never gonna give you up Never gonna let you down\n
Never gonna run around and desert you\n
Never gonna make you cry Never gonna say goodbye\n
Never gonna tell a lie and hurt you\n */



let notSoCrypticMessage: number[] = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11];
// console.log(notSoCrypticMessage)



let hashmap = {
  7: 'run around and desert you',
  50: 'tell a lie and hurt you ',
  49: 'make you cry, ',
  2: 'let you down',
  12: 'give you up, ',
  1: 'Never gonna ',
  11: '\n',
  3: 'say goodbye '
};

let out: string = '';

function decoding(array: number[], object: object) {
    for (let i: number = 0; i < array.length; i++){
        let keys: string [] = Object.keys(object);
        if ( keys.indexOf(array[i].toString()) >= 0){       
            let keyOfstring = keys.indexOf(array[i].toString())
            out += Object.values(object)[keyOfstring];

        }
               
    }
    return out;
}

console.log(decoding(notSoCrypticMessage, hashmap));


