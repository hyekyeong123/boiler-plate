const mongoose = require('mongoose'); // 몽구스 가져오기

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true,
        // 공백제거

        unique: 1
        // 중복 제거
    },
    password: {
        type: String,
        minlength:5
    },
    lastname: {
        type: String,
        maxlength:50
    },
    role: {
        // member 권한에 관한 것
        type: Number,
        default:0
    },
    image: String,
    token: {
        type: String,
        // 유효성 검사
    },
    tokenExp: {
        // 토큰 유효기간
        type:Number
    }
})
const User = mongoose.model('User', userSchema)
// 모델로 감싸주기

module.exports = {User}