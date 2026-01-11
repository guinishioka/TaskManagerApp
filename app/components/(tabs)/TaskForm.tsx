import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TaskForm() {
    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});