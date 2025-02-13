const Menu = require('../models/Menu.js');
const Item = require('../models/Item.js');

const cardapio = new Menu();

list.addItem(new Item('Salgado','Hamburger', 20));
list.addItem(new Item('Salgado','pão de queijo', 7));
list.addItem(new Item('Doce','Bolo de pote', 10));
list.addItem(new Item('Doce','Croissant de chocolate', 10));
list.addItem(new Item('Bebida','Água', 5));
list.addItem(new Item('Bebida','Café', 7));

const router = {
    getAllItems: (req, res) => {
        try {
            res.json(cardapio.getAllItems());
        } catch (error) {
            res.status(404).json({message: 'Nenhum item encontrado, tente novamente'});
    }
},

addItem: (req, res) => {
    try {
        const {type, description, price} = req.body;
        if (!description || !price);
        cardapio.addItem(food);
        res.status(200).json({message: 'Item adicionado com sucesso'});
    } catch (error) {
        res.status(400).json({message: 'Erro ao adicionar item, tente novamente'});
    }
}
}

module.exports = router;