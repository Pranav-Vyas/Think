const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
    {
        image: {
            type: Buffer
        },
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Image = new mongoose.model("Image", ImageSchema);

module.exports = Image;