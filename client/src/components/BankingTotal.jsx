var React = require('react');

var BankingTotal = React.createClass({
	render: function() {
		return (
			<div className="total-display">
				<h3>Total Cash in Bank: <span>£</span>{this.props.total.toLocaleString()}</h3>
			</div>
		)
	}
});

module.exports = BankingTotal;
