const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name:{
		type:String,
		required: [true, 'Must provide a name'],
		trim: true, //trim pentru a elimina spatiile in plus din prejurul literelor si cuvintelor
		maxlength:[20,'name can not be more than 20 characters'],
	},
	completed:{
		type:Boolean,
		default: false,
		
	},
})

module.exports = mongoose.model('Task', TaskSchema)

