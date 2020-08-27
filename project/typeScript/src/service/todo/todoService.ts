import { RequestHandler } from "express"
import { Todo } from '../../models/todo/todo'

const TODOS: Todo[] = []

export const createTodo:RequestHandler = (req , res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text)
  TODOS.push(newTodo)
  res.status(200).json({message: 'finish the doto', todo: newTodo})
}

export const getTodo:RequestHandler = (req , res, next) => {
  res.status(200).json({todos: TODOS})
}

export const updateTodo:RequestHandler<{todoId: string}> = (req , res, next) => {
  const A = {
    testA: 'B'
  }
  const todoId = req.params.id
  res.status(200).json({})
}