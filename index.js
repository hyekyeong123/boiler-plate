const express = require('express')
// express 모듈 가져오기

const app = express()
// function을 이용해서 새로운 앱을 만들기

const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jhg097:12345@cluster0.fbbpg.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(()=> console.log('몽고디비 연결에 성공하였습니다.'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))
// 루트 디렉토리에 오면 Hello World!를 출력해주게

app.listen(port, () => console.log(`현재 포트는 ${port}`))