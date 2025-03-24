const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// Enable CORS with specific origins and credentials
app.use(cors({
    origin: ['http://localhost:5174', 'https://book-app-frontend-tau.vercel.app'],
    credentials: true, // This is important for cookies and sessions
}));

// Routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/order/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

const nytBestsellersRoute = require("./src/nyt/bestsellers.route");
app.use("/api/nyt-bestsellers", nytBestsellersRoute);

const trendingBooksRoutes = require("./src/nyt/trendingBooks.route");
app.use("/api/trending-books", trendingBooksRoutes);

const bookReviews = require("./src/nyt/topArticles.route");
app.use("/api/book-reviews", bookReviews);

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Root route - moved outside of main()
app.get("/", (req, res) => {
    res.send("Book Store Server is running!");
});

// Add the following code to handle OPTIONS requests
app.options('*', cors());  // Enable pre-flight requests for all routes

// MongoDB Connection & Server Start
async function startServer() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit process if DB connection fails
    }
}

startServer();
