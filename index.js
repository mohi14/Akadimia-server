const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('API Is Running')
});

app.get('/course-category', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_courses = courses.filter(c => c.category_id === id);
    res.send(category_courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c._id === id);
    res.send(selectedCourse);
})

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.listen(port, () => {
    console.log('Akadimia Server running on port', port)
})