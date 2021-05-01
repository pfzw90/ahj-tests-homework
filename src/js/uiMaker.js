import dinersClub from '../img/diners-club.png';
import americanExpress from '../img/american-express.png';
import jcb from '../img/jcb.png';
import visa from '../img/visa.png';
import visaElectron from '../img/visa_electron.png';
import maestro from '../img/maestro.png';
import mastercard from '../img/mastercard.png';
import discover from '../img/discover.png';
import instapay from '../img/instapay.png';
import mir from '../img/mir.png';

export default class UImaker {
  constructor(cards) {
    this.cards = cards;
    this.images = {
      'diners-club': dinersClub,
      'american-express': americanExpress,
      jcb,
      visa,
      visa_electron: visaElectron,
      maestro,
      mastercard,
      discover,
      instapay,
      mir,
    };
  }

  drawform() {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    const logos = document.createElement('div');
    logos.id = 'logos';
    container.appendChild(logos);

    this.cards.forEach((card) => {
      if (!document.getElementById(`${card.image}`)) {
        const cardimg = document.createElement('img');
        cardimg.id = card.image;
        const image = this.images[card.image];
        cardimg.src = image;
        cardimg.alt = card.issuer;
        logos.insertAdjacentElement('beforeend', cardimg);
      }
    });

    const inputform = document.createElement('form');
    inputform.id = 'form';
    container.insertAdjacentElement('beforeend', inputform);
    inputform.onsubmit = (ev) => ev.preventDefault();

    const inputfield = document.createElement('input');
    inputfield.id = 'input';
    inputform.insertAdjacentElement('beforeend', inputfield);

    const validateButton = document.createElement('button');
    validateButton.onClick = (ev) => ev.preventDefault();
    validateButton.id = 'validate_button';
    validateButton.innerHTML = 'TEST';
    inputform.insertAdjacentElement('beforeend', validateButton);
  }
}
