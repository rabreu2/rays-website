'use client'
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-tems: center;
  background: #000;
`

const Heading = styled.h1`
  color: #fff;
  font-size: 10rem;
  font-weight: 900;
`

export default function Contact() {
  return (
    <Hero>
      <Heading>Contact</Heading>
    </Hero>
  );
}