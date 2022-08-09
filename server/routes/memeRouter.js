const express = require("express");
const memeRouter = express.Router();
const Meme = require("../models/meme.js");

// GET all user created Memes
memeRouter.get("/", (req, res, next) => {
    Meme.find((err, memes) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(memes)
    })
})

// POST new Meme
memeRouter.post("/", (req, res, next) => {
    // maybe add username to req here
    const newMeme = new Meme(req.body)
    newMeme.save((err, savedMeme) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMeme)
    })
})

module.exports = memeRouter;