import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ConditionModalContextInterface {
  emaValue: string;
  setEmaValue: Dispatch<SetStateAction<string>>;
  smaValue: string;
  setSmaValue: Dispatch<SetStateAction<string>>;
}

const initialContext = {
  emaValue: "",
  setEmaValue: () => {},
  smaValue: "",
  setSmaValue: () => {},
};

export const ConditionModalsContext =
  createContext<ConditionModalContextInterface>(initialContext);

interface ConditionContextProviderProps {
  children: ReactNode;
}

const ConditionContextProvider = ({
  children,
}: ConditionContextProviderProps) => {
  const [emaValue, setEmaValue] = useState("");
  const [smaValue, setSmaValue] = useState("");

  return (
    <ConditionModalsContext.Provider
      value={{ emaValue, setEmaValue, smaValue, setSmaValue }}
    >
      {children}
    </ConditionModalsContext.Provider>
  );
};

export const useConditionContext = () => useContext(ConditionModalsContext);

export default ConditionContextProvider;
