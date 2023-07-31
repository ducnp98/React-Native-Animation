import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Platform } from 'react-native'
import { ScreensArray } from './data'
import CustomDrawer from './CustomDrawer'
import MyIcon from '../../../commons/MyIcon'

const Drawer = createDrawerNavigator()

const DrawerAnimation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { width: 260, backgroundColor: 'transparent' },
        drawerType: 'front',
        swipeEdgeWidth: Platform.OS === 'android' ? 180 : 0,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {ScreensArray.map((item, i) => (
        <Drawer.Screen
          key={i}
          name={item.route}
          component={item.component}
          options={{
            drawerLabel: item.label,
            drawerIcon: ({color}) => <MyIcon name={item.icon} color={color} size={25} />,
          }}
        />
      ))}
    </Drawer.Navigator>
  )
}

export default DrawerAnimation

