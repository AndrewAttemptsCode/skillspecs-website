import styled from "styled-components";
import Videos from "./Videos";
import { useState } from "react";

const App = styled.main`
  height: 100vh;
  height: 100dvh;
  position: relative;
  background: red;
  /* background: url();
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
`;

const BgScreen = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  /* filter: blur(4px); */
  background: rgba(0, 0, 0, 0.8);
  /* z-index: -1; */
  user-select: none;
`;

const AppLayout = () => {
  const [activeScene, setActiveScene] = useState<string | null>(null);

  return (
    <App>
      {activeScene && <BgScreen />}
      {activeScene === "videos" && <Videos />}
      <button onClick={() => setActiveScene("videos")}>Videos</button>
    </App>
  );
};

export default AppLayout;