import { Dispatch, SetStateAction } from "react";

export function useInputChange<T>(
  state: T,
  setState: Dispatch<SetStateAction<T>>
) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
}
