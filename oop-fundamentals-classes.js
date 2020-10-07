class Character {

  constructor(name) {
    this.name = name;
    // ....
  }

  attack() {
    return 10;
  }
}

class Barbarian extends Character {

  constructor(name) {
    super(name);
    this.life = 50;
  }

  attack() {
    return 30;
  }
}

class Mage extends Character {

  constructor(name) {
    super(name);
    this.life = 10;
    this.mana = 10;
  }

  attack() {
    return 5;
  }

  spell() {
    if(this.mana > 0) {
      this.mana--;
      return 55;
    }
    return 0;
  }
}

// ... Player chooses character type ...
let choice = 0;
// TODO: Captured from DOM, not hardcoded!!!

switch (choice) {
  case 1:
    character = new Barbarian("Conan");
    break;
  case 2:
    character = new Mage("Morgana");
    break;
  default:
    character = new Character("Nobody");
}

let damage = character.attack(); // ??
