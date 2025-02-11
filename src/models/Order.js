class Order {
    constructor(client, type, description, price, status) {
        this.id = uuidv4();
        this.client = client;
        this.type = type;
        this.description = description;
        this.price = price;
        this.status = status;
    }
}

module.exports = Order;