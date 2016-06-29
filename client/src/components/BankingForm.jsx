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
			<div className="div-display form-display">
				<form onSubmit={this.addAccount}>
					<h3>Add New Account</h3>
					<label>Account Name:
						<input
							className="text-field"
							type="text"
							placeholder="Enter Name"
							value={this.state.owner}
							onChange={this.handleOwnerChange}
						/>
					</label>
					<label>Account Amount:
						<input
							className="text-field"
							type="number"
							placeholder="Enter Amount"
							value={this.state.amount}
							onChange={this.handleAmountChange}
						/>
					</label>
					<label>Account Type:
						<select
							className="text-field"
							onChange={this.handleTypeChange}>
							<option>Business</option>
							<option>Personal</option>
						</select>
					</label>
					<input
						className="button"
						type="submit"
					/>
					</form>
			</div>
		)
	}
})

module.exports = BankingForm;
