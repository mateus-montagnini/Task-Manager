const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [40, 'name cannot have more tan 20 caracters']
    },
    completed: {
        type: Boolean,
        default: false,
    },
});



module.exports = mongoose.model('Task', TaskSchema);