const mongoose = require('mongoose')
// nu uita sa pui parola
// const connectionString = ''

const connectDB = (url) =>{
return mongoose.connect(url, {
	useNewUrlParser:true,
	useCreateIndex:true,
	useFindAndModify:false,
	useUnifiedTopology:true,
})
}

module.exports = connectDB

// .then(()=>console.log('Connected to the DB'))
// .catch((err)=> console.log(err))