// Adds, edits, and deletes profiles.
import { readFromStorage, writeToStorage } from "./storage.js";

// the form of the players objects
// {
//   id: "p_"+dat.now(),          // identifiant unique (par ex. avec Date.now())
//   nickname: "user input",           // pseudo
//   avatar: "user choice",               // un avatar choisi dans une liste
//   createdAt: "new date().tolocaldatestring()"         // date de création
// }


  let players = {
    id: "",
    nickname: "", 
    avatar: "", 
    createdAt: "", 
  };
  const players_cards=document.querySelector("#player_cards")
export function addPlayer() {

  const add = document.querySelector("#profil-add");
  add.addEventListener("click", function () {
    players_cards.innerHTML=""
    players_cards.innerHTML=`
    
    <div class="bg-surface border border-empereur rounded-xl p-4">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-full border border-empereur flex items-center justify-center">${players.avatar}</div>
        <div class="flex-1">
          <h3 class="font-semibold">${players.nickname}</h3>
          <p class="text-xs text-secondaire">24 parties jouées</p>
        </div>
        <span class="text-empereur"></span>
      </div>

    `

  });
}
export function editPlayer() {}
export function deletePlayer() {}
