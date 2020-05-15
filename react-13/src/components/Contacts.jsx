import React from "react";

class Contacts extends React.Component {
	render() {
		return (
			<React.Fragment>{/*lets you group a list of children without adding extra nodes to the DOM*/}
				<div data-testid="contacts" className="container">
					<section className="contacts">
						<article className="contact">
							<span className="contact__avatar" />
							<span className="contact__data">Nome</span>
							<span className="contact__data">Telefone</span>
							<span className="contact__data">País</span>
							<span className="contact__data">Admissão</span>
							<span className="contact__data">Empresa</span>
							<span className="contact__data">Departamento</span>
						</article>

						{this.props.children}
					</section>
				</div>
			</React.Fragment>

		);
	}
}

export default Contacts;
