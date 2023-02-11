import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CategoryButton = (props) => {
    const [selected,setSelected] = useState(false);

    const handleClick = () => {
      setSelected(prev => !prev);
      if ( !selected ){
        props.dispatchSelectedItem({type:'ADD_CATEGORY_ITEM',payload: props.title});
      } else {
        props.dispatchSelectedItem({type:'REMOVE_CATEGORY_ITEM',payload: props.title});
      }
    }

  return (
    <TouchableOpacity 
      onPress={() => handleClick() }  
      className='px-5 py-1 rounded-full  m-2 ml-0' 
      style={[{backgroundColor:`${ selected ? '#00008B' : '#FFF'}`, alignItems: 'center'}, 
      {minWidth:50,shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity:  0.46,
      shadowRadius: 1.51,
      elevation: 3}]}
    >
      <Text  
      className='font-normal text-lg whitespace-nowrap' style={{color:`${ selected ? '#fff' : '#000'}`}}
      >
        {props.title}
      </Text>  
    </TouchableOpacity>
  )
}
export default CategoryButton