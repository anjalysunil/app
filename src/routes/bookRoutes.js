const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title:'Memories of a Geisha',
            author:'Arthur Golden',
            genre:'Novel',
            img:'gulliver.jpg'
        },
        
        {
            title:'Harry Potter',
            author:'J K Rowling',
            genre:'Fantasy',
            img:'harry.jpg'
        },
    
        {
            title:'Bird Box',
            author:'Josh Malerman',
            genre:'The best selling psychological thriller',
            img:'basheer.jpg'
        },
        {
            title:'To kill a mockingbird',
            author:'Harper Lee',
            genre:'Novel',
            img:'grandmother.jpg'
        },
        {
            title:'Road Not Taken',
            author:'Robert Frost',
            genre:'Poem',
            img:'roadnottaken.jpg'
        }
    ]
    
    
    booksRouter.get('/',function(req,res){
        res.render('books',{
            nav,
            title:'Library',
            books 
        });
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send('Hey I am a Single Book');
    // });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book:books[id]
        });
    });

    return booksRouter;
}



module.exports = router;