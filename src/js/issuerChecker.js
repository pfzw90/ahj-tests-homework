export default class IssuerChecker {
  constructor(cards) {
    this.cards = cards;
  }

  checkLength(allowedLength) {
    const multipleLength = (typeof allowedLength === 'object');
    if (multipleLength) return allowedLength.includes(this.input.length);
    return (this.input.length === allowedLength);
  }

  check(input) {
    this.input = input;
    const suggested = [];
    this.cards.forEach((card) => {
      const re = new RegExp(card.regex);
      const allowedLength = card.ln;

      if (re.exec(input) && ((this.input.length < 13) || this.checkLength(allowedLength))) {
        suggested.push(card);
      }
    });
    return suggested;
  }
}
