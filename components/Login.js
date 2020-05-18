import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Overlay, Input, Icon, Button } from 'react-native-elements';

function Login(){
    //set up states to hold the username and pw text
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const authenticate = () => {
        //normally, this is where we'd send our data off to be authenticated. 
        alert('You will now be authenticated.');
    }

    return (
        <View style={styles.container}>
            <Overlay isVisible={true} overlayStyle={styles.overlay}>
                <>
                <Image 
                style={{alignSelf:'center', padding:0, margin:0}}
                resizeMode="contain" 
                source={require('../public/images/logo-5.png')} 
                />
                <Input
                value={username}
                placeholder='Username'
                keyboardAppearance="dark"
                leftIcon={<Icon name="user" type="font-awesome" color="lightgrey"/>}
                onChangeText={(val) => setUsername(val)}
                />

                <Input
                value={password}
                placeholder='Password'
                keyboardAppearance="dark"
                secureTextEntry
                leftIcon={<Icon name="lock" type="font-awesome" color="lightgrey"/>}
                onChangeText={(val) => setPassword(val)}
                />

                <Button 
                title="Sign In"
                raised
                type="outline"
                onPress={() => authenticate()}
                />
                
                </>
            </Overlay>
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
    },
    overlay: {
        width: Dimensions.get('window').width - 20
    }
})

export { Login };
