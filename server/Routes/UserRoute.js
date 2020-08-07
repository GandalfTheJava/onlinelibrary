const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../Models/UserModel');
router.post("/register", async (req, res) => {
    try {
        const { email, password, passwordCheck, displayName } = req.body;

        if (!email || !password || !passwordCheck) {
            return res.status(400).json({ message: "Please Complete All Fields" });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        if (password !== passwordCheck) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "Account with that email already exists" });
        }
        if (!displayName) displayName = email;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const createNewUser = new User({
            email,
            password: passwordHash,
            displayName
        });

        const savedUser = await createNewUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ err });
    }
});

module.exports = router;