import *as React from "react"
import {Text,TouchableOpacity,StyleSheet} from "react-native"

export default class Profile extends React.Component{
    render(){
        return(
            <View style={style.view}>
                 <Text style={style.Text}>
                Profile 
                </Text>
                </View>
        )

        
    }

}

const style= StyleSheet.create({
    View: {backgroundColor:"lightyellow",flex:1},
    Text:{fontSize:20,alignSelf:"Center",marginTop:10}
})