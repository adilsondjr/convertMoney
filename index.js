const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(3000, err => {
    if(err) {
        console.log('Convert Money is not up !!!')
    } else {
        console.log('Convert Money is up !!!')
    }
})