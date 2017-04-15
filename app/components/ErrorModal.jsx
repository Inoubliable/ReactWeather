var React = require('react');

class ErrorModal extends React.Component {

	componentDidMount() {
		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
	}

	render() {
		var {title, message} = this.props;

		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<button className="button" data-close="">Okay</button>
			</div>
		);
	}

}

ErrorModal.defaultProps = {
	title: 'Error'
};

module.exports = ErrorModal;