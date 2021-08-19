import React, { Component } from 'react';

class Nav extends Component {
  state = {
    auth: true,
    productsInCart: 0,
  };

  logIn() {
    this.setState({ auth: !this.state.auth });
  }

  logOut() {
    this.setState({ auth: !this.state.auth });
  }

  render() {
    let cart;
    switch (this.state.productsInCart) {
      case 0:
        cart = <li>You don't have any items</li>;
        break;
      case 1:
        cart = <li>You have 1 item</li>;
        break;
      case 2:
        cart = <li>You have 2 items</li>;
        break;
      case 3:
        cart = <li>You have 3 items</li>;
        break;
      case 4:
        cart = <li>You have 4 items</li>;
        break;
      default:
        cart = <li>You have many items</li>;
    }

    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>

          {/* {When choosing to render one element of two possible } */}
          {this.state.auth ? (
            <>
              <li>My Account</li>
              {/* {When choosing to render one of many elements (using switch / else ... if)} */}
              {cart}
            </>
          ) : (
            <li onClick={() => this.logIn()}>Login</li>
          )}

          {/* {When choosing to render element or not } */}
          {this.state.auth && <li onClick={() => this.logOut()}>Logout</li>}
        </ul>
      </nav>
    );
  }
}

export default Nav;
