import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const GameScreen = ({ character, location, onExplore, onViewStats, onRest, onReturnMenu }) => {
  const locations = {
    village: { emoji: '🏘️', description: 'You are in the peaceful village' },
    forest: { emoji: '🌲', description: 'You are in the dark forest' },
    dungeon: { emoji: '🏰', description: 'You are in the ancient dungeon' },
    mountain: { emoji: '⛰️', description: 'You are on the mountain peak' },
    cave: { emoji: '🪨', description: 'You are in the crystal cave' },
    ruins: { emoji: '🏛️', description: 'You are in the ancient ruins' },
  };

  const loc = locations[location] || locations.village;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{character.name}'s Adventure</Text>
        <Text style={styles.subtitle}>{character.class.toUpperCase()} - Level {character.level}</Text>
      </View>

      {/* Location */}
      <View style={styles.locationCard}>
        <Text style={styles.locationEmoji}>{loc.emoji}</Text>
        <Text style={styles.locationText}>{loc.description}</Text>
      </View>

      {/* Stats Bar */}
      <View style={styles.statsBar}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>HP:</Text>
          <View style={styles.healthBar}>
            <View 
              style={[
                styles.healthFill,
                { width: `${(character.hp / character.maxHp) * 100}%` }
              ]}
            />
          </View>
          <Text style={styles.statValue}>{character.hp}/{character.maxHp}</Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>MP:</Text>
          <View style={styles.manaBar}>
            <View 
              style={[
                styles.manaFill,
                { width: `${(character.mana / character.maxMana) * 100}%` }
              ]}
            />
          </View>
          <Text style={styles.statValue}>{character.mana}/{character.maxMana}</Text>
        </View>
      </View>

      {/* Character Stats */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statCardLabel}>XP</Text>
          <Text style={styles.statCardValue}>{character.xp}/{character.nextLevelXp}</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statCardLabel}>ATK</Text>
          <Text style={styles.statCardValue}>{character.attack}</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statCardLabel}>DEF</Text>
          <Text style={styles.statCardValue}>{character.defense}</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statCardLabel}>INT</Text>
          <Text style={styles.statCardValue}>{character.intelligence}</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={[styles.button, styles.exploreButton]} onPress={onExplore}>
          <Text style={styles.buttonText}>⚔️ Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.restButton]} onPress={onRest}>
          <Text style={styles.buttonText}>💤 Rest</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.statsButton]} onPress={onViewStats}>
          <Text style={styles.buttonText}>📊 Stats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.menuButton]} onPress={onReturnMenu}>
          <Text style={styles.buttonText}>🏠 Menu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4ade80',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
  locationCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  locationEmoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#cbd5e1',
    fontWeight: '500',
  },
  statsBar: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 12,
    color: '#94a3b8',
    width: 30,
    fontWeight: '600',
  },
  healthBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#475569',
    borderRadius: 4,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  healthFill: {
    height: '100%',
    backgroundColor: '#ef4444',
    borderRadius: 4,
  },
  manaBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#475569',
    borderRadius: 4,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  manaFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  statValue: {
    fontSize: 11,
    color: '#cbd5e1',
    width: 60,
    textAlign: 'right',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#1e293b',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  statCardLabel: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 4,
  },
  statCardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4ade80',
  },
  actionButtons: {
    marginBottom: 20,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 2,
  },
  exploreButton: {
    backgroundColor: '#7c3aed',
    borderColor: '#a855f7',
  },
  restButton: {
    backgroundColor: '#0891b2',
    borderColor: '#06b6d4',
  },
  statsButton: {
    backgroundColor: '#1e40af',
    borderColor: '#3b82f6',
  },
  menuButton: {
    backgroundColor: '#64748b',
    borderColor: '#94a3b8',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default GameScreen;
