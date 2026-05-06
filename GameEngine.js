export class GameEngine {
  constructor() {
    this.locations = {
      village: {
        name: 'Starting Village',
        description: 'A peaceful village with taverns and shops',
        npcs: ['innkeeper', 'blacksmith', 'healer'],
      },
      forest: {
        name: 'Dark Forest',
        description: 'A dense, mysterious forest filled with danger',
        difficulty: 'medium',
        encounters: ['goblin', 'wolf', 'bandit'],
      },
      dungeon: {
        name: 'Ancient Dungeon',
        description: 'A crumbling dungeon with untold treasures',
        difficulty: 'hard',
        encounters: ['skeleton', 'dark knight', 'golem'],
      },
      mountain: {
        name: 'Mountain Peak',
        description: 'A treacherous mountain path',
        difficulty: 'medium',
        encounters: ['giant spider', 'mountain troll', 'wyvern'],
      },
      cave: {
        name: 'Crystal Cave',
        description: 'A glowing cave filled with magical energy',
        difficulty: 'medium',
        encounters: ['crystal elemental', 'cave bat', 'dark mage'],
      },
      ruins: {
        name: 'Ancient Ruins',
        description: 'Remains of an ancient civilization',
        difficulty: 'hard',
        encounters: ['specter', 'curse guardian', 'ancient construct'],
      },
    };

    this.quests = [
      {
        id: 1,
        title: 'The Goblin Menace',
        description: 'Defeat 5 goblins in the forest',
        reward: 200,
        completed: false,
      },
      {
        id: 2,
        title: 'Dragon Slayer',
        description: 'Defeat a dragon in the dungeon',
        reward: 500,
        completed: false,
      },
      {
        id: 3,
        title: 'Collect Crystals',
        description: 'Find 3 crystals in the crystal cave',
        reward: 300,
        completed: false,
      },
    ];
  }

  getLocationInfo(locationName) {
    return this.locations[locationName] || this.locations.village;
  }

  generateEnemy() {
    const enemies = [
      { name: 'Goblin', hp: 20, attack: 5, defense: 1, xp: 50 },
      { name: 'Orc', hp: 35, attack: 8, defense: 2, xp: 100 },
      { name: 'Skeleton', hp: 25, attack: 6, defense: 1, xp: 75 },
      { name: 'Dark Knight', hp: 50, attack: 12, defense: 5, xp: 200 },
      { name: 'Giant Spider', hp: 30, attack: 7, defense: 2, xp: 90 },
      { name: 'Troll', hp: 60, attack: 10, defense: 4, xp: 150 },
      { name: 'Dark Mage', hp: 35, attack: 11, defense: 3, xp: 180 },
      { name: 'Dragon', hp: 80, attack: 15, defense: 7, xp: 500 },
    ];
    
    return enemies[Math.floor(Math.random() * enemies.length)];
  }

  getQuests() {
    return this.quests;
  }

  completeQuest(questId) {
    const quest = this.quests.find(q => q.id === questId);
    if (quest) {
      quest.completed = true;
      return quest.reward;
    }
    return 0;
  }
}
