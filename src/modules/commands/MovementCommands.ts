import {Movable} from "../../../types/abstractions/Movable";
import {Command} from "../../../types/abstractions/Command";

export abstract class MovementCommand implements Command {
  protected subject: Movable;

  constructor(subject: Movable) {
    this.subject = subject;
  }

  abstract execute(): void;
  abstract toString(): string;
}


export class TurnLeftCommand extends MovementCommand{
  execute(): void {
    this.subject.turnLeft()
  }

  toString(): string {
    return 'turnLeft';
  }
}

export class TurnRightCommand extends MovementCommand{
  execute(): void {
    this.subject.turnRight()
  }

  toString(): string {
    return 'turnRight';
  }
}

export class AdvanceCommand extends MovementCommand{
  execute(): void {
    this.subject.advance()
  }

  toString(): string {
    return 'advance';
  }
}
