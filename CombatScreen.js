import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CombatScreen = ({ character, enemy, combatLog, onAttack, onDefend, onSpell, onFlee }) => {
  return (
    <View style={styles.container}>
      {/* Battle Header */}
      <View style={styles.header}>
        <Text style={styles.title}>⚔️ BATTLE ⚔️</Text>
      </View>

      {/* Player vs Enemy */}
      <View style={styles.battleField}>
        <View style={styles.combatant}>
          <Text style={styles.combatantName}>{character.name}</Text>
          <View style={styles.hpBar}>
            <View 
              style={[
                styles.hpFill,
                { width: `${(character.hp / character.maxHp) * 100}%` }
              ]}
            />
          </View>
          <Text style={styles.hpText}>{character.hp}/{character.maxHp}</Text>
        </View>

        <Text style={styles.vs}>VS</Text>

        <View style={styles.combatant}>
          <Text style={styles.combatantName}>{enemy.name}</Text>
          <View style={styles.hpBar}>
            <View 
              style={[
                styles.hpFill,
                { width: `${(enemy.hp / enemy.hp) * 100}%` }
              ]}
            />
          </View>
          <Text style={styles.hpText}>{Math.max(0, enemy.hp)}/{enemy.hp}</Text>
        </View>
      </View>

      {/* Combat Log */}
      <ScrollView style={styles.logContainer}>
        {combatLog.map((log, index) => (
          <Text key={index} style={styles.logText}>{log}</Text>
        ))}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={[styles.actionButton, styles.attackButton]} onPress={onAttack}>
          <Text style={styles.actionText}>⚔️ Attack</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.defendButton]} onPress={onDefend}>
          <Text style={styles.actionText}>🛡️ Defend</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.spellButton]} onPress={onSpell}>
          <Text style={styles.actionText}>✨ Spell ({character.mana})</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.fleeButton]} onPress={onFlee}>
          <Text style={styles.actionText}>🏃 Flee</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f87171',
  },
  battleField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#334155',
  },
  combatant: {
    flex: 1,
    alignItems: 'center',
  },
  combatantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#cbd5e1',
    marginBottom: 8,
  },
  hpBar: {
    width: '90%',
    height: 12,
    backgroundColor: '#475569',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  hpFill: {
    height: '100%',
    backgroundColor: '#22c55e',
    borderRadius: 6,
  },
  hpText: {
    fontSize: 12,
    color: '#94a3b8',
  },
  vs: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f87171',
    marginHorizontal: 12,
  },
  logContainer: {
    flex: 1,
    backgroundColor: '#1e293b',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  logText: {
    fontSize: 13,
    color: '#cbd5e1',
    marginBottom: 6,
    lineHeight: 18,
  },
  actionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 2,
  },
  attackButton: {
    backgroundColor: '#dc2626',
    borderColor: '#ef4444',
  },
  defendButton: {
    backgroundColor: '#0284c7',
    borderColor: '#0ea5e9',
  },
  spellButton: {
    backgroundColor: '#7c3aed',
    borderColor: '#a855f7',
  },
  fleeButton: {
    backgroundColor: '#6b7280',
    borderColor: '#9ca3af',
  },
  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fff',
  },
});

export default CombatScreen;
