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
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

export default function Contact() {
  return (
    <Hero>
      <Heading>Contact</Heading>
    </Hero>
  );
}