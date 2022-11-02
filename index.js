// code goes here

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        let message = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        messages.push(message);
    }
    return messages;
}

(writeCards(["Andrea", "Tiffany"], "birthday"));

function countDown(number) {
    let i = number;
    while ( i > -1 ) {
        console.log(i);
        i--;
    };
}

countDown(10);

