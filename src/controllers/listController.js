const OrderList = require('../models/OrderList.js');
const Order = require('../models/Order.js');

const list = new OrderList();

list.addOrder(new Order('Ana', 'Doce', 'Croissant de chocolate',  10, 'pendente'));
list.addOrder(new Order('Larissa', 'Salgado', 'pão de queijo', 7, 'pendente'));

const router = {
    addOrder: (req, res) => {
        try{
            const { client, type, description, price, status } = req.body;
            if (!client || !type || !description || !price || !status) {
                throw new Error('Campos inválidos');
            }
            const order = new Order(client, type, description, price, status);
            list.addOrder(order);
            res.status(200).json({message: 'Pedido adicionado com sucesso'});
        } catch (error) {
            res.status(400).json({message: 'Erro ao adicionar pedido, tente novamente'});
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
            list.deleteOrder(order);
            res.status(200).json({message: 'Pedido deletado com sucesso'});
        } catch (error) {
            res.status(404).json({message: 'Pedido não encontrado'});
        }
    }
}

module.exports = router;