const Joi = require("joi");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: false,
    },
    comments: {
        type: String,
        required: false,
        maxLength: 1000
    },
    numberOfSlots: {
        type: String,
        required: true,
    },
    users: {
        type: [String],
        required: false,
    }
})

const Task = mongoose.model("Task", TaskSchema);

const validate = (task) => {
    const schema = Joi.object({
        taskName: Joi.string().min(1).max(255).required(),
        startDate: Joi.string().min(1).max(255).required(),
        endDate: Joi.string().min(1).max(255).required(),
        numberOfSlots: Joi.string().min(1).max(255).required(),
        venue: Joi.string().min(1).max(255).required(),
        comments: Joi.string().min(1).max(1000).required(),
    });
    return schema.validate(task);
};
module.exports = {
    Task,
    validate,
};