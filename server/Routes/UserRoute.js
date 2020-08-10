const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');


router.post("/register", async (req, res) => {
    try {
        let { email, password, passwordCheck, displayName } = req.body;
        if (!email || !password || !passwordCheck) {
            return res.status(400).json({ message: "Please Complete All Fields" });
        }

        if (password.length < 6) {
            console.log("error 2");
            return res.status(400).json({ message: "Password must be at least 6 characters long" });
        }

        if (password !== passwordCheck) {
            console.log("error 3");
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            console.log("error 4");
            return res.status(400).json({ message: "Account with that email already exists" });
        }

        console.log(req.body);
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
        res.status(500).json({ error: err.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please complete all fields." });
        }
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ message: "No account with this email." });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) { return res.status(400).json({ message: "Invalid Credentials." }); }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        res.json({
            token,
            user: {
                id: user._id,
                displayName: user.displayName
            },
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/tokenisvalid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.SECRET_KEY);

        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);

        if (!user) return res.json(false);

        return res.json(true);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/", auth, async (req, res) => { //Get data about the current logged in user
    const user = await User.findById(req.user);
    res.json({
        displayName: user.displayName,
        id: user._id,
    });
});
module.exports = router;