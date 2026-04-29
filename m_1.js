express = require("express")
app = express()

multer = require("multer")

app.use(express.static(__dirname, { index: "m_1.html" }))

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
    upload.single("mypic"),
    (res, req) => {
        const file = req.file
        if (file) {
            res.send("<h1>file" + file.originalname + "has been uploaded in" + file.destination + "folder.")
        }
    }
)

app.listen(3120, () => {
    console.log("Server is running on port 3120")
})