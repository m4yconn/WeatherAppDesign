import { View, StyleSheet, Text} from "react-native";

export default function SecondPage(navigation){
    return(
        <View style={styles.container}>
            <Text>SECOND PAGE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})