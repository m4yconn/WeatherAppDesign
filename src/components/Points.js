import { View, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export default function Points(){
    return(
        <View style={styles.container}>
            <Ionicons name="ellipsis-horizontal" size={30} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginRight: 18,
        marginTop: 13,
        cursor: 'pointer'
    }
})