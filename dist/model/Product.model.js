"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let ProductSchema = new mongoose_1.default.Schema({
    id: { type: String },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true, default: true },
});
ProductSchema.plugin(mongoose_paginate_1.default);
const Product = mongoose_1.default.model("Book", ProductSchema);
exports.default = Product;
