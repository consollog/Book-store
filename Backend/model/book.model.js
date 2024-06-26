import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    catagory: String,
    image: String
})

const Book = mongoose.model("Book", bookSchema);

export default Book;