import {Robot} from './src/modules/entities/Robot'
import {Directions} from "./types/types";
import {MoveController} from "./src/modules/controllers/MoveController";

describe('Robot', () => {
    const initRobot = (coordinateX: number, coordinateY: number, bearing: Directions): { robotController: MoveController, robot: Robot } => {
      const robot = new Robot(coordinateX, coordinateY, bearing)
      const robotController = new MoveController(robot);

      return {robotController, robot};
    }

    it('instructs robot', () => {
      const {robotController, robot} = initRobot(-2, 1, Directions.east)
      robotController.evaluate('RLAALAL')
      expect(robot.coordinates).toEqual([0, 2])
      expect(robot.bearing).toEqual('west')
    })

  it('instructs the first robot', () => {
    const { robotController ,robot} = initRobot(0, 0, Directions.north);
    robotController.evaluate('LAAARALA');

    expect(robot.coordinates).toEqual([-4, 1]);
    expect(robot.bearing).toEqual('west');
  });

  it('instructs the second robot', () => {
    const { robotController ,robot} = initRobot(2, -7, Directions.east);
    robotController.evaluate('RRAAAAALA');

    expect(robot.coordinates).toEqual([-3, -8]);
    expect(robot.bearing).toEqual('south');
  });

  it('instructs the third robot', () => {
    const { robotController ,robot} = initRobot(8, 4, Directions.south);
    robotController.evaluate('LAAARRRALLLL');

    expect(robot.coordinates).toEqual([11, 5]);
    expect(robot.bearing).toEqual('north');
  });

  it('handles incorrect evaluate command', () => {
    const { robotController} = initRobot(8, 4, Directions.south);
    try {
      robotController.evaluate('ENCORRECT')
    } catch (e) {
      expect(e.message).toEqual('Invalid command');
    }
  });
})
