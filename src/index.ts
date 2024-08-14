type CharacterNames =
  | "Mario"
  | "Luigi"
  | "Peach"
  | "Bowser"
  | "Yoshi"
  | "Donkey Kong";

interface ICharacter {
  name: CharacterNames;
  speed: number;
  maneuverability: number;
  power: number;
}

const characterList = [
  {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
  },
  {
    name: "Bowser",
    speed: 5,
    maneuverability: 2,
    power: 5,
  },
  {
    name: "Luigi",
    speed: 3,
    maneuverability: 4,
    power: 4,
  },
  {
    name: "Peach",
    speed: 3,
    maneuverability: 4,
    power: 2,
  },
  {
    name: "Donkey Kong",
    speed: 2,
    maneuverability: 2,
    power: 5,
  },
  {
    name: "Yoshi",
    speed: 2,
    maneuverability: 4,
    power: 3,
  },
];

interface IPlayer extends ICharacter {
  points: number;
}

type LapType = "straight" | "curve" | "battle" | null;

const player1: IPlayer = {
  name: "Mario",
  speed: 4,
  maneuverability: 3,
  power: 3,
  points: 0,
};
const player2: IPlayer = {
  name: "Bowser",
  speed: 5,
  maneuverability: 2,
  power: 5,
  points: 0,
};

async function rollDice(): Promise<number> {
  const result = (await Math.floor(Math.random() * 6)) + 1;
  return result;
}

async function getRandomBlock(): Promise<LapType> {
  const random = Math.random();
  let result: LapType = null;

  switch (true) {
    case random < 0.33:
      result = "straight";
      break;
    case random < 0.66:
      result = "curve";
      break;
    default:
      result = "battle";
  }

  return result;
}

type Attribute = "speed" | "power" | "maneuverability";

async function logRollResult(
  characterName: CharacterNames,
  diceResult: number,
  attribute: Attribute,
  playerPoints: number
): Promise<void> {
  console.log(
    `${characterName} rolled a dice for ${attribute} ->  dice: ${diceResult} + ${attribute}: ${playerPoints} = ${
      diceResult + playerPoints
    }`
  );
}

async function lapWinner(
  p1: { name: string; points: number },
  p2: { name: string; points: number },
  battle?: boolean
): Promise<void> {
  if (battle) {
    if (p1.points > p2.points) {
      console.log(`${p1.name} won the battle!`);
      player2.points > 0 ? player2.points-- : player2.points;
    }
    if (p1.points < p2.points) {
      console.log(`${p2.name} won the battle!`);
      player1.points > 0 ? player1.points-- : player1.points;
    }
    if (p1.points === p2.points) {
      console.log("DRAW!");
    }
    return;
  }

  if (p1.points > p2.points) {
    console.log(`${p1.name} scored +1!`);
    player1.points++;
  }
  if (p1.points < p2.points) {
    console.log(`${p2.name} scored +1!`);
    player2.points++;
  }
  if (p1.points === p2.points) {
    console.log("DRAW!");
  }
}

async function raceWinner(
  p1: { name: string; points: number },
  p2: { name: string; points: number }
): Promise<void> {
  console.log(`${p1.name}: ${p1.points}`);
  console.log(`${p2.name}: ${p2.points}`);
  if (p1.points > p2.points) {
    console.log(`${p1.name} won the race!`);
    player1.points++;
    return;
  }
  if (p1.points < p2.points) {
    console.log(`${p2.name} won the race!`);
    player2.points++;
    return;
  }
  if (p1.points === p2.points) {
    console.log("The race was a draw!");
  }
}

async function playRaceEngine(p1: IPlayer, p2: IPlayer): Promise<any> {
  for (let lap = 1; lap <= 5; lap++) {
    console.log(`Lap ${lap}`);

    let block = await getRandomBlock();
    console.log(`Lap type -> ${block}!`);

    const diceResultP1 = await rollDice();
    const diceResultP2 = await rollDice();

    let skillTestP1 = 0;
    let skillTestP2 = 0;

    if (block === "straight") {
      skillTestP1 = p1.speed + diceResultP1;
      skillTestP2 = p2.speed + diceResultP2;

      await logRollResult(p1.name, diceResultP1, "speed", p1.speed);
      await logRollResult(p2.name, diceResultP2, "speed", p2.speed);

      await lapWinner(
        { name: p1.name, points: skillTestP1 },
        { name: p2.name, points: skillTestP2 }
      );
    }

    if (block === "curve") {
      skillTestP1 = p1.maneuverability + diceResultP1;
      skillTestP2 = p2.maneuverability + diceResultP2;

      await logRollResult(
        p1.name,
        diceResultP1,
        "maneuverability",
        p1.maneuverability
      );
      await logRollResult(
        p2.name,
        diceResultP2,
        "maneuverability",
        p2.maneuverability
      );

      await lapWinner(
        { name: p1.name, points: skillTestP1 },
        { name: p2.name, points: skillTestP2 }
      );
    }

    if (block === "battle") {
      skillTestP1 = p1.power + diceResultP1;
      skillTestP2 = p2.power + diceResultP2;

      await logRollResult(p1.name, diceResultP1, "power", p1.power);
      await logRollResult(p2.name, diceResultP2, "power", p2.power);

      await lapWinner(
        { name: p1.name, points: skillTestP1 },
        { name: p2.name, points: skillTestP2 },
        true
      );
    }

    console.log("---------------------");
  }
  await raceWinner(
    { name: player1.name, points: player1.points },
    { name: player2.name, points: player2.points }
  );
}

(async function main(): Promise<any> {
  console.log(`${player1.name} vs ${player2.name} \n`);

  await playRaceEngine(player1, player2);
})();
