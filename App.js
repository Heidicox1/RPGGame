import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { GameEngine } from './GameEngine';
import { Character } from './Character';
import { Combat } from './Combat';
import GameScreen from './screens/GameScreen';
import CombatScreen from './screens/CombatScreen';
import CharacterScreen from './screens/CharacterScreen';
import MenuScreen from './screens/MenuScreen';

export default function App() {
  const [gameState, setGameState] = useState('menu');
  const [character, setCharacter] = useState(null);
  const [currentEnemy, setCurrentEnemy] = useState(null);
  const [gameLocation, setGameLocation] = useState('village');
  const [combatLog, setCombatLog] = useState([]);
  const [experience, setExperience] = useState(0);

  const createNewCharacter = (name, characterClass) => {
    const newChar = new Character(name, characterClass);
    setCharacter(newChar);
    setGameState('game');
  };

  const handleExplore = () => {
    const locations = ['forest', 'dungeon', 'mountain', 'cave', 'ruins'];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    
    // 70% chance to encounter enemy
    if (Math.random() < 0.7) {
      const enemies = [
        { name: 'Goblin', hp: 20, attack: 5, defense: 1, xp: 50 },
        { name: 'Orc', hp: 35, attack: 8, defense: 2, xp: 100 },
        { name: 'Dark Knight', hp: 50, attack: 12, defense: 5, xp: 200 },
        { name: 'Dragon', hp: 80, attack: 15, defense: 7, xp: 500 },
        { name: 'Skeleton', hp: 25, attack: 6, defense: 1, xp: 75 },
      ];
      
      const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
      setCurrentEnemy(randomEnemy);
      setGameLocation(randomLocation);
      setGameState('combat');
      setCombatLog([`A wild ${randomEnemy.name} appears!`]);
    } else {
      setGameLocation(randomLocation);
      Alert.alert('Exploration', `You explore ${randomLocation} and find nothing of interest.`);
    }
  };

  const handleCombatAction = (action) => {
    if (!character || !currentEnemy) return;

    const combat = new Combat(character, currentEnemy);
    let playerDamage = 0;
    let enemyDamage = 0;
    const newLog = [...combatLog];

    if (action === 'attack') {
      playerDamage = combat.calculateDamage(character, currentEnemy);
      currentEnemy.hp -= playerDamage;
      newLog.push(`You deal ${playerDamage} damage to ${currentEnemy.name}!`);
    } else if (action === 'defend') {
      character.isDefending = true;
      newLog.push('You take a defensive stance!');
    } else if (action === 'spell') {
      if (character.mana >= 15) {
        playerDamage = Math.floor(character.intelligence * 1.5);
        currentEnemy.hp -= playerDamage;
        character.mana -= 15;
        newLog.push(`You cast a spell dealing ${playerDamage} damage!`);
      } else {
        newLog.push('Not enough mana!');
      }
    }

    if (currentEnemy.hp <= 0) {
      const xpGain = currentEnemy.xp;
      character.xp += xpGain;
      setExperience(experience + xpGain);
      newLog.push(`Enemy defeated! Gained ${xpGain} XP!`);
      setCharacter(character);
      
      // Level up check
      if (character.xp >= character.nextLevelXp) {
        character.levelUp();
        newLog.push('LEVEL UP!');
      }

      setTimeout(() => {
        Alert.alert('Victory', `You defeated the ${currentEnemy.name}!\nGained ${xpGain} XP`, [
          { text: 'Continue', onPress: () => setGameState('game') }
        ]);
      }, 500);
      return;
    }

    // Enemy counter-attack
    if (action !== 'defend') {
      enemyDamage = combat.calculateDamage(currentEnemy, character);
      character.hp -= enemyDamage;
      newLog.push(`${currentEnemy.name} deals ${enemyDamage} damage!`);
    }

    if (character.hp <= 0) {
      newLog.push('You have been defeated!');
      setCharacter(character);
      setTimeout(() => {
        Alert.alert('Game Over', 'You were defeated in combat', [
          { text: 'Return to Menu', onPress: () => setGameState('menu') }
        ]);
      }, 500);
      return;
    }

    character.isDefending = false;
    setCharacter(character);
    setCurrentEnemy({ ...currentEnemy });
    setCombatLog(newLog);
  };

  const handleRest = () => {
    if (character) {
      character.hp = character.maxHp;
      character.mana = character.maxMana;
      setCharacter(character);
      Alert.alert('Rest', 'You have fully recovered!');
    }
  };

  const handleReturnToMenu = () => {
    setGameState('menu');
    setCharacter(null);
    setCurrentEnemy(null);
    setCombatLog([]);
    setExperience(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      {gameState === 'menu' && (
        <MenuScreen onCreateCharacter={createNewCharacter} />
      )}
      {gameState === 'game' && character && (
        <GameScreen
          character={character}
          location={gameLocation}
          onExplore={handleExplore}
          onViewStats={() => setGameState('stats')}
          onRest={handleRest}
          onReturnMenu={handleReturnToMenu}
        />
      )}
      {gameState === 'combat' && character && currentEnemy && (
        <CombatScreen
          character={character}
          enemy={currentEnemy}
          combatLog={combatLog}
          onAttack={() => handleCombatAction('attack')}
          onDefend={() => handleCombatAction('defend')}
          onSpell={() => handleCombatAction('spell')}
          onFlee={() => setGameState('game')}
        />
      )}
      {gameState === 'stats' && character && (
        <CharacterScreen
          character={character}
          onBack={() => setGameState('game')}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
  },
});
