import React from 'react';
import styled, { keyframes } from "styled-components";

const SpinnerLayout = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`
const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerItem = styled.div`
    animation: ${rotate360} 1s linear infinite;
    width: 5rem;
    height: 5rem;
    display: inline-block;
    position: relative;
    border: 3px solid rgb(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    margin-bottom: 10rem;
`;

const Spinner = () => {
  return (
    <SpinnerLayout>
      <SpinnerItem />
    </SpinnerLayout>
  );
};

export default Spinner;