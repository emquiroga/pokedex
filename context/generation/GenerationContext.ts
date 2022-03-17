import { createContext } from "react";

import { GenerationStateProps } from "./interfaces";
type GenerationContextProps = {
  generationState: GenerationStateProps;
  setGeneration: (generationState: GenerationStateProps) => void;
};

export const GenerationContext = createContext<GenerationContextProps>(
  {} as GenerationContextProps
);
