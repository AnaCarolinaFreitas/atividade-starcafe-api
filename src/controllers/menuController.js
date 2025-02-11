const Menu = require('../models/Menu');

const list = new MenuList();

list.addItem(new MenuList('Salgado','Hamburger', 20));
list.addItem(new MenuList('Salgado','pão de queijo', 7));
list.addItem(new MenuList('Doce','Bolo de pote', 10));
list.addItem(new MenuList('Doce','Croissant de chocolate', 10));
list.addItem(new MenuList('Bebida','Água', 5));
list.addItem(new MenuList('Bebida','Café', 7));

module.exports = list;