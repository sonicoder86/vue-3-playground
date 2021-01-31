export class XUsername extends HTMLElement {
  connectedCallback() {
    this.innerText = 'blacksonic';
  }
}

customElements.define('x-username', XUsername);
