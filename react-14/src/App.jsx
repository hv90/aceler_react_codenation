import React from 'react';

import TopBar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

import './App.scss';

var globalOrder = 1;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      st_arrayContacts: [],
      st_arraySearchFilter: [],
      st_searchRank: '',
      st_searchRankOrder: 1,
      st_searchIsEmpty: true,
      sortedContacts: []
    };
    console.log('constructor');
  }

 
  /* clearsTheSearch = {

  } */

  componentDidMount = () => {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then(response => response.json())
      .then(contacts => this.setState(
        {
          st_arrayContacts: contacts
        }
      ));
  }

  liveFilter = name => {
    const { st_arrayContacts } = this.state;
    if (name.length > 0) {
      const filteredContacts = st_arrayContacts.filter(contact => {
        return contact.name.toLowerCase()
          .includes(name.toLowerCase());
      });
      this.setState({
        ...this.state,
        st_searchIsEmpty: false,
        st_arraySearchFilter: filteredContacts
      });
    } else {
      this.setState({
        ...this.state,
        st_searchIsEmpty: true,
        st_arraySearchFilter: []
      });
    }
  }

  toggleRanker = (rank, order) => {
    globalOrder = order;
    
    const sortContacts = (rank, order) => {console.log(order)

      return function innerSort(a, b) {
        if (!a.hasOwnProperty(rank) || !b.hasOwnProperty(rank)) {
          return 0;
        }

        const varA = (typeof a[rank] === 'string')
          ? a[rank].toUpperCase() : a[rank];
        const varB = (typeof b[rank] === 'string')
          ? b[rank].toUpperCase() : b[rank];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (globalOrder === 1) ? (comparison * -1) : comparison
        );
      };
    }

    const { st_arrayContacts, st_searchRank } = this.state;
    let newRank;
    let sortedContacts;

    if (rank === st_searchRank) {
      newRank = '';
      sortedContacts = [...st_arrayContacts];
    } else {
      newRank = rank;
      sortedContacts = st_arrayContacts.sort(sortContacts(rank, order));
    }

    this.setState({
      ...this.state,
      st_searchIsEmpty: true,
      st_searchResult: [],
      st_searchRank: newRank,
      sortedContacts
    })

  }





  render() {
    console.log('render');
    const {
      st_arrayContacts,
      st_arraySearchFilter,
      st_searchRank,
      st_searchIsEmpty,
      sortedContacts
    } = this.state;

    let outputContacts;

    if (st_searchIsEmpty) {
      if (st_arrayContacts.length > 0 && sortedContacts.length > 0) {
        outputContacts = sortedContacts.map((contact) => (<Contact key={contact.id} data={contact} />));
      }
      else if (st_arrayContacts.length > 0 && sortedContacts.length === 0) {
        outputContacts = st_arrayContacts.map((contact) => (<Contact key={contact.id} data={contact} />));
      }
      else {
        outputContacts = (<h2>Loading...</h2>);
      }
    }
    else {
      outputContacts = st_arraySearchFilter.map((contact) => (<Contact key={contact.id} data={contact} />));
    }

    return (
      <div data-testid="app" className="app">
        <TopBar />

        <Filters
          liveFilter={this.liveFilter}
          toggleRanker={this.toggleRanker}
          rank={st_searchRank}
        />

        <Contacts>
          {outputContacts}
        </Contacts>

      </div>
    )
  }
}

export default App;
