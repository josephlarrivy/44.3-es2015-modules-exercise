// import React from 'react';
// import foods from './foods.js'
let chosenItem;
let items;

const choice = (items) => {
    let randIdx = Math.floor(Math.random() * items.length);
    chosenItem = items[randIdx];
    return(chosenItem)
}


const remove = (items, item) => {
    let idx = items.indexOf(item)
    let removedItem = items.splice(idx,1)
    return(items)
}




export {choice, remove};