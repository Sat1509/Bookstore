const express = require('express');
const User = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
    const { username, password } = req.body;
    try {
        // Find user by username
        const admin = await User.findOne({ username });

        console.log('Admin object:', admin);  // Log the admin object to check if it's found
        if (!admin) {
            return res.status(404).send({ message: "Admin not found!" });
        }

        console.log('Hashed password from DB:', admin.password);  // Log hashed password from DB

        // Compare the hashed password from the DB with the plaintext password provided
        const isMatch = await bcrypt.compare(password, admin.password);
        console.log('Password match result:', isMatch);  // Log result of the password comparison

        if (!isMatch) {
            return res.status(401).send({ message: "Invalid password!" });
        }

        // Create JWT token if the password is correct
        const token = jwt.sign(
            { id: admin._id, username: admin.username, role: admin.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        });

    } catch (error) {
        console.error("Failed to login as admin", error);
        res.status(500).send({ message: "Failed to login as admin" });
    }
});

module.exports = router;


























/*const express = require('express');
const User = require('./user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');  // Make sure bcrypt is imported

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/admin", async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await User.findOne({ username });

        console.log('Hashed password from DB:', admin.password);

        if (!admin) {
            return res.status(404).send({ message: "Admin not found!" });
        }

        // Compare the hashed password stored in the database with the password provided in the request
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).send({ message: "Invalid password!" });
        }

        const token = jwt.sign(
            { id: admin._id, username: admin.username, role: admin.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        });

    } catch (error) {
        console.error("Failed to login as admin", error);
        res.status(500).send({ message: "Failed to login as admin" });
    }
});

module.exports = router;*/
