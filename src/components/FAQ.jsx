import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";
export default function FAQ() {

  return (
    <Section>
      <div className="title">
        <h2>GAME DESIGN</h2>
      </div>
      <div className="text">
        <h3>
          Aridide Production is a leading game development company that has delivered 500+ games and applications for clients hailing from different industries. Our team consists of more than 300 designers and developers, from different disciplines in game development such as game design, programming, art, animation, testing, and project management.


        </h3>
     </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  .title {
    h2 {
      color: #a8190f;
      font-family: 'Press Start 2P', cursive;
         font-size: smaller;
         margin-bottom: 1rem;

      letter-spacing: 0.3rem;
    }
  }
  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    svg {
      font-size: 2rem !important;
    }
  }
`;
