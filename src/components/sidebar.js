class SideBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
      this.innerHTML = `
      <div class="sidebar">
      <div class="sidehead">
              <span>CARI BERANG BELANJA</span>
          <hr style="margin: 15px 0; border: 1px solid #57C5B6;">
      </div>
      <div class="sidebody" style="height: 75vh; ">
          <div class="searchbar">
              <input type="text" placeholder="Search..." id="searchBar" name="searchBar">
              <i class="fa-solid fa-magnifying-glass glass"></i>
          </div>

          <nav>
              <ul class="menu-item">
                  <li><a href="#"> Home</a></li>
                  <li><a href="#" class="active">Shop</a></li>
                  <li><a href="#">Cart</a></li>
                  <li><a href="#">About</a></li>
              </ul>
          </nav>
      </div>
      <div class="sidefoot">
          <hr style="margin: 15px 0; border: 1px solid  #57C5B6;">
          <div class="copy">
              Copyrigth - april 2023
          </div>
      </div>
  </div>`;
    }
  }
   
  customElements.define('side-bar', SideBar);