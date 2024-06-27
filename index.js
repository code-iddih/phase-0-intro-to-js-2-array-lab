// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

// Destructively Adds a cat at the end of the Array

function destructivelyAppendCat(name) {
    cats.push(name);
}

// Destructively Adds a cat at the beginning of the Array

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Destructively Removes the last Cat in the Array

function destructivelyRemoveLastCat() {
    cats.pop() ;
}

// Destructively Removes the last Cat in the Array

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-Destructively Adds a cat at the beginning of the Array

function appendCat(name) {
    return [...cats, name]
}

// Non-Destructively Adds a cat at the end of the Array

function prependCat(name) {
    return [name, ...cats]
}

// Non-Destructively Removes a cat at the end of the Array

function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

// Non-Destructively Removes a cat at the beginning of the Array

function removeFirstCat() {
    return cats.slice(1);
}