import { Cross } from "lucide-react";
import styled from "styled-components";
import { useApp } from "../contexts/AppContext";

const Button = styled.button`
  position: absolute;
  right: 2rem;
  top: 2rem;
  aspect-ratio: 1 / 1;
  border-radius: 4rem;
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg);
  }

  svg {
    transform: rotate(45deg);
    color: inherit;
    fill: #FFFFFF;
  }

  &:focus-visible {
    box-shadow: 0 0 4px 4px rgb(4, 170, 109);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const ExitSceneButton = () => {
  const { updateScene } = useApp();

  return (
    <Button
      title="Back to menu"
      onClick={() => updateScene(null)}
    >
      <Cross />
    </Button>
  );
};

export default ExitSceneButton;