import MyIcon from '../../../../commons/MyIcon'
import { Text, TouchableOpacity, View } from 'react-native'

interface IProps {
  label: any
  onPress: any
  icon: any
  activeItemColor: any
  color: any
}

const ProjectItem: React.FC<IProps> = ({
  label,
  onPress,
  activeItemColor,
  color,
  icon,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center"
      onPress={onPress}
      style={{ backgroundColor: activeItemColor }}
    >
      <View className='rounded-2xl bg-pink-500 mx-2 my-1.5 p-1.5' style={{ backgroundColor: color }}>
        <MyIcon name={icon} size={26} color="white" />
      </View>
      <Text className='text-base text-gray-400 px-2'>{label}</Text>
    </TouchableOpacity>
  )
}

export default ProjectItem
