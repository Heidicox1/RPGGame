export class Combat {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }
  
  calculateDamage(attacker, defender) {
    // Base damage from attack stat + random variance
    const baseDamage = attacker.attack + Math.floor(Math.random() * 10);
    
    // Reduce damage by defender's defense stat
    const defenseMitigation = Math.max(1, defender.defense);
    const finalDamage = Math.max(1, baseDamage - Math.floor(defenseMitigation * 0.5));
    
    // Critical hit chance (10%)
    if (Math.random() < 0.1) {
      return Math.floor(finalDamage * 1.5);
    }
    
    return finalDamage;
  }
  
  getHitChance(attacker, defender) {
    // Base hit chance adjusted by attack/defense ratio
    const baseChance = 0.8;
    const adjustment = (attacker.attack - defender.defense) * 0.02;
    return Math.max(0.3, Math.min(0.95, baseChance + adjustment));
  }
  
  determineWinner() {
    if (this.player.hp > 0 && this.enemy.hp <= 0) return 'player';
    if (this.enemy.hp > 0 && this.player.hp <= 0) return 'enemy';
    if (this.player.hp <= 0 && this.enemy.hp <= 0) return 'draw';
    return null;
  }
}
