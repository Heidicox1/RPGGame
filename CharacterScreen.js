import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CharacterScreen = ({ character, onBack }) => {
  const levelProgress = (character.xp / character.nextLevelXp) * 100;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{character.name}</Text>
        <Text style={styles.subtitle}>{character.class.toUpperCase()}</Text>
      </View>

      {/* Level Info */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Level Progress</Text>
        <View style={styles.levelRow}>
          <Text style={styles.levelText}>Level</Text>
          <Text style={styles.levelValue}>{character.level}</Text>
        </View>
        <View style={styles.xpBar}>
          <View style={[styles.xpFill, { width: `${levelProgress}%` }]} />
        </View>
        <Text style={styles.xpText}>
          {character.xp} / {character.nextLevelXp} XP
        </Text>
      </View>

      {/* Health & Mana */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Vitals</Text>
        
        <View style={styles.vitalRow}>
          <Text style={styles.vitalLabel}>Health</Text>
          <View style={styles.vitalBar}>
            <View 
              style={[
                styles.vitalFill,
                { width: `${(character.hp / character.maxHp) * 100}%`, backgroundColor: '#ef4444' }
              ]}
            />
          </View>
          <Text style={styles.vitalValue}>{character.hp}/{character.maxHp}</Text>
        </View>

        <View style={styles.vitalRow}>
          <Text style={styles.vitalLabel}>Mana</Text>
          <View style={styles.vitalBar}>
            <View 
              style={[
                styles.vitalFill,
                { width: `${(character.mana / character.maxMana) * 100}%`, backgroundColor: '#3b82f6' }
              ]}
            />
          </View>
          <Text style={styles.vitalValue}>{character.mana}/{character.maxMana}</Text>
        </View>
      </View>

      {/* Combat Stats */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Combat Stats</Text>
        
        <View style={styles.statGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statBoxLabel}>Attack</Text>
            <Text style={styles.statBoxValue}>{character.attack}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statBoxLabel}>Defense</Text>
            <Text style={styles.statBoxValue}>{character.defense}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statBoxLabel}>Intelligence</Text>
            <Text style={styles.statBoxValue}>{character.intelligence}</Text>
          </View>
        </View>
      </View>

      {/* Abilities */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Abilities</Text>
        
        <View style={styles.abilityItem}>
          <Text style={styles.abilityName}>⚔️ Basic Attack</Text>
          <Text style={styles.abilityDesc}>Deal {character.attack} damage to an enemy</Text>
        </View>

        <View style={styles.abilityItem}>
          <Text style={styles.abilityName}>✨ Spell Cast</Text>
          <Text style={styles.abilityDesc}>Deal {Math.floor(character.intelligence * 1.5)} spell damage (costs 15 mana)</Text>
        </View>

        <View style={styles.abilityItem}>
          <Text style={styles.abilityName}>🛡️ Defend</Text>
          <Text style={styles.abilityDesc}>Reduce all incoming damage by 50%</Text>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backButtonText}>← Back to Game</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />
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
    alignItems: 'center',
    marginBottom: 24,
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
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 12,
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  levelText: {
    fontSize: 14,
    color: '#94a3b8',
  },
  levelValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4ade80',
  },
  xpBar: {
    height: 8,
    backgroundColor: '#475569',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  xpFill: {
    height: '100%',
    backgroundColor: '#8b5cf6',
    borderRadius: 4,
  },
  xpText: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
  },
  vitalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  vitalLabel: {
    fontSize: 13,
    color: '#94a3b8',
    width: 60,
  },
  vitalBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#475569',
    borderRadius: 4,
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  vitalFill: {
    height: '100%',
    borderRadius: 4,
  },
  vitalValue: {
    fontSize: 12,
    color: '#cbd5e1',
    width: 60,
    textAlign: 'right',
  },
  statGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    flex: 1,
    backgroundColor: '#0f172a',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#334155',
  },
  statBoxLabel: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 4,
  },
  statBoxValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4ade80',
  },
  abilityItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  abilityName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 4,
  },
  abilityDesc: {
    fontSize: 12,
    color: '#94a3b8',
    lineHeight: 16,
  },
  backButton: {
    backgroundColor: '#334155',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#475569',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#cbd5e1',
  },
});

export default CharacterScreen;
