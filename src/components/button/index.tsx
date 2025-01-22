import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image 
} from 'react-native'


interface Props {
    image: any;
    name: string;
    onPress: () => void;
}

export default function Button({ image, name, onPress}: Props) {
  return (
    <TouchableOpacity style={s.container} onPress={onPress}>
        <Image source={image} style={s.logo}/>

        <Text style={s.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export const s = StyleSheet.create({
    container: {
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
         gap: 12,
         backgroundColor: '#f4f4f4',
         borderRadius: 12,
         padding: 10,
         paddingHorizontal: 40

    },
    logo: {
        width: 45,
        height: 45,

    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})