import React from 'react';

export default class CharacterCard extends React.Component {

  static propTypes = {
    character: React.PropTypes.object.isRequired,
  };

  render() {
    const character = this.props.character;

    return (
      <a href="#" className="character-card box box--tiny box--default mrgb">
        <figure>
          <div className="character-card__img">
            <img
              src={ character.thumbnail.path + '/standard_fantastic.' + character.thumbnail.extension }
              alt={ character.name }
              className="img-block" />
          </div>
          <figcaption className="pdgt- pdgb-- text-center text-uppercase text-ellpisis">{ character.name }</figcaption>
        </figure>
      </a>
    );
  }

}
