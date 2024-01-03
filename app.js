const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

app.set('view engine', 'ejs');
// app.set('views','myviews');
//  default folder name views automatically look/other name then add this line;

// connection str to mongo
const dbURL = 'mongodb+srv://ninja123:rishit713@web3.ywyvt3x.mongodb.net/node-tut?retryWrites=true&w=majority';
mongoose.connect(dbURL) //async task may take time to do
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //to accepting form data for push

// *************************************************
// commented down this part sandbox routes to mongoose
// *************************************************

// //middleware 
// app.use((req, res, next) => {
//     console.log('new request made.');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })

app.get('/', (req, res) => {
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    // ];
    // res.render('index', { title: 'Home', blogs });

    // res.send('<p>hello world!!!</p>');
    // res.sendFile('./views/index.html', { root: __dirname });
    res.redirect('/blogs');
})

app.get('/about', (req, res) => {
    // res.send('<p>hello world!!!</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: 'About' });
})
//create
app.get('/blogs/create', (req, res) => {
    // res.send('<p>hello world!!!</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('create', { title: 'create' });
})
//blog routes - made mini app
app.use(blogRoutes);

app.get('/about-us', (req, res) => {
    res.redirect('/about');
})
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: '404' });
})


// *************************************************************
// // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'my new blog2',
//         snippet: 'about me',
//         body: 'se my new self'
//     });

//     blog.save() //instance of blog created above we used and down we use directly Blog.find
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// })
// // get all blog from db
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// })
// // getsingle blog from db
// app.get('/single-blog', (req, res) => {
//     Blog.findById('658176a222c9996869b94ba7') //give in str format automatically convet to int
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// })