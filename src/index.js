var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var player1 = {
    name: "Mario",
    speed: 4,
    maneuverability: 3,
    power: 3,
    points: 0,
};
var player2 = {
    name: "Bowser",
    speed: 5,
    maneuverability: 2,
    power: 5,
    points: 0,
};
function rollDice() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Math.floor(Math.random() * 6)];
                case 1:
                    result = (_a.sent()) + 1;
                    return [2 /*return*/, result];
            }
        });
    });
}
function getRandomBlock() {
    return __awaiter(this, void 0, void 0, function () {
        var random, result;
        return __generator(this, function (_a) {
            random = Math.random();
            result = null;
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
            return [2 /*return*/, result];
        });
    });
}
function logRollResult(characterName, diceResult, attribute, playerPoints) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("".concat(characterName, " rolled a dice for ").concat(attribute, " ->  dice: ").concat(diceResult, " + ").concat(attribute, ": ").concat(playerPoints, " = ").concat(diceResult + playerPoints));
            return [2 /*return*/];
        });
    });
}
function lapWinner(p1, p2, battle) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(p1, p2);
            if (battle) {
                if (p1.points > p2.points) {
                    console.log("".concat(p2.name, " -1 point!"));
                    player2.points > 0 ? player2.points-- : player2.points;
                }
                if (p1.points < p2.points) {
                    console.log("".concat(p1.name, " -1 point!"));
                    player1.points > 0 ? player1.points-- : player1.points;
                }
                if (p1.points === p2.points) {
                    console.log("DRAW!");
                }
                return [2 /*return*/];
            }
            if (p1.points > p2.points) {
                console.log("".concat(p1.name, " scored +1!"));
                player1.points++;
            }
            if (p1.points < p2.points) {
                console.log("".concat(p2.name, " scored +1!"));
                player2.points++;
            }
            if (p1.points === p2.points) {
                console.log("DRAW!");
            }
            return [2 /*return*/];
        });
    });
}
function raceWinner(p1, p2) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (p1.points > p2.points) {
                console.log("".concat(p1.name, " won the race!"));
                player1.points++;
                return [2 /*return*/];
            }
            if (p1.points < p2.points) {
                console.log("".concat(p2.name, " won the race!"));
                player2.points++;
                return [2 /*return*/];
            }
            if (p1.points === p2.points) {
                console.log("DRAW!");
            }
            return [2 /*return*/];
        });
    });
}
function playRaceEngine(p1, p2) {
    return __awaiter(this, void 0, void 0, function () {
        var lap, block, diceResultP1, diceResultP2, skillTestP1, skillTestP2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lap = 1;
                    _a.label = 1;
                case 1:
                    if (!(lap <= 5)) return [3 /*break*/, 18];
                    console.log("Lap ".concat(lap));
                    return [4 /*yield*/, getRandomBlock()];
                case 2:
                    block = _a.sent();
                    console.log("Lap type -> ".concat(block, "!"));
                    return [4 /*yield*/, rollDice()];
                case 3:
                    diceResultP1 = _a.sent();
                    return [4 /*yield*/, rollDice()];
                case 4:
                    diceResultP2 = _a.sent();
                    skillTestP1 = 0;
                    skillTestP2 = 0;
                    if (!(block === "straight")) return [3 /*break*/, 8];
                    skillTestP1 = p1.speed + diceResultP1;
                    skillTestP2 = p2.speed + diceResultP2;
                    return [4 /*yield*/, logRollResult(p1.name, diceResultP1, "speed", p1.speed)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, logRollResult(p2.name, diceResultP2, "speed", p2.speed)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, lapWinner({ name: p1.name, points: skillTestP1 }, { name: p2.name, points: skillTestP2 })];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    if (!(block === "curve")) return [3 /*break*/, 12];
                    skillTestP1 = p1.maneuverability + diceResultP1;
                    skillTestP2 = p2.maneuverability + diceResultP2;
                    return [4 /*yield*/, logRollResult(p1.name, diceResultP1, "maneuverability", p1.maneuverability)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, logRollResult(p2.name, diceResultP2, "maneuverability", p2.maneuverability)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, lapWinner({ name: p1.name, points: skillTestP1 }, { name: p2.name, points: skillTestP2 })];
                case 11:
                    _a.sent();
                    _a.label = 12;
                case 12:
                    if (!(block === "battle")) return [3 /*break*/, 16];
                    skillTestP1 = p1.power + diceResultP1;
                    skillTestP2 = p2.power + diceResultP2;
                    return [4 /*yield*/, logRollResult(p1.name, diceResultP1, "power", p1.power)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, logRollResult(p2.name, diceResultP2, "power", p2.power)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, lapWinner({ name: p1.name, points: skillTestP1 }, { name: p2.name, points: skillTestP2 }, true)];
                case 15:
                    _a.sent();
                    _a.label = 16;
                case 16:
                    console.log("--------------------- \n");
                    _a.label = 17;
                case 17:
                    lap++;
                    return [3 /*break*/, 1];
                case 18: return [4 /*yield*/, raceWinner({ name: player1.name, points: player1.points }, { name: player2.name, points: player2.points })];
                case 19:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
(function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("".concat(player1.name, " vs ").concat(player2.name, " \n"));
                    return [4 /*yield*/, playRaceEngine(player1, player2)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
