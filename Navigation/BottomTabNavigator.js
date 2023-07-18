import *as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feed from "../Screens/Feed"
import CreateStory from "../Screens/createStory"
const Tab= createBottomTabNavigator()
export default class BottomTabNaviagator extends React.Component{
    render(){
        return(
       <Tab.Navigator>
           <Tab.Screen name="Feed" component={Feed}/>
           <Tab.Screen name="CreateStory" component={CreateStory}/>
       </Tab.Navigator>     
        )
    }
}