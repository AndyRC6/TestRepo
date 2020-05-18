import React, { useRef, useLayoutEffect } from 'react';
import { View, StyleSheet, Text, Animated, Image } from 'react-native';

function Splash(){
    //This creates a new Animated Ref we can use to animate the view on our splash screen.
    let fadeInAnimation = useRef(new Animated.Value(0)).current;

    useLayoutEffect(() => {
        //Once the component is mounted, call the fadeIn function.
        fadeIn();
    }, [])

    const fadeIn = () => {
        //This function will begin the animation effect on our animated view, making it fade in over 3 seconds.
        Animated.timing(fadeInAnimation, {
          toValue: 1,
          useNativeDriver: true,
          duration: 3000
        }).start();
      };

    return (
        <Animated.View style={[styles.container, {opacity: fadeInAnimation}]}>
            <Image 
            resizeMode="contain" 
            source={require('../public/images/logo-5.png')} 
            />
            <Text style={styles.splashText}>Placeholder Logo Provided by Logoipsum.com</Text>
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
        fontSize: 10,
        textAlign:'center',
        color:'grey'
    }
})

export { Splash };