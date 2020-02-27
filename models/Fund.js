const mongoose = require('mongoose');

const FundSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	month: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	reason: {
		type: String,
		required: true,
	},
	approved: {
		type: String,
		required: true,
		default: 'pending',
	},
});

module.exports = mongoose.model('Fund', FundSchema);
