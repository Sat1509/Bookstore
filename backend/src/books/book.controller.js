const Book = require("./book.model");

const postABook = async (req, res) => {
    try {
        const newBook = new Book({...req.body});
        await newBook.save();
        res.status(200).send({message: "Book posted successfully", book: newBook})
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({message: "Failed to create book"})
    }
}

// get all books
const getAllBooks =  async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1});
        res.status(200).send(books)

    } catch (error) {
        console.error("Error fetching books", error);
        res.status(500).send({message: "Failed to fetch books"})
    }
}

const getSingleBook = async (req, res) => {
    try {
        const {id} = req.params;
        const book =  await Book.findById(id);
        if(!book){
            res.status(404).send({message: "Book not Found!"})
        }
        res.status(200).send(book)

    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({message: "Failed to fetch book"})
    }

}

// update book data
const UpdateBook = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedBook =  await Book.findByIdAndUpdate(id, req.body, {new: true});
        if(!updatedBook) {
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book updated successfully",
            book: updatedBook
        })
    } catch (error) {
        console.error("Error updating a book", error);
        res.status(500).send({message: "Failed to update a book"})
    }
}

const deleteABook = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedBook =  await Book.findByIdAndDelete(id);
        if(!deletedBook) {
            res.status(404).send({message: "Book is not Found!"})
        }
        res.status(200).send({
            message: "Book deleted successfully",
            book: deletedBook
        })
    } catch (error) {
        console.error("Error deleting a book", error);
        res.status(500).send({message: "Failed to delete a book"})
    }
};
const searchBooks = async (req, res) => {
    const { q } = req.query;
    console.log("🔎 Search query received:", q);  // Debug log

    if (!q) {
        console.log("❌ No search query provided");
        return res.status(400).json({ message: "Search query is required" });
    }

    try {
        const books = await Book.find({ title: { $regex: q, $options: 'i' } });
        console.log("📚 Books found:", books);

        if (books.length === 0) {
            console.log("⚠ No books found matching the search");
            return res.status(404).json({ message: "No books found with that title" });
        }

        res.json(books);
    } catch (err) {
        console.error("❌ Error in searchBooks function:", err);
        res.status(500).json({ message: "Failed to fetch books", error: err.toString() });
    }
};


module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteABook,
    searchBooks
}
