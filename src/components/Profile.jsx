import React from "react";
import styled from "styled-components";
import image from "../assets/profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
export default function Profile() {
  return (
    <Section>
      <div className="image">
        <img src={image} alt=""  />
      </div>
      <div className="title">
        <h2>Aridide Production</h2>
        <h5>
          <HiOutlineLocationMarker /> France
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>GAMES</h5>
          <h3>2</h3>
        </div>
        <div className="container">
          <h5>In developpement</h5>
          <h3>3</h3>
        </div>
        <div className="container">
          <h5>Since</h5>
          <h3>2014</h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    margin-bottom: 0.5rem;
     margin-top: 0.5rem; 
    h2,
    h5 {
      color: #a8190f;
     font-family: 'Press Start 2P', cursive;
     margin-top: 0.5rem;
     margin-bottom: 0.5rem;

      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
     margin-bottom: 1rem; 
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;
