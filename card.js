'use strict';

const e = React.createElement;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
  }

  render() {
    if (this.state.flipped) {
      return 'Card' + this.props.cardID + ' is flipped';
    }

    return e(
      'button',
      { onClick: () => this.setState({ flipped: true })},
      'Flip'
    );
  }
}

document.querySelectorAll('.card')
  .forEach(domContainer => {
    const cardID = parseInt(domContainer.dataset.cardid, 10);
    ReactDOM.render(
      e(Card, { cardID: cardID }),
      domContainer
    );
  });
