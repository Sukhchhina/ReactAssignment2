import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const plantData = [
  {
    name: "Plant World",
    description: "Offering a wide variety of indoor and outdoor plants.",
    image: require('../assets/plant_world.png')
  },
  {
    name: "Tropical oasis",
    description: "Bringing the tropics to your backyard with exotic plants.",
    image: require('../assets/tropical_oasis.jpg')
  },
  {
    name: "Green thumb nursery",
    description: "Specializing in rare and exotic plants.",
    image: require('../assets/thumb_nursery.webp')
  },
  {
    name: "Blossom garden centre",
    description: "Providing high quality flowers and gardening supplies.",
    image: require('../assets/blossom_garden.jpg')
  },
  
];

const Plantvendorpage = () => {
  return (
    <View style={styles.container}>
      {plantData.map((plant, index) => (
        <View key={index} style={styles.plantCard}>
          <Image source={plant.image} style={styles.image} />
          <Text style={styles.name}>{plant.name}</Text>
          <Text style={styles.description}>{plant.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  plantCard: {
    width: '45%',
    margin: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
  },
});

export default Plantvendorpage;