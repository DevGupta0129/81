import *as React from "react"
import {Text,TouchableOpacity,StyleSheet} from "react-native"

export default class Feed extends React.Component{
    render(){
        return(
            <View style={style.view}>
                 <Text style={style.Text}>
                Feed 
                </Text>
                </View>
        )

        
    }

}

const style= StyleSheet.create({
    View: {backgroundColor:"lightred",flex:1},
    Text:{fontSize:20,alignSelf:"Center",marginTop:10}
})