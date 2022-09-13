import { ScrollView, StyleSheet, Text} from "react-native";
import FotterCard from "./FotterCard";

export default function FotterMain(){
    return(
        <ScrollView style={styles.container} horizontal={true}>
            <FotterCard
                img = "cloud"
                color = "white"
                colorFont = 'white'
                bgColor = "#4A73FC"
                time = "12:00"
                temp = "Now"
            />
            <FotterCard
                img = "sun"
                colorFont = 'black'
                color = "#4A73FC"
                bgColor = " white"
                time = "14:00"
                temp = "22º"
            />
            <FotterCard
                img = "cloud-sun"
                colorFont = 'black'
                color = "#4A73FC"
                bgColor = " white"
                time = "16:00"
                temp = "26º"
            />
            <FotterCard
                img = "cloud-moon"
                colorFont = 'black'
                color = "#4A73FC"
                bgColor = " white"
                time = "18:00"
                temp = "25º"
            />
            <FotterCard
                img = "cloud-showers-heavy"
                colorFont = 'black'
                color = "#4A73FC"
                bgColor = " white"
                time = "20:00"
                temp = "27º"
            />
            <FotterCard
                img = "cloudversify"
                colorFont = 'black'
                color = "#4A73FC"
                bgColor = " white"
                time = "22:00"
                temp = "18º"
            />
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        height: '100%',
        marginTop: 20
    }
})