import {View, StyleSheet, Text} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CardContent(props){
    return(
        <View style={styles.container}>
            <MaterialCommunityIcons name="cloud" size={76} color="white"
                style={{
                    marginBottom: 5
                }}
            />

            <View>
                <Text style={styles.mainText}>{props.main}</Text>
                <Text style={styles.subText}>{props.sub}</Text>
            </View>


            <Text style={styles.temperature}>{props.temp}º</Text>
        </View>
    );  
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 'auto',
        alignItems: 'center',
    },

    mainText:{
        color: 'white',
        fontFamily: 'courier',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 5
    },

    subText:{
        color: '#A1ADCE',
        fontFamily: 'courier',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    temperature:{
        fontFamily: 'courier',
        textAlign: 'center',
        color: 'white',
        fontSize: 90,
        fontWeight: 'bold',
        marginTop: 25

    }
})