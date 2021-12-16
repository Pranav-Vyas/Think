const express = require("express");
const dotenv = require("dotenv");
const port = 5000;
const app = express();
const session = require("express-session");
dotenv.config({path: './config.env'});
var cors = require("cors");


require("./database");

const secret = process.env.SECRET;

app.use(cors());

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(session(
    {
        secret: secret,
        resave: true,
        saveUninitialized: false,
        proxy: true,
        withCredentials: true
    }
))

app.use("/login", require("./routes/loginRoute"));
app.use("/logout", require("./routes/logoutRoute"));
app.use("/upload", require("./routes/fileUpload"));
app.use("/auth", require("./routes/auth"));


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})