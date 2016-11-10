import React from 'react';

export default class Thumbnail extends React.Component {

  static propTypes = {
    thumbnail: React.PropTypes.object.isRequired,
    format: React.PropTypes.oneOf([
      'standard_fantastic',
      'portrait_small'
    ])
  };

  static defaultProps = {
    format: 'standard_fantastic'
  };

  render() {
    const { thumbnail, format, ...props } = this.props;

    return (
      <img src={ thumbnail.path + '/'
        + format + '.'
        + thumbnail.extension }
        { ...props } />
    );
  }

}
