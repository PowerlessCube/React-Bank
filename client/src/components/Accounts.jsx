var React = require('react');

var Accounts = React.createClass({
	render: function() {
		var accountDisplay = this.props.accounts.map(function(account) {
			return (
				<div key={account.owner}>
					<ul>
						<li><span>Name: </span>{account.owner}</li>
						<li><span>Balance: £</span>{account.amount.toFixed(2)}</li>
					</ul>
				</div>
			)
		})

		return (
			<div className="accounts-display">
				<h3>{this.props.accounts[0].type} Accounts</h3>
				<h4><span>Total Cash: £</span>{this.props.total.toFixed(2)}</h4>
				{accountDisplay}
			</div>
		)
	}
})

module.exports = Accounts;
