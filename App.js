import { StyleSheet, Text, View, TextInput, Button, useState } from 'react-native';

export default function App() {
   
    const [pain, SelPain] = useState('');
    const [fromage, SelFromage] = useState('');
    const [fruits, SelFruits] = useState('');
    const [total, setTotal] = useState(null); 

    function sum() {
        
        const totalSum = (parseInt(pain) || 0) + (parseInt(fromage) || 0) + (parseInt(fruits) || 0);
        setTotal(totalSum); 
    }

    const listecourses = ["Pain", "Fromage", "Fruits"];

    return (
        <View style={styles.container}>
            <Text>*** Ma liste de courses ***</Text>
            {
                listecourses.map((element, i) => {
                    return (
                        <Text key={i}> {i + 1} - {element} </Text>
                    );
                })
            }
            
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Entrer le nombre de Pain"
                value={pain}
                onChangeText={SelPain}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Entrer le nombre de Fromage"
                value={fromage}
                onChangeText={SelFromage}
            />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Entrer le nombre de Fruits"
                value={fruits}
                onChangeText={SelFruits}
            />
           
            <Button onPress={sum} title="Valider ma liste de course" color="#841584" />
            
            {total !== null && <Text>Total : {total}</Text>}
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
