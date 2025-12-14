import styled from "styled-components";
import Videos from "./Videos";

const App = styled.main`
  height: 100vh;
  height: 100dvh;
  position: relative;
`;

const BgImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  /* background: url();
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  /* filter: blur(4px); */
  background: linear-gradient(#5e5e5e, #000000);
  z-index: -1;
`;

const AppLayout = () => {
  return (
    <App>
      <BgImage />
      <Videos />
    </App>
  );
};

export default AppLayout;