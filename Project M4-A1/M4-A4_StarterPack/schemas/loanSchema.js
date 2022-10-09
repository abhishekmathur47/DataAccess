const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  
    id: Number,
    customerName: String,
    phoneNumber: Number,
    address: String,
    interest: Number,
    loanTermYears: Number,
    loanType: String,
    description: String,
    createdDate: { type: Date, default: new Date() },
    insertedDate: { type: Date, default: new Date() },
  }
);

mongoose.createConnection('mongodb+srv://abhishekmathur:root123@ift458.azlp72l.mongodb.net/test');

const Person = mongoose.model('Person', blogSchema);