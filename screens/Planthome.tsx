import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const Planthome = () => {
  
  const plantCategories = [
    { id: 1, name: 'Succulents', description: 'Low-maintenance plants that store water in their leaves or stems.', image: require('../assets/succulents.jpeg') },
    { id: 2, name: 'Ferns', description: 'Leafy green plants with delicate fronds that thrive in shaded areas.', image: require('../assets/ferns.jpeg') },
    { id: 3, name: 'Cacti', description: 'Spiky desert plants known for their resilience and unique shapes.', image: require('../assets/cacti.jpeg') },
    { id: 4, name: 'Orchids', description: 'Exotic flowering plants prized for their intricate blooms and beauty.', image: require('../assets/orchids.jpeg') },
    { id: 5, name: 'Bonsai', description: 'Artful miniature trees cultivated in shallow containers, representing nature in a small scale.', image: require('../assets/Bonsai.jpeg') },
    { id: 6, name: 'Air Plants', description: 'Plants that grow without soil, absorbing nutrients and water through their leaves.', image: require('../assets/air_plants.jpeg') },
    { id: 7, name: 'Herbs', description: 'Aromatic plants used for culinary, medicinal, and ornamental purposes.', image: require('../assets/herbs.jpeg') },
    { id: 8, name: 'Tropical Plants', description: 'Lush greenery native to tropical regions, adding vibrancy to indoor and outdoor spaces.', image: require('../assets/tropical_plants.jpeg') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {plantCategories.map((category) => (
        <View style={styles.categoryContainer} key={category.id}>
          <Image source={category.image} style={styles.categoryImage} />
          <View style={styles.categoryInfo}>
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryDescription}>{category.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default Planthome;