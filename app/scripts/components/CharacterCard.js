import React from 'react';

import Thumbnail from 'components/shared/Thumbnail';

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
            <Thumbnail
              thumbnail={ character.thumbnail }
              className="img-block"
              alt={ character.name } />
          </div>
          <figcaption className="pdgt- pdgb-- text-center text-uppercase text-ellpisis">{ character.name }</figcaption>
        </figure>
      </a>
    );
  }

}
