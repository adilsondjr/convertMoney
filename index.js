const express = require('express')
const app = express()

app.set('view engine', 'ejs')


app.listen(3000, err => {
    if(err) {
        console.log('Convert Money is not up !!!')
    } else {
        console.log('Convert Money is up !!!')
    }
})