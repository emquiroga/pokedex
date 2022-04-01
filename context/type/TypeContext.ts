import { createContext } from "react";

import { TypesStateProps } from "./interfaces";

type TypesContextProps = {
  typesState: TypesStateProps;
  setTypes: (typesState: TypesStateProps) => void;
};

export const TypesContext = createContext<TypesContextProps>({} as TypesContextProps);
