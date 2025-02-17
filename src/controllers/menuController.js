const Menu = require('../models/Menu.js');
const Item = require('../models/Item.js');

const list = new Menu();

list.addItem(new Item('Salgado','Hamburger', 20));
list.addItem(new Item('Salgado','pão de queijo', 7));
list.addItem(new Item('Doce','Bolo de pote', 10));
list.addItem(new Item('Doce','Croissant de chocolate', 10));
list.addItem(new Item('Bebida','Água', 5));
list.addItem(new Item('Bebida','Café', 7));

const router = {

addItem: (req, res) => {
    try {
        const {type, description, price} = req.body;
        if (!type ||!description || !price); {
            throw new Error('Campos inválidos');
        }
        const item = new Item(type, description, price);
        list.addItem(item);
        res.status(200).json({message: 'Item adicionado com sucesso'});
    } catch (error) {
        res.status(400).json({message: 'Erro ao adicionar item, tente novamente'});
    }
},

getMenu: (req, res) => {
    try {
        const items = list.getMenu();
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({message: 'Erro ao buscar itens, tente novamente'});
    }
}
}

module.exports = router;