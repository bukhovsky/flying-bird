const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../dist')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('Hello express!')
    })


    app.listen(port, () => {
        console.log('Server is up on port 3000.')
        })