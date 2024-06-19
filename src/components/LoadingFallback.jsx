import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingFallback = () => {
  return (
    <SpinnerContainer>
      <SpinnerWrapper />
    </SpinnerContainer>
  );
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #2c3438;
`;

const SpinnerWrapper = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #4caf50;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export default LoadingFallback;
