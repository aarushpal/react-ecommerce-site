import React, { Component } from "react";
import logo from "../icons8-home.svg";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <a href="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </a>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <a href="/products" className="nav-link">
                products
              </a>
            </li>
          </ul>
          <a href="/cart" className="ms-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              my cart
            </ButtonContainer>
          </a>
        </NavWrapper>
      </>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
