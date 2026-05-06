# Epic RPG Quest - React Native Game

A fully functional, polished RPG adventure game built with React Native. Battle enemies, level up your character, and explore diverse locations.

## Features

✅ **Character Creation** - Choose from 4 unique classes (Warrior, Mage, Rogue, Paladin)
✅ **Turn-Based Combat** - Strategic battle system with attack, defend, and spell mechanics
✅ **Leveling System** - Gain XP to level up and increase your stats
✅ **Multiple Locations** - Explore Forest, Dungeon, Mountain, Cave, and Ruins
✅ **Enemy Variety** - Fight different enemies with unique stats and difficulty
✅ **Polished UI** - Dark theme with smooth animations and responsive design
✅ **Full Game Loop** - Complete gameplay from character creation to endgame

## Game Mechanics

### Character Classes

**Warrior** ⚔️
- High HP (100), strong defense, balanced offense
- Best for beginners, tanking damage
- Starting stats: ATK 15, DEF 12

**Mage** ✨
- Lower HP (60) but high intelligence (18)
- Powerful spells dealing 1.5x intelligence damage
- Best for ranged magical attacks

**Rogue** 🗡️
- Highest attack (18), good speed
- Lower defense but evasive
- Best for damage output

**Paladin** 🛡️
- Balanced stats with excellent defense (15)
- Good HP (90) and magic abilities
- Best for sustained combat

### Combat System

**Attack** ⚔️
- Deal damage based on your Attack stat
- Reduces enemy HP
- No resource cost

**Defend** 🛡️
- Reduce incoming damage by 50%
- Use when HP is low
- Strategic defensive play

**Spell** ✨
- Deal intelligence × 1.5 damage
- Costs 15 mana per cast
- Regenerate mana by resting

**Flee** 🏃
- Escape from combat and return to exploration

### Progression

- **Experience Points (XP)** - Gain from defeating enemies
- **Level Up** - Reach level thresholds to unlock stat increases
- **Stat Growth** - ATK +2, DEF +1, INT +1 per level
- **Health Scaling** - Max HP increases with level

## Getting Started

### Prerequisites

- Node.js 14+ installed
- npm or yarn package manager
- Expo CLI installed (`npm install -g expo-cli`)
- iOS Simulator (Mac) or Android Emulator / Physical Device

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd RPGGame
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Expo development server:**
   ```bash
   npm start
   ```

4. **Choose your platform:**
   - Press `a` for Android (requires emulator or connected device)
   - Press `i` for iOS (Mac only, requires Xcode)
   - Press `w` for Web (opens in browser)

### Alternative: Using Expo Go App

1. Download the Expo Go app from Apple App Store or Google Play Store
2. Run `npm start` in your project directory
3. Scan the QR code with Expo Go
4. Game launches on your phone instantly

## Project Structure

```
RPGGame/
├── App.js                    # Main game state & logic
├── Character.js              # Character class with leveling
├── Combat.js                 # Combat engine
├── GameEngine.js             # World generation & quests
├── screens/
│   ├── MenuScreen.js         # Character creation
│   ├── GameScreen.js         # Exploration & main gameplay
│   ├── CombatScreen.js       # Turn-based battle UI
│   └── CharacterScreen.js    # Stats & progression view
├── package.json              # Dependencies
└── README.md                 # This file
```

## Gameplay Tips

1. **Early Game** - Start as a Warrior or Paladin for survivability
2. **Combat Strategy** - Use Defend when HP drops below 50%
3. **Mana Management** - Don't spam spells; balance attack and spell usage
4. **Exploration** - Each location has different enemy difficulty
5. **Leveling** - Stronger enemies grant more XP

## Customization Ideas

### Add More Features
- **Inventory System** - Collect and use items
- **Quest System** - Complete objectives for rewards
- **Equipment** - Armor and weapons that boost stats
- **Boss Battles** - Unique difficult encounters
- **Multiplayer** - Local or online PvP combat

### Enhance Visuals
- **Animations** - Smooth combat transitions
- **Particle Effects** - Spell explosions and hits
- **Background Music** - Audio track during exploration
- **Sound Effects** - Combat, level up, and ambient sounds

### Expand Content
- **More Classes** - Add Barbarian, Necromancer, etc.
- **More Locations** - Expand world with new areas
- **Enemy Types** - Add 20+ unique enemy types
- **Story Elements** - NPC dialogue and plot progression

## Debugging

**Common Issues:**

1. **"Module not found" errors**
   - Run `npm install` again
   - Clear cache: `npm cache clean --force`

2. **Expo not starting**
   - Update Expo: `npm install -g expo-cli@latest`
   - Restart your computer

3. **Android emulator issues**
   - Make sure Android SDK is installed
   - Try `expo doctor` to diagnose

4. **iOS simulator issues (Mac)**
   - Ensure Xcode is installed: `xcode-select --install`
   - Reset simulator: `xcrun simctl erase all`

## Keyboard Shortcuts (Development)

- `r` - Reload app
- `m` - Toggle menu
- `d` - Open developer menu
- `i` - Open iOS simulator
- `a` - Open Android emulator
- `w` - Open web version

## Performance Tips

- Game runs at 60 FPS on modern devices
- Optimize for low-end devices by reducing animation complexity
- Use `React.memo()` for screen components to prevent re-renders
- Profile with React DevTools

## Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

This creates installable `.ipa` (iOS) and `.apk`/`.aab` (Android) files.

## Future Roadmap

- [ ] Local save game functionality
- [ ] Achievements & leaderboards
- [ ] Shop system with item purchases
- [ ] Daily quests and events
- [ ] Clan/Guild system
- [ ] Raid dungeons with co-op play
- [ ] Web version with cross-platform saves

## Contributing

To extend this game:

1. Create new enemy types in `GameEngine.js`
2. Add abilities to the `Character` class
3. Expand combat options in `CombatScreen.js`
4. Create new location screens
5. Add persistent data with `AsyncStorage`

## License

Open source - feel free to modify and distribute!

## Support

For issues or questions:
- Check the React Native docs: https://reactnative.dev
- Expo documentation: https://docs.expo.dev
- React Native community Discord

---

**Happy adventuring! May your quests be epic and your victories legendary!** ⚔️✨
