import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [listeCourses, setListeCourses] = useState(["Pain", "Fromage", "Fruits"]);
  const [nouvelElement, setNouvelElement] = useState("");

  const ajouterElementALaListe = () => {
    if (nouvelElement.trim() !== "") {
      setListeCourses([...listeCourses, nouvelElement]);
      setNouvelElement("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>*** Ma liste de courses ***</Text>
      {
        listeCourses.map((element, index) => {
          return (
            <Text key={index}> {index + 1} - {element} </Text>
          );
        })
      }
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
  }
});

export default App;
