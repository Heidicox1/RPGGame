import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

const MenuScreen = ({ onCreateCharacter }) => {
  const [characterName, setCharacterName] = useState('');
  const [selectedClass, setSelectedClass] = useState('warrior');
  const [showForm, setShowForm] = useState(false);

  const classes = [
    {
      id: 'warrior',
      name: 'Warrior',
      emoji: '⚔️',
      description: 'High HP, strong defense. Master of melee combat.',
      stats: 'HP: 100, ATK: 15, DEF: 12',
    },
    {
      id: 'mage',
      name: 'Mage',
      emoji: '✨',
      description: 'Powerful spells, high intelligence. Master of magic.',
      stats: 'HP: 60, ATK: 8, INT: 18',
    },
    {
      id: 'rogue',
      name: 'Rogue',
      emoji: '🗡️',
      description: 'Swift attacks, high damage. Master of stealth.',
      stats: 'HP: 70, ATK: 18, DEF: 8',
    },
    {
      id: 'paladin',
      name: 'Paladin',
      emoji: '🛡️',
      description: 'Balanced offense and defense. Master of protection.',
      stats: 'HP: 90, ATK: 12, DEF: 15',
    },
  ];

  const handleCreateCharacter = () => {
    if (!characterName.trim()) {
      Alert.alert('Invalid Name', 'Please enter a character name');
      return;
    }
    onCreateCharacter(characterName, selectedClass);
  };

  if (!showForm) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitle}>⚔️ EPIC RPG QUEST</Text>
          <Text style={styles.subtitle}>Begin Your Adventure</Text>
        </View>

        <View style={styles.introCard}>
          <Text style={styles.introText}>
            Welcome, brave adventurer! Choose your class and begin an epic journey filled with
            dragons, dungeons, and legendary treasures.
          </Text>
        </View>

        <View style={styles.classesContainer}>
          <Text style={styles.sectionTitle}>Select Your Class</Text>
          {classes.map((cls) => (
            <TouchableOpacity
              key={cls.id}
              style={[
                styles.classCard,
                selectedClass === cls.id && styles.classCardSelected,
              ]}
              onPress={() => setSelectedClass(cls.id)}
            >
              <Text style={styles.classEmoji}>{cls.emoji}</Text>
              <View style={styles.classInfo}>
                <Text style={styles.className}>{cls.name}</Text>
                <Text style={styles.classDescription}>{cls.description}</Text>
                <Text style={styles.classStats}>{cls.stats}</Text>
              </View>
              {selectedClass === cls.id && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={() => setShowForm(true)}
        >
          <Text style={styles.startButtonText}>Next: Name Your Hero →</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => setShowForm(false)} style={styles.backLink}>
        <Text style={styles.backLinkText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Create Your Character</Text>

        <View style={styles.selectedClassDisplay}>
          <Text style={styles.selectedClassEmoji}>
            {classes.find((c) => c.id === selectedClass)?.emoji}
          </Text>
          <Text style={styles.selectedClassName}>
            {classes.find((c) => c.id === selectedClass)?.name}
          </Text>
        </View>

        <Text style={styles.inputLabel}>Character Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your character name..."
          placeholderTextColor="#64748b"
          value={characterName}
          onChangeText={setCharacterName}
          maxLength={20}
        />

        <Text style={styles.characterPreview}>
          "Greetings, {characterName || 'brave warrior'}! Welcome to the realm of adventure."
        </Text>

        <TouchableOpacity
          style={styles.createButton}
          onPress={handleCreateCharacter}
        >
          <Text style={styles.createButtonText}>🎮 Create & Play</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Pro Tips:</Text>
          <Text style={styles.infoText}>
            • Explore different locations to find enemies{'\n'}
            • Defeat enemies to gain experience and level up{'\n'}
            • Manage your HP and Mana in combat{'\n'}
            • Defend when your HP is low{'\n'}
            • Use spells for high damage (costs mana){'\n'}
          </Text>
        </View>
      </View>

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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 12,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4ade80',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  introCard: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#334155',
  },
  introText: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 12,
  },
  classesContainer: {
    marginBottom: 24,
  },
  classCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#334155',
  },
  classCardSelected: {
    borderColor: '#4ade80',
    backgroundColor: '#1e2e3a',
  },
  classEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  classInfo: {
    flex: 1,
  },
  className: {
    fontSize: 15,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 2,
  },
  classDescription: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 4,
  },
  classStats: {
    fontSize: 11,
    color: '#64748b',
  },
  checkmark: {
    fontSize: 20,
    color: '#4ade80',
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#7c3aed',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#a855f7',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  backLink: {
    marginBottom: 16,
  },
  backLinkText: {
    fontSize: 14,
    color: '#94a3b8',
  },
  formContainer: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4ade80',
    marginBottom: 16,
    textAlign: 'center',
  },
  selectedClassDisplay: {
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  selectedClassEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  selectedClassName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#cbd5e1',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 12,
  },
  characterPreview: {
    fontSize: 13,
    color: '#94a3b8',
    fontStyle: 'italic',
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#0f172a',
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#4ade80',
  },
  createButton: {
    backgroundColor: '#22c55e',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4ade80',
  },
  createButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  infoBox: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#cbd5e1',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#94a3b8',
    lineHeight: 18,
  },
});

export default MenuScreen;
