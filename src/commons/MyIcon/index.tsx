import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import { type IconProps } from 'react-native-vector-icons/Icon'

interface IProps extends IconProps {}

const MyIcon = ({ name, ...rest }: IProps) => {
  return <MaterialCommunityIcons name={name} {...rest} />
}

export default MyIcon
