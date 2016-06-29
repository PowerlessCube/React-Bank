var React = require('react');

var BankingTotal = React.createClass({
	render: function() {
		return (
			<div>
				<h3>Total Cash in Bank: <span>£</span>{this.props.total}</h3>
			</div>
		)
	}
});

module.exports = BankingTotal;
