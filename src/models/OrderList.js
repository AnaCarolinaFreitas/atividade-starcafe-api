const Order = require('./Order');

class OrderList {
    constructor() {
        this.orders = [];
    }

    addOrder(client, type, description, price, status) {
        const newOrder = new Order(client, type, description, price, status);

        this.orders.push(newOrder);
        return newOrder;
    }

    listOrders() {
        return this.orders;
    }

    getOrderById(id) {
        return this.orders.find(order => order.id === id);
        if (!order) {
            throw new Error('Order not found');
        }
    }

    deleteOrder(id) {
        const order = this.order.findIndex(livro => livro.id === id);

        if (index !== -1) {
            return this.orders.splice(index, 1)[0];
        }
        return null
    }
}

module.exports = OrderList();

