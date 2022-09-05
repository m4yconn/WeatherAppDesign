import {View, StyleSheet, Text} from 'react-native';


export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.cardMain}>

            </View>
            <View style={styles.cardFotter}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '50%',
        backgroundColor: '#4A73FC',
        marginHorizontal: 20,
        borderRadius: 15
    },
    cardMain:{
        height: '70%',
        borderBottomWidth: 1,    
        borderBottomColor: 'white'    
    },
    cardFotter:{
        height: '30%',
    }
})