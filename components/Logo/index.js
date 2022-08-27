import { Image, View, StyleSheet} from 'react-native';
import React from "react"


export default function Logo() {
    return(
    <View styles={styles.logo}>
        <Image
            source={require('../../imgs/login.jpg')}
        />
    </View>);
}
const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});