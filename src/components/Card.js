import {View, StyleSheet, Text} from 'react-native';
import MiniCard from './MiniCard';
import CardContent from './CardContent';
import MiniCardContent from './MiniCardContent';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.cardMain}>
                <CardContent
                    main = "Heavy Rain"
                    sub = "Sunday, 02 Oct"
                    temp = {24}
                />
            </View>
            <View style={styles.cardFotter}>
                <MiniCard
                    top = {0}
                    right = {1}
                >
                    <MiniCardContent type="WIND" value="19.2Km/j">
                        <Feather name="wind" size={26} color="white" />
                    </MiniCardContent>
                </MiniCard>
                <MiniCard
                    top = {0}
                    right = {0}
                >
                    <MiniCardContent type="FELLS LIKE" value="25°">
                        <Feather name="thermometer" size={26} color="white" />
                    </MiniCardContent>
                </MiniCard>
                <MiniCard
                    top = {1}
                    right = {1}
                >
                    <MiniCardContent type="INDEX UV" value="2">
                        <Feather name="sun" size={26} color="white" />
                    </MiniCardContent>
                </MiniCard>
                <MiniCard
                    top = {1}
                    right = {0}
                >
                    <MiniCardContent type="PRESSURE" value="1014 mbar">
                    <Octicons name="pulse" size={26} color="white" />
                    </MiniCardContent>
                </MiniCard>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '55%',
        backgroundColor: '#4A73FC',
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 15
    },

    cardMain:{
        height: '70%',
        borderBottomWidth: 1,    
        borderBottomColor: 'white',
        alignItems: 'center', 
    },
    cardFotter:{
        height: '30%',
        flexDirection: 'row',
        flexWrap: 'wrap'
        
    }
})