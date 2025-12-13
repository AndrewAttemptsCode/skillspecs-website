import styled from "styled-components";
import Videos from "./Videos";

const AppWrapper = styled.main`
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Applet = styled.div`
  border: 2px solid red;
  border-radius: 8px;
  width: min(90%, 1448px);
  height: 90%;
  aspect-ratio: 16 / 9;
  padding: 0.5rem;
  overflow: hidden;
`;

const AppLayout = () => {
  return (
    <AppWrapper>
      <Applet>
        <Videos />
      </Applet>
    </AppWrapper>
  );
};

export default AppLayout;