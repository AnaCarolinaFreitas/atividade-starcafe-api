const { v4: uuid4 } = require('uuid');
class Order {
    constructor(client, type, description, price, status) {
        this.id = uuid4();
        this.client = client;
        this.type = type;
        this.description = description;
        this.price = price;
        this.status = status;
    }
}

module.exports = Order;