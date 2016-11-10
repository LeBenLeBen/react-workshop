import React from 'react';
import Loader from 'components/Loader';
import Thumbnail from 'components/shared/Thumbnail';
import CommentsList from 'components/CommentsList';
import { objToParams } from 'helpers/urls';

export default class Character extends React.Component {

  static propTypes = {
    params: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      character: {}
    };
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  fetchCharacter() {
    const endpoint = 'https://gateway.marvel.com:443/v1/public/characters/',
          params = objToParams({
            apikey: '0511c0622980c1c5c2127b541309398b'
          });

    fetch(endpoint + this.props.params.id + params)
      .then(response => response.json())
      .then(json => {
        this.setState({
          loaded: true,
          character: json.data.results[0]
        });
      })
      .catch(error => {
        console.warn('Character request failed', error);
      });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="character">
          <div className="grid">
            <div className="grid__item w-1/2">
              <Thumbnail
                thumbnail={ this.state.character.thumbnail }
                format="detail"
                className="img-responsive" />
            </div>
            <div className="grid__item w-1/2">
              <h2 className="mrgt0">{ this.state.character.name }</h2>
              { this.state.character.description && (
                <p>{ this.state.character.description }</p>
              ) }
            </div>
          </div>
          <CommentsList characterId={ this.state.character.id } />
        </div>
      );
    } else {
      return (
        <Loader />
      );
    }
  }

}
