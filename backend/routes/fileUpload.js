const express = require("express");
const Image = require("../models/ImageSchema");
const router = express.Router();
const middleware = require("../middleware");
const multer = require('multer');

// multer middleware
const upload = multer({
    
    limits : {
        fileSize: 2000000
    },
    fileFilter(req, file, cb){
        console.log("in multer middleware");
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please upload an image"));
        }
        console.log("it worked");
        cb(undefined, true)
    }
})

// post route to upload image

router.post("/", middleware, upload.single('image'), async (req, res) => {
    console.log("your are in image post request");
    try {
        const data = {image: req.file.buffer,name: req.body.name};
        console.log("Data is ",data);
        const newImage = new Image(data);
        // newImage.image = req.file.buffer;
        await newImage.save();
        console.log("image saved succesfully");
        res.send();

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

// get route to accesee all images

router.get("/all", async (req, res) => {
    console.log("in get all images route");
    try {
        const images = await Image.find().sort({"createdAt": -1});
        if (!images) {
            throw new Error();
        }
        res.set('Content-Type', 'image/jpg');
        return res.status(200).json({images: images});
        // res.status(200).json({images: images[0].image});
    } catch (err) {
        console.log(err);
        return res.status(400).send();
    }
})

// get route to access image

router.get("/:id", async (req, res) => {
    console.log("in get image route");
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            throw new Error();
        }
        // res.set('Content-Type', 'image/jpg');
        res.send(image.image);
    } catch (err) {
        console.log(err);
        res.status(400).send();
    }
})



// route to delete image

router.delete("/:id", middleware, async (req, res) => {
    try {
        await Image.deleteOne({_id: req.params.id});
        console.log("in delete image route");
        res.send()
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = router;
