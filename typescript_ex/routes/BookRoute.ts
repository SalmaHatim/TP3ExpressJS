import { getBooks, deleteBook, createBook,changeNbrOfPagesRead } from "../controller/BookController"
import { Router } from "express"
export const bookRouter = Router()

bookRouter.get('/all',getBooks)
bookRouter.post('/addBook',createBook)
bookRouter.post('/changeNbrPages/:title/:nbr', changeNbrOfPagesRead)
bookRouter.delete('/deleteBook/:title', deleteBook)

