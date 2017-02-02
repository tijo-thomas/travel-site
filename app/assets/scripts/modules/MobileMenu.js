import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
  }

  // When a function is used as an event handler the 'this' keyword within that function gets set to the DOM element the event fired from, which is why we use the .bind function to set 'this' back to the object.
  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
  }
}

export default MobileMenu;