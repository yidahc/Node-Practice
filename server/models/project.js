const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
//https://mongoosejs.com/docs/index.html

const projectSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    languange: {
        type: String,
    //    required: false
    },
    version: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true,
        default: ""
    },
    createdDate: {
        type: Date,
        required: true
    }
}, {timestamps: true})

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

// files and pictures can be sent with Buffer (which is used to store binary), by converting them to binaries (base 64) and storing them like this