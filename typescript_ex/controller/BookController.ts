import {Book, BookModel} from '../model/Book'

let book:Book
async function deleteBook(req:any, res:any){
    try{
        const {title} = req.params
        const user = await BookModel.deleteOne({title})
        res.json({msg:'book deleted successfully'})
    }catch(err:any){
        const msg:string = err.msg
        res.json({err_msg: msg})
    }
}

async function getBooks(req:any, res:any){
    try{
        const books = await BookModel.find()
        res.json(books)

    }catch(err:any){
        const msg:string = err.msg
        res.json({err_msg: msg})
    }
}

async function changeNbrOfPagesRead(req:any, res:any){
    try{
        const {title, nbr} = req.params
        
        const book = await BookModel.updateOne({title}, {numberOfReadPage:nbr})
        res.json({msg:'book changé en succès'})

    }catch(err:any){
        const msg:string = err.msg
        res.json({err_msg: msg})
    }
}

async function createBook(req:any, res:any){
    try{
        const {
            title, 
            author,
            numberOfPages,
            status,
            price,
            numberOfReadPage,
            format,
            suggestedBy,
        } = req.body
        let finished:boolean = numberOfPages === numberOfReadPage 
            
        const newBook = new BookModel({title, author, numberOfPages,status,price,numberOfReadPage,format, suggestedBy, finished})
        await newBook.save()
        res.json({msg:'book stocke en succès'})

    }catch(err:any){
        const msg:string = err.msg
        res.json({err_msg: msg})
    }
}


export {getBooks, deleteBook, createBook, changeNbrOfPagesRead};
