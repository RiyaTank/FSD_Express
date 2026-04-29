// Write an express js that accept multiple files maximum 5 files to be uploaded using multer middleware and saves the file to the specifi
// directory multiple.

express = require("express")
app = express()

multer = require("multer")

app.use(express.static(__dirname, { index: "m_2.html" }))

var store = multer.diskStorage(
    {
        destination: "LJU",
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    }
)

var upload = multer({ storage: store })

app.post("/uploadfile",
    upload.array("mypic", 5),
    (req, res) => {
        const file = req.files
        if (file & file.length > 0) {
            res.send("<h1>file" + file.originalname + "has been uploaded in" + file.destination + "folder.")
        }
    }
)

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})