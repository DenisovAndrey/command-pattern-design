import {isValidCommandString} from "./validators";

describe('isValidCommandString', () => {
  it('returns true for valid command strings', () => {
    const validCommands = ['L', 'R', 'A', 'LR', 'ARL', 'AAAR', 'RRR'];
    validCommands.forEach(command => {
      expect(isValidCommandString(command)).toBe(true);
    });
  });

  it('returns false for invalid command strings', () => {
    const invalidCommands = ['X', 'RAAAX', 'LRAA&', '123'];
    invalidCommands.forEach(command => {
      expect(isValidCommandString(command)).toBe(false);
    });
  });

  it('returns true for an empty string', () => {
    expect(isValidCommandString('')).toBe(true);
  });
});
