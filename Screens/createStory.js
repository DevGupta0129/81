import *as React from "react"
import {Text,TouchableOpacity,StyleSheet} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"


export default class CreateStory extends React.Component{
    render(){
        return(
            <View style={style.view}>
                 <Text style={style.Text}>
                Story 
                </Text>
                </View>
        )

        
    }

}

const style= StyleSheet.create({
    View: {backgroundColor:"lightgreen",flex:1},
    Text:{fontSize:20,alignSelf:"Center",marginTop:10}
})