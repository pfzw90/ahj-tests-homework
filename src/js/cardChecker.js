import IssuerChecker from './issuerChecker';
import ChecksumChecker from './checksumChecker';
import UImaker from './uiMaker';
import cards from '../json/cards.json';

export default class CardChecker {
  constructor() {
    this.issuerChecker = new IssuerChecker(cards);
    this.uiMaker = new UImaker(cards);
    this.checksumChecker = new ChecksumChecker();
    this.suggested = [];
    this.cards = cards;
  }

  init() {
    this.uiMaker.drawform();
    document.getElementById('input').addEventListener('keyup', () => {
      const input = document.getElementById('input').value;
      this.suggested = this.issuerChecker.check(input);
      this.cards.forEach((card) => {
        const cardEl = document.getElementById(`${card.image}`);
        cardEl.classList.remove('bright');
        if (this.suggested.includes(card)) {
          cardEl.classList.add('bright');
        }
      });
    });

    document.getElementById('validate_button').onclick = () => {
      const input = document.getElementById('input').value;
      const oldCards = document.getElementsByClassName('card');
      if (oldCards.length) {
        Array.from(oldCards).forEach((elem) => {
          elem.remove();
        });
      }
      if (this.suggested.length) {
        this.suggested.forEach((card) => {
          const cardInfo = document.createElement('div');
          cardInfo.className = 'card';
          cardInfo.innerHTML = `Issuer: ${card.issuer} - Checksum test: ${this.checksumChecker.check(input)}`;
          document.getElementById('container').insertAdjacentElement('beforeend', cardInfo);
        });
      }
    };
  }
}
