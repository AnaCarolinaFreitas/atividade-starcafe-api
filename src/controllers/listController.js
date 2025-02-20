const OrderList = require('../models/OrderList.js');
const Order = require('../models/Order.js');

const list = new OrderList();

list.addOrder(new Order('Ana', 'Doce', 'Croissant de chocolate',  10, 'pendente'));
list.addOrder(new Order('Larissa', 'Salgado', 'pão de queijo', 7, 'pendente'));

const router = {
    addOrder: (req, res) => {
        try{
            const { client, type, description, price } = req.body;
            if (!client || !type || !description || !price) {
                throw new Error('Campos inválidos, preencha todos os campos');
            }
            if (typeof price !== 'number') {
                throw new Error('Preço inválido, insira o valor do pedido em números');
            }
            if (description !== 'Croissant de chocolate' && description !== 'pão de queijo' && description !== 'Hamburger' && description !== 'Bolo de pote' && description !== 'Água' && description !== 'Café') {
                throw new Error('Item não encontrado no cardápio');
            }
            const order = new Order(client, type, description, price, 'pendente');
            list.addOrder(order);
            res.status(200).json({message: 'Pedido adicionado com sucesso'});
        } catch (error) {
            res.status(400).json({message: `Erro ao adicionar pedido: ${error.message}`});
        }
    },

    getAllOrders: (req, res) => {
        try {
            const orders = list.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            res.status(404).json({message:' Nenhum pedido encontrado'});
        }
    },

    getOrderById: (req, res) => {
        try { 
            const id = req.params.id;
            res.status(200).json(list.getOrderById(id));
        } catch (error) {
            res.status(404).json({message: 'Pedido não encontrado'});
        }
    },

    deleteOrder: (req, res) => {
        try {
            const id = req.params.id;
            const order = list.getOrderById(id);

            if (order.status === 'pendente') {
                list.deleteOrder(id);
                res.status(200).json({message: 'Pedido cancelado com sucesso'});
            } else {
                res.status(400).json({message: 'Pedido não pode ser cancelado pois já está sendo preparado ou já foi concluido'});
            }           
        } catch (error) {
            res.status(404).json({message: 'Pedido não encontrado'});
        }
    }
}

module.exports = router;