"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoService_1 = require("../../service/todo/todoService");
const router = express_1.default();
router.post('/', todoService_1.createTodo);
router.get('/', todoService_1.getTodo);
router.patch('/:todoId');
router.delete('/:id');
exports.default = router;
