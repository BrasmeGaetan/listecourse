import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [listeCourses, setListeCourses] = useState(["Pain", "Fromage", "Fruits"]);
  const [nouvelElement, setNouvelElement] = useState("");

  const ajouterElementALaListe = () => {
    if (nouvelElement.trim() !== "") {
      setListeCourses([...listeCourses, nouvelElement]);
      setNouvelElement("");
    }
  };

  const supprimerElement = (index) => {
    setListeCourses(listeCourses.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>*** Ma liste de courses ***</Text>
      
      {listeCourses.map((element, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text>{index + 1} - {element}</Text>
          <TouchableOpacity onPress={() => supprimerElement(index)}>
            <Text style={styles.deleteButton}>Supprimer</Text>
          </TouchableOpacity>
        </View>
      ))}
      
      <TextInput 
        style={styles.input} 
        value={nouvelElement} 
        onChangeText={setNouvelElement} 
        placeholder="Ajouter un élément"
      />
      <Button title="Ajouter" onPress={ajouterElementALaListe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold'
  }
});

export default App;
