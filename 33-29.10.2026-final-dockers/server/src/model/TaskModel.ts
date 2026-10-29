import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Task = model('tasks', taskSchema);
export default Task;
