import {View, StyleSheet} from "react-native";
import Menu from "./Menu";
import Points from "./Points";

export default function Topo(){
    return(
        <View style={styles.container}>
            <Menu/>
            <Points/>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})