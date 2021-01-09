const express = require('express');
const authorRouter = express.Router();
function router(nav){
    var authors = [
        {
            title:'Arthur Golden',
            author:'He is the author of a Novel called Memories of a Geisha',
            genre:'Novel',
            img:'jonathan_swift.jpg'
        },
    
        {
            title:'J K Rowling',
            author:'She is the writer of a fantasy novel cum movie named HarryPotter',
            genre:'Fantasy',
            img:'rowling.jpg'
        },
    
        {
            title:'Josh Malerman',
            author:'He is the author of a Story named Birdbox',
            genre:'The best selling psychological thriller',
            img:'vaikkombasheer.jpg'
        },
        {
            title:'Harper Lee',
            author:'Famous Novelist ,To kill a mockingbird',
            genre:'Novel',
            img:'sudhamurty.jpg'
        },
        {
            title:'Robert Frost',
            author:'He is famous for his poem Road Not Taken',
            genre:'Poem',
            img:'robert.jpg'
        }
    ]
    
    
    authorRouter.get('/',function(req,res){
        res.render('authors',{
            nav,
            title:'Library',
            authors 
        });
    });
    
    // booksRouter.get('/single',function(req,res){
    //     res.send('Hey I am a Single Book');
    // });
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
            nav,
            title:'Library',
            author:authors[id]
        });
    });

    return authorRouter;
}



module.exports = router;