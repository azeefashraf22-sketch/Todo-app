import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.render("form", { user: req.query.user || 'User' });
});

router.post("/submit", (req, res) => {
    res.send(req.body);
});

export default router;