import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.img} style={styles.image} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.oldPrice}>$449</Text>
        </View>

        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.actions}>
          <AntDesign name="hearto" size={30} color="black" />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    margin: 10,
    borderRadius: 50,
  },
  image: {
    width: 230,
    height: 210,
  },
  detailsContainer: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  price: {
    color: 'gray',
    fontSize: 18,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 18,
    marginLeft: 50,
    color: 'gray',
  },
  descriptionTitle: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    marginTop: 10,
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 15,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DetailsScreen;
