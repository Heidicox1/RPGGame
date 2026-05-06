export class Character {
  constructor(name, characterClass) {
    this.name = name;
    this.class = characterClass;
    this.level = 1;
    this.xp = 0;
    this.nextLevelXp = 100;
    
    // Base stats vary by class
    const classStats = {
      warrior: { hp: 100, mana: 20, attack: 15, defense: 12, intelligence: 5 },
      mage: { hp: 60, mana: 80, attack: 8, defense: 6, intelligence: 18 },
      rogue: { hp: 70, mana: 30, attack: 18, defense: 8, intelligence: 10 },
      paladin: { hp: 90, mana: 40, attack: 12, defense: 15, intelligence: 12 },
    };
    
    const stats = classStats[characterClass] || classStats.warrior;
    this.maxHp = stats.hp;
    this.hp = stats.hp;
    this.maxMana = stats.mana;
    this.mana = stats.mana;
    this.attack = stats.attack;
    this.defense = stats.defense;
    this.intelligence = stats.intelligence;
    
    this.isDefending = false;
    this.inventory = [];
    this.gold = 0;
    this.location = 'village';
  }
  
  levelUp() {
    this.level += 1;
    this.nextLevelXp = Math.floor(this.nextLevelXp * 1.5);
    
    // Stat increases on level up
    this.maxHp += 10;
    this.hp = this.maxHp;
    this.maxMana += 5;
    this.mana = this.maxMana;
    this.attack += 2;
    this.defense += 1;
    this.intelligence += 1;
  }
  
  takeDamage(amount) {
    const actualDamage = this.isDefending ? Math.floor(amount * 0.5) : amount;
    this.hp = Math.max(0, this.hp - actualDamage);
    return actualDamage;
  }
  
  heal(amount) {
    this.hp = Math.min(this.maxHp, this.hp + amount);
  }
  
  restoreMana(amount) {
    this.mana = Math.min(this.maxMana, this.mana + amount);
  }
  
  getStats() {
    return {
      name: this.name,
      class: this.class,
      level: this.level,
      xp: this.xp,
      nextLevelXp: this.nextLevelXp,
      hp: this.hp,
      maxHp: this.maxHp,
      mana: this.mana,
      maxMana: this.maxMana,
      attack: this.attack,
      defense: this.defense,
      intelligence: this.intelligence,
    };
  }
}
