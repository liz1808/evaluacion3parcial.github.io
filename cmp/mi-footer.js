class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Lizbeth Angelica Martinez Ceja.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
