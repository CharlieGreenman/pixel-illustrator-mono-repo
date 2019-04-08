export class PixelGridElement extends HTMLElement {
  public static observedAttributes = ['title'];

  attributeChangedCallback() {
    this.innerHTML = `<h1>This is the grid element title ${this.title}!</h1>`;
  }
}

customElements.define('pixel-grid', PixelGridElement);
