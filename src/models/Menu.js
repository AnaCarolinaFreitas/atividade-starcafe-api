const Item = require('./Item');

class Menu {
    constructor(){
        this.items = [];
    }

    addItem(type, description, price){
        const newItem = new Item(type, description, price);

        this.items.push(newItem);
        return newItem;
    }
}

module.exports = new Menu();
