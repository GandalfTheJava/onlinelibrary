const router = require('express').Router();

router.post("/register", async (req, res) => {
    const { email, password, passwordCheck, displayName } = req.body;

    if (!email || !password || !passwordCheck) {
        return res.status(400).json({ message: "Please Complete All Fields" });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    if (password != passwordCheck) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    res.send("Nice");
});

module.exports = router;