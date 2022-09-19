import { View, StyleSheet, Text} from "react-native";
import HeaderSP from "../components/HeaderSP";
import TitleSP from "../components/TitleSP";
import InfoSP from "../components/InfoSP";

export default function SecondPage(navigation){
    return(
        <View style={styles.container}>
            <HeaderSP
                textMain = "Bandung,"
                textSub = "Indonesia"
            />
            <TitleSP
                text="Next 7 days"
            />
            <InfoSP
                source = "circle"
                colorImage = "yellow"
                dayMain = "Monday, "
                daySub = "3 oct"
                tempMain = "32 / "
                tempSub = "31º"
            />
             <InfoSP
                source = "cloud"
                colorImage = "white"
                dayMain = "Monday, "
                daySub = "3 oct"
                tempMain = "22 / "
                tempSub = "21º"
            />
             <InfoSP
                source = "cloud"
                colorImage = "white"
                dayMain = "Monday, "
                daySub = "3 oct"
                tempMain = "20 / "
                tempSub = "19º"
            />
             <InfoSP
                source = "circle"
                colorImage = "yellow"
                dayMain = "Monday, "
                daySub = "3 oct"
                tempMain = "30 / "
                tempSub = "29º"
            />
             <InfoSP
                source = "cloud"
                colorImage = "white"
                dayMain = "Monday, "
                daySub = "3 oct"
                tempMain = "27 / "
                tempSub = "28º"
            />
             <InfoSP
                source = "circle"
                colorImage = "yellow"
                dayMain = "Monday, "
                daySub = "3 oct"
                tempMain = "29 / "
                tempSub = "28º"
            />
    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4A73FC',
        height: '100%'
    }
})