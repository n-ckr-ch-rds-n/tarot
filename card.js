'use strict';

const e = React.createElement;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      cards: ['chariot.jpg', 'death.jpg', 'devil.jpg', 'emperor.png', 'empress.png', 'fool.jpg', 'hanged_man.jpg', 'heirophant.png', 'hermit.jpg', 'high_priestess.png', 'judgment.jpg', 'justice.jpg', 'lovers.jpg', 'magician.png', 'star.jpg', 'sun.jpg', 'temperance.jpg', 'tower.jpg', 'wheel_of_fortune.jpg', 'world.jpg']
    };
  }

  render() {
    if (this.state.flipped) {
      return e(
        'img', {
          src: `./trumps/${this.state.cards[Math.floor(Math.random() * 21)]}`,
          onClick: () => this.setState({ flipped: true })
        }
      );
    }

    return e(
      'img', {
        src: './images/tarot_back.jpg',
        onClick: () => this.setState({ flipped: true })
      },
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
