const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
    // const multer = require('multer')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


const multer = require('multer')
const upload = multer({
        dest: 'images',
        limits: {
            fileSize: 1000000
        },
        fileFilter(req, file, cb) {
            if (file.originalname.match(/\.(doc|docx)$/)) {
                return (new Error('please upload a word document'))
            }

            // cb(new Error('File must be  a PDF'))
            cb(undefined, true)
                // cb(undefined, false)
        }
    })
    // const errorMiddleware = (req, res, next) => {
    //     throw new Error('From my middleware')
    // }

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})


// app.us
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async() => {
    // const task = await Task.findById('5c2e505a3253e18a43e612e6')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5c2e4dcb5eac678a23725b5b')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

// main()