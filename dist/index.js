"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Product_model_1 = __importDefault(require("./model/Product.model"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const uri = "mongodb://localhost:27017/mydatabase2";
mongoose_1.default.connect(uri, (err) => {
    if (err)
        console.log(err);
    else
        console.log("Mongo Data base connected successfully");
});
app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/products", (req, res) => {
    Product_model_1.default.find((err, products) => {
        if (err)
            res.status(500).send(err);
        else
            res.send(products);
    });
});
app.post("/products", (req, res) => {
    let product = new Product_model_1.default(req.body);
    product.save((err) => {
        if (err)
            res.status(500).send(err);
        else
            res.send(product);
    });
});
app.listen(8085, () => {
    console.log("serveur démaré");
});
