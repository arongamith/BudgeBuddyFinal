import { StyleSheet, Text, View, Image} from "react-native";
import React from "react";
import {
 Menu,
 MenuProvider,
 MenuOptions,
 MenuOption,
 MenuTrigger,
} from "react-native-popup-menu";

const SimpleMenu = () => {
 return (
   <MenuProvider>
     <Menu>
       <MenuTrigger>
       <Image 
            source={require('../assets/icons/stockUser.png')}
            resizeMode="contain"
            style={{
            width: 60,
            height: 60,
            left: 190
            }}
        />
       </MenuTrigger>
       <MenuOptions >
         <MenuOption  text="View Profile" />
         <MenuOption  text="Log Out" />
       </MenuOptions>
     </Menu>
   </MenuProvider>
 );
};

export default SimpleMenu;