import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
      
        <h1>
          Welcome to <span>ARIDIDE PRODUCTION</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #a8190f;
        font-family: 'Press Start 2P', cursive;
           font-size: smaller;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #330000;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #a8190f;
    }
    input {
      background-color: transparent;
      border: none;
      color: #a8190f;
      font-family: 'Press Start 2P', cursive;
         font-size: smaller;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #a8190f;
        font-family: 'Press Start 2P', cursive;
           font-size: smaller;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
