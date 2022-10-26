import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';

const IconButton = ({onPress, icon, size, color, style}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
      <Ionicons name={icon} size={size} color={color} style={[styles.icon, style]}/>
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  pressed:{
    opacity: 0.5,
  },

  icon:{
    fontSize: 30,
    marginRight: 30,
  }
})