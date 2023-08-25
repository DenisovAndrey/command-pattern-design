import {Commands} from "../types/types";

export const isValidCommandString = (commandString: string) => {
  const allowedSymbolsInCommand = Object.values(Commands).join('');
  const pattern = new RegExp(`^[${allowedSymbolsInCommand}]*$`);
  return pattern.test(commandString);
}
