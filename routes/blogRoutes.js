const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();

// blog route 
router.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err)
        });
})
//post req
router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        });
})
router.get('/blogs/:id', (req, res) => {
    const id = req.params.id; //same name as :id
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'blog details' })
        })
        .catch((err) => console.log(err));
})
router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => console.log(err));
})

module.exports = router;