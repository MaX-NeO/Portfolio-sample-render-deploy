const mongoose = require('mongoose')

// "title": "title 1",
// "coverimg": "https://loremflickr.com/640/480/cats",
// "desc": "desc 1",
// "link": "https://loremflickr.com/640/480",
// "git": "http://rubbery-ex-husband.name",
// "id": "1"
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    coverimg: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
    git: {
        type: String,
        required: true,
    }



})

const Projects = mongoose.model("Projects", projectSchema)
module.exports = Projects;
