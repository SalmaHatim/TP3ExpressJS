import { Document, Schema, Model } from "mongoose"

const mongoose = require('mongoose')

enum STATUS{
    Read, ReRead, DNF, CurrentlyReading, ReturnedUnread, WantToRead
}
enum FORMAT{
    Print, PDF, Ebook, AudioBook
}

export class Book extends Document{
    title:String
    author:string
    numberOfPages:number
    status:STATUS
    price:number
    numberOfReadPage:number
    format:FORMAT
    suggestedBy:string
    finished:boolean

    constructor(
        title:string, 
        author:string,
        numberOfPages:number,
        status:STATUS,
        price:number,
        numberOfReadPage:number,
        format:FORMAT,
        suggestedBy:string,
        finished:boolean = false
    ){
        super()
        this.title = title
        this.author = author
        this.numberOfPages = numberOfPages
        this.numberOfReadPage = numberOfReadPage
        this.status = status
        this.price = price
        this.format = format
        this.suggestedBy = suggestedBy
        this.finished = finished
    }

    public currentlyAt():number {
        return this.numberOfReadPage
    }
    
}

const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    numberOfPages:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum: ['Read', 'ReRead', 'DNF', 'CurrentlyReading', 'ReturnedUnread', 'WantToRead'],
    },
    price:{
        type:Number,
        required:true
    },
    numberOfReadPage:{
        type:Number,
        required:true
    },
    format:{
        type:String,
        enum: ['Print', 'PDF', 'Ebook', 'AudioBook'],
        required:true
    },
    suggestedBy:{
        type:String,
        required:true
    },
    finished:{
        type:Boolean,
        required:true
    },
  });
export const BookModel: Model<Book> = mongoose.model('BookModel', bookSchema);

