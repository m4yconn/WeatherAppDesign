import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Title(props){
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.sub} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
        flexDirection: 'row'
    },

    mainTitle:{
        fontSize: 25,
        fontWeight: 550,
        fontFamily: 'courier'
    },

    subTitle:{
        fontSize: 20,
        color: '#454545',
        fontFamily: 'courier',
        marginTop: 5
    }
})