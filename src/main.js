import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import * as RPG from '../src/RPG.js';

$(document).ready(function () {

  const initialStats = { hunger: 10, sun: 10, health: 10, maxHealth: 10, attack: 5, defense: 5, leafCount: 1 };
  const playerPlant = RPG.storeState(initialStats);
  const combatPlayerPlant = playerPlant(RPG.addCombatHandler);

  $('#player-health').text(playerPlant().health);
  $('#player-leaf').text(playerPlant().leafCount);
  $('#player-hunger').text(playerPlant().hunger);
  $('#player-sun').text(playerPlant().sun);

  $('#find').click(function (event) {
    event.preventDefault();

    const aphidStats = { health: 5, attack: 2, defense: 2 };
    const enemy = RPG.storeState(aphidStats);
    const combatEnemy = enemy(RPG.addCombatHandler);


    $('#enemy-space').toggle();
    $('#find').hide();
    $('#water').hide();
    $('#move').hide();

    $('#enemy-health').text(combatEnemy.health);
    $('#enemy-attack').text(enemy().attack);
    $('#enemy-defense').text(enemy().defense);

    $('#fight').click(function() {
      const damageToEnemy = enemy().handleCombat(playerPlant().attack);
      const damagedEnemy = enemy(RPG.changeState("health")(- damageToEnemy));
      $('#enemy-health').text(enemy().health);
      $('#enemy-attack').text(damagedEnemy.attack);
      $('#enemy-defense').text(enemy().defense);
      $('#player-damage-amount').text(damageToEnemy);

      const damageToPlayer = playerPlant().handleCombat(enemy().attack);
      if (damageToPlayer >= 0) {
        const damagedPlayer = playerPlant(RPG.changeState("health")(- damageToPlayer));
        $('#player-health').text(damagedPlayer.health);
        $('#enemy-damage-amount').text(damageToPlayer);
      }

      if (enemy().health <=0) {
        $('#enemy-space').toggle();
        $('#find').show();
        $('#water').show();
        $('#move').show();
        $('#victory').show();

        const levelUp
      }
    });
  });
  
});