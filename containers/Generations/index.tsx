import { useContext } from "react";

import { GenerationContext } from "../../context/generation/GenerationContext";
import { GenerationProvider } from "../../context/generation/GenerationProvider";

export const GenerationsContainer = () => {
  const { generationState, setGeneration } = useContext(GenerationContext);

  console.log(generationState);

  return (
    <GenerationProvider>
      <h1>Gen Container</h1>
    </GenerationProvider>
  );
};
