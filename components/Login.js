import React, {} from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { } from 'react-native-elements';

function Login(){

    return (
        <View style={styles.container}>
                <Text style={styles.loginText}>Hello World</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    loginText: {
        textAlign:'center'
    }
})

export { Login };
