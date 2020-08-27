import Router, { Request, Response, RequestHandler, NextFunction } from "express"
import { createTodo, getTodo } from "../../service/todo/todoService";

const router = Router()

router.post('/', createTodo)

router.get('/', getTodo)

router.patch('/:todoId')

router.delete('/:id')

export default router