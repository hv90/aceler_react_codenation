import React from 'react';

class Filters extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			st_searchKey: ''
		};
	}

	searchKeyHandler = eventKeyDown => {
		const {liveFilter} = this.props;
		const {value} = eventKeyDown.target || "";

		this.setState({st_searchKey: value});

		liveFilter(value);
	}

	render() {
		const {st_searchKey} = this.state;
		const {toggleRanker, rank} = this.props;
		return (
			<div data-testid="filters" className="container">
				<section className="filters">
					<div className="filters__search">
						<input
							type="text"
							className="filters__search__input"
							placeholder="Pesquisar"
							value={st_searchKey || ""}
							onChange = {eventKeyDown => this.searchKeyHandler(eventKeyDown)}
						/>

						<button className="filters__search__icon">
							<i className="fa fa-search" />
						</button>
					</div>

					<button className={`filters__item ${rank === 'name' && 'is-selected'}`}
					onClick={() => {toggleRanker('name')}}
					>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${rank === 'country' && 'is-selected'}`}
					onClick={() => toggleRanker('country')}
					>
						País <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${rank === 'company' && 'is-selected'}`}
					onClick={() => toggleRanker('company')}
					>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${rank === 'department' && 'is-selected'}`}
					onClick={() => toggleRanker('department')}
					>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button className={`filters__item ${rank === 'admissionDate' && 'is-selected'}`}
					onClick={() => toggleRanker('admissionDate')}
					>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
