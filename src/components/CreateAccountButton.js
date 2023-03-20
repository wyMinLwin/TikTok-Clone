import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'


const CreateAccountButton = (props) => {
  const navigaiton = useNavigation()
  return (
    <TouchableOpacity className='w-full p-1 border-2 mt-3 mx-auto flex-row justify-center items-center rounded-sm '
    onPress={() => navigaiton.navigate(props.data.to)}
    style= {{
        borderColor:props.data.color,
    }}
    >
      <FontAwesome  size={23} allowFontScaling  color={props.data.color} name={props.data.icon} /><Text style={{color:props.data.color}} className='font-semibold text-lg mx-2'>Create with {props.data.name}</Text>
    </TouchableOpacity>
  )
}

export default CreateAccountButton