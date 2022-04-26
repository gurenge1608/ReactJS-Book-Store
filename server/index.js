const express = require('express')
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://tieuho036:tieuho036@reactjs-nodejs-db.zho0s.mongodb.net/reactjs-nodejs-db?retryWrites=true&w=majority`,{
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()

app.get('/', (req,res) => res.send('Hello World !!!'))

const PORT = 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))