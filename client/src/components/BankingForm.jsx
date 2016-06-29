var React = require('react');

var BankingForm = React.createClass({
	

	render: function() {
		return (
			<div className="form">
				<form onSubmit={this.props.addAccount()}>
					<input type="text" placeholder="Account Name"/>
					<input type="number" placeholder="Account Amount"/>
					<select>
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
