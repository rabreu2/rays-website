'use client'
import styled from "styled-components";

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-tems: center;
  background: #fff;
`

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`

export default function About() {
  return (
    <Hero>
      <Heading>About</Heading>
    </Hero>
  );
}
