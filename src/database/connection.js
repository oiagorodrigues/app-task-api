let Mongoose = require('mongoose')

const mongoUsr = process.env.MONGO_ATLAS_USER
const mongoPw = process.env.MONGO_ATLAS_PW
const bdName = process.env.MONGO_ATLAS_BDNAME
const mongoOptions = { useNewUrlParser: true }
const mongoURI = `mongodb+srv://${mongoUsr}:${mongoPw}@cluster0-qnlg0.mongodb.net/${bdName}?retryWrites=true&w=majority`

Mongoose.connect(mongoURI, mongoOptions, err => {
  if (err) {
    console.log('Mongoose Error! => ', err)
  }

  console.log('Mongoose Conectado!')
})

module.exports = Mongoose
