// In this simple problem the world includes both the environment and the robot
// but in most problems the environment and world would be separate
class World {
  constructor(numFloors) {
    this.location = 0;
    this.floors = [];
    for (let i = 0; i < numFloors; i++) {
      this.floors.push({ dirty: false });
    }
  }

  markFloorDirty(floorNumber) {
    this.floors[floorNumber].dirty = true;
  }

  simulate(action) {
    switch (action) {
      case "SUCK":
        this.floors[this.location].dirty = false;
        break;
      case "TWO":
        this.location = 2;
        break;
      case "ONE":
        this.location = 1;
        break;
      case "ZERO":
        this.location = 0;
        break;
      case "THREE":
        this.location = 3;
        break;
    }

    return action;
  }
}

const moves = ["ONE", "TWO", "ZERO", "THREE"];
// Rules are defined in code
function reflexVacuumAgent(world) {
  if (world.floors[world.location].dirty) {
    if (world.location == 0) {
      moves.push("ZERO");
    } else if (world.location == 1) {
      moves.push("ONE");
    } else if (world.location == 2) {
      moves.push("TWO");
    } else if (world.location == 3) {
      moves.push("THREE");
    }
    console.log(moves);
    if (moves.length > 100) {
      moves = ["ONE", "TWO", "ZERO", "THREE"];
    }
    return "SUCK";
  } else {
    return moves[Math.floor(Math.random() * moves.length)];
  }
}
