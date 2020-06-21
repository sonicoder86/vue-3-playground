export class XTimer extends HTMLElement {
  connectedCallback() {
    this.innerText = 'blacksonic';
  }
}

customElements.define('x-username', XTimer);
