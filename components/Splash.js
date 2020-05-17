import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

function Splash(props){
    let fadeInAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // fadeIn();
    }, [])

    const fadeIn = () => {
        Animated.timing(fadeInAnimation, {
          toValue: 1,
          duration: 2000
        }).start();
      };

    return (
        <Animated.View style={[styles.container, {opacity: fadeInAnimation}]}>
            <Text style={styles.splashText}>Your company logo here.</Text>
        </Animated.View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    splashText: {
        fontSize: 40
    }
})

export { Splash };