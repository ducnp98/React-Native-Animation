import MyIcon from "../../../../commons/MyIcon"
import { Text, TouchableOpacity, View } from "react-native"

interface ProfileItemProps {
  label: any
  onPress: any
  icon: any
}

const ProfileItem: React.FC<ProfileItemProps> = ({ label, onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center my-2">
      <View className='rounded-2xl bg-pink-200 p-1'>
        <MyIcon name={icon} color="white" size={30}/>
      </View>
      <Text className='text-base text-gray-400 px-2'>{label}</Text>
    </TouchableOpacity>
  )
}

export default ProfileItem
