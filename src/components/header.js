class HeaderTop extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `

      <div class="header">
         <p>BELI BARANG ONLINE</p>
      </div>
     `;
    }
  }
   
  customElements.define('header-top', HeaderTop);