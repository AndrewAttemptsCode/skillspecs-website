import styled, { keyframes } from "styled-components";

const Shimmer = keyframes`
  0% {
    background-position: 200% 100%;
  }
  100% {
    background-position: -200% 100%;
  }
`;

const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #1e1e1e 25%, #2a2a2a 37%,#1e1e1e 63%);
  background-size: 400% 100%;
  background-position: 200% 100%;
  animation: ${Shimmer} 4s linear infinite;
`;

const PlayerSkeleton = () => {
  return <Skeleton />;
};

export default PlayerSkeleton;
