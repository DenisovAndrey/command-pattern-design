import {Movable} from "../../../types/abstractions/Movable";
import {Command} from "../../../types/abstractions/Command";
import {isValidCommandString} from "../../../utils/validators";
import {AdvanceCommand, TurnLeftCommand, TurnRightCommand} from "../commands/MovementCommands";
import {Commands} from "../../../types/types";

export class MoveController {
  private readonly subject: Movable;

  constructor(subject: Movable) {
    this.subject = subject;
  }

  private serializeCommands(commandString: string): Command[]{
    if (!isValidCommandString(commandString)) {
      throw new Error('Invalid command');
    }
    return [...commandString].map((command) => {
      if (command === Commands.left) {
        return new TurnLeftCommand(this.subject);
      } else if (command === Commands.right) {
        return new TurnRightCommand(this.subject);
      } else {
        return new AdvanceCommand(this.subject);
      }
    });
  }

  evaluate(commandString: string): void {
    const commands = this.serializeCommands(commandString);
    for (const command of commands) {
      command.execute();
    }
  }
}
