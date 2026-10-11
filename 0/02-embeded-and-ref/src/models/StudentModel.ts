import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

export const StudentModel = model(
    'Student',
    studentSchema
);
