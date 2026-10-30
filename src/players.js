// Adds, edits, and deletes profiles.
import { readFromStorage, writeToStorage } from "./storage.js";

// the form of the players objects
// {
//   id: "p_"+dat.now(),          // identifiant unique (par ex. avec Date.now())
//   nickname: "user input",           // pseudo
//   avatar: "user choice",               // un avatar choisi dans une liste
//   createdAt: "new date().tolocaldatestring()"         // date de création
// }

export const avatars = [
  "dragon",
  "tigre",
  "loup",
  "requin",
  "pingouin",
  "vache",
  "panthere",
  "aigle",
];

export function getPlayer() {
  return readFromStorage("players");
}

function isPseudoValid(nickname) {
  return /^[A-Za-z0-9]{3,15}$/.test(nickname);
}

function isPseudoTacken(nickname) {
  const player = getPlayer();
  for (let i = 0; i < player.length; i++) {
    if (player[i].nickname.toLowerCase() === nickname.toLowerCase()) {
      return true;
    }
  }
  return false;
}


export function addPlayer() {
  const players=getPlayer()
  const newPlayer={
    id:"p_"+ Date.now(),
    nickname:nickname,
    avatar:avatar,
    createdAt:new date().tolocaldatestring()
  }
  players.push(newPlayer)
  writeToStorage("players",players)
}
export function editPlayer() {}
export function deletePlayer() {}
