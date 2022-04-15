const express = require('express');
const books_object = express.Router(); 

const Books = require('../models/book'); 
const books_array = [{id:1, name: 'chemister',des:'description data'}, {id:2, name: 'math',des:'description data math'}, {id:3, name: 'english',des:'description data post 3'}];

books_object.get('/', async(req, res) => {
    try{
        const books = await Books.find();
        res.json(books);
    }catch(err) {
        res.status(400).send(err );
    }
})
books_object.get('/:id', async (req, res) => {
    try{
        const book = await Books.findById(req.params.id);
        //console.log(book);
        // if(!book) {
        //     throw error ("book not found");
        // }
        res.json(book);
    }catch(err) {
        res.status(400).send(err.error);
    }
})

books_object.put('/', async(req, res) => {
    console.log(req.body);
    return;
    const book = new Books({
        name : req.body.name,
        des : req.body.des
    });

    try{
        const post_books = await book.save();
        res.json(book);
    }catch(err) {
        res.status(400).send(err);
    }
})

books_object.patch('/:id', async(req, res) => {
    try{
        const book = await Books.findById(req.params.id);
        if (!book) {
            res.status(404).send('record not found')
            return
        }
        book.name = req.body.name;
        const sav = await book.save();
        res.json(sav);
    }catch(err) {
        res.status(400).send(err);
    }
})

books_object.delete('/:id', async(req, res) => {
    try{
        const book = await Books.findByIdAndDelete(req.params.id);
        res.status(200).send("record deleted")
    }catch(err) {
        res.status(400).send(err)
    }
})
module.exports = books_object;