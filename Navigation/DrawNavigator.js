import *as React from "react"
import {createDrawerNavigator} from "@react-naviagtion/drawer"
import BottomTabNaviagator from "./BottomTabNavigator"
import Profile from "../Screens/Profile"

const Drawer=  createDrawerNavigator()
export default class DrawNaviagator extends React.Component{
    render(){
        return(
<Drawer.Navigator>
    <Drawer.Screen name="Home" component={BottomTabNaviagator}/>
    <Drawer.Screen name="Profile" component={Profile}/>
</Drawer.Navigator>
        )
    }
}