
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    function sum(Pain, Fromage, Fruits) {
        return Pain + Fromage + Fruits;
      }
    const listecourses = ["Pain", "Fromage", "Fruits"];
    return (
        <View style={styles.container}>
            <Text>*** Ma liste de courses ***</Text>
            {
                listecourses.map((element, i) => {
                    return (
                        <Text> {i + 1} - {element} </Text>
                    );
                })
            }
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Entrer votre nombre"
            />
            <Button onPress={sum} title="Valider ma liste de course" color="#841584" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
});
