var React = require('react');

var BankingForm = React.createClass({
	getInitialState: function() {
		return {
			owner: '',
			amount: '',
			type: 'Business'
		};
	},

	handleOwnerChange: function(e) {
		this.setState({
			owner: e.target.value
		})
	},

	handleAmountChange: function(e) {
		this.setState({
			amount: e.target.value
		})
	},

	handleTypeChange: function(e) {
		this.setState({
			type: e.target.value
		})
	},

	addAccount: function(e) {
		e.preventDefault();
		this.props.addAccount({
			owner: this.state.owner,
			amount: parseInt(this.state.amount),
			type: this.state.type
		});
		this.setState({
			owner: '',
			amount: '',
			type: 'Business'
		})
	},

	render: function() {
		return (
			<div className="form">
				<form onSubmit={this.addAccount}>
					<input
						type="text"
						placeholder="Account Name"
						value={this.state.owner}
						onChange={this.handleOwnerChange}
					/>
					<input
						type="number"
						placeholder="Account Amount"
						value={this.state.amount}
						onChange={this.handleAmountChange}
					/>
				<select onChange={this.handleTypeChange}>
						<option>Business</option>
						<option>Personal</option>
					</select>
					<input type="submit"/>
					</form>
			</div>
		)
	}
})

module.exports = BankingForm;
