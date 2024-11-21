import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const [listeCourses, setListeCourses] = useState(["Pain", "Fromage", "Fruits"]);
  const [nouvelElement, setNouvelElement] = useState("");
  const [indexElementAModifier, setIndexElementAModifier] = useState(null);

  const ajouterElementALaListe = () => {
    if (nouvelElement.trim() !== "") {
      setListeCourses([...listeCourses, nouvelElement]);
      setNouvelElement("");
    }
  };

  const supprimerElement = (index) => {
    setListeCourses(listeCourses.filter((_, i) => i !== index));
  };

  const modifierElement = () => {
    if (nouvelElement.trim() !== "" && indexElementAModifier !== null) {
      const nouvelleListe = [...listeCourses];
      nouvelleListe[indexElementAModifier] = nouvelElement;
      setListeCourses(nouvelleListe);
      setNouvelElement("");
      setIndexElementAModifier(null);
    }
  };

  const selectionnerElementAModifier = (index) => {
    setNouvelElement(listeCourses[index]);
    setIndexElementAModifier(index);
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
          <TouchableOpacity onPress={() => selectionnerElementAModifier(index)}>
            <Text style={styles.editButton}>Modifier</Text>
          </TouchableOpacity>
        </View>
      ))}
      
      <TextInput 
        style={styles.input} 
        value={nouvelElement} 
        onChangeText={setNouvelElement} 
        placeholder={indexElementAModifier !== null ? "Modifier l'élément" : "Ajouter un élément"}
      />
      <Button 
        title={indexElementAModifier !== null ? "Modifier" : "Ajouter"} 
        onPress={indexElementAModifier !== null ? modifierElement : ajouterElementALaListe} 
      />
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
    width: '60%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 10
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold'
  },
  editButton: {
    color: 'blue',
    fontWeight: 'bold'
  }
});

export default App;
