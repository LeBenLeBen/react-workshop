import React from 'react';
import Loader from 'components/Loader';
import CharacterCard from 'components/CharacterCard';
import { objToParams } from 'helpers/urls';

export default class Characters extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      characters: []
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    // const endpoint = 'https://gateway.marvel.com:443/v1/public/characters',
    const endpoint = 'app/data/characters.json',
          params = objToParams({
            modifiedSince: '2016-04-01',
            apikey: ''
          });

    fetch(endpoint + params)
      .then(response => response.json())
      .then(json => {
        this.setState({
          loaded: true,
          characters: json.data.results
        });
      })
      .catch(error => {
        console.warn('Characters request failed', error);
      });
  }

  render() {
    return (
      <div className="grid">
        { this.state.loaded ? (
          this.state.characters.map((character, i) => {
            return (
              <div className="grid__item w-1/2 sm-w-1/3 md-w-1/4" key={ i }>
                <CharacterCard character={ character } />
              </div>
            );
          })
        ) : (
          <Loader />
        ) }
      </div>
    );
  }

}
