var React = require('react');

var Accounts = require('./Accounts');
var BankingTotal = require('./BankingTotal');
var SampleAccounts = require('../sample_accounts.js')

var BankingBox = React.createClass({
	getInitialState: function() {
		return {
			accounts: SampleAccounts
		};
	},

	getBankingTotal: function() {
		var total = 0;
		this.state.accounts.forEach(function(account) {
			total += account.amount
		})
		return total
	},

	render: function() {
		return (
			<div>
				<h2> Banking Box </h2>
				<BankingTotal total={this.getBankingTotal()} />
				<Accounts />
			</div>
		)
	}
})

module.exports = BankingBox;
