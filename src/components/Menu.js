import { View, Text, StyleSheet } from "react-native";

export default function Menu(){
    return(
        <View style={styles.container}>
            <View style={styles.line1}></View>
            <View style={styles.line2}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
        cursor: 'pointer'
    },

    line1:{
        borderTopWidth: 4,
        borderColor: 'black',
        width: 27,
        borderRadius: 30,
        marginBottom: 5
    },

    line2:{
        borderTopWidth: 4,
        borderColor: 'black',
        width: 19,
        borderRadius: 30
    }
})