class ImageProduct extends HTMLElement {

    connectedCallback() {
        this.src = this.getAttribute('src') || null;
        this.alt = this.getAttribute('alt') || null;
        this.render();
      }
     
      render() {
        this.innerHTML = `
          <product>
            <img src="${this.src}" alt="${this.alt}">
          </product>
        `;
      }
     
      attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
      }
     
      static get observedAttributes() {
        return ['caption', 'src', 'alt'];
      }

}
 
customElements.define('image-product', ImageProduct);