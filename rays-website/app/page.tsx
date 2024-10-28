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
  color: #d9d9d9;
  font-size: 3.7rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

const Ray = styled.span`
  color: #56c495;
`

export default function Home() {
  return (
    <Hero>
      <Heading>Hello, I&apos;m <Ray>Ray</Ray>.<br/>Welcome to my website!</Heading>
    </Hero>
  );
}