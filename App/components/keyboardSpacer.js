import React, { useState, useEffect } from "react"
import { Keyboard, View, Dimensions, Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
  },
})

export const KeyboardSpacer = ({ style, onToggle = () => null }) => {
    const [keyboardSpace, setKeyboardSpace] = useState(0);
  
    useEffect(() => {
      const updateKeyboardSpace = event => {
        if (!event.endCoordinates) {
          return;
        }
  
        const screenHeight = Dimensions.get('window').height;
        const newKeyboardSpace = screenHeight - event.endCoordinates.screenY + 20;
        setKeyboardSpace(newKeyboardSpace);
        onToggle(true, newKeyboardSpace);
      };
  
      const showListener = Keyboard.addListener('keyboardDidShow', updateKeyboardSpace);
  
      const resetKeyboardSpace = () => {
        setKeyboardSpace(0);
        onToggle(false, 0);
      };
  
      const hideListener = Keyboard.addListener('keyboardDidHide', resetKeyboardSpace);
  
      return () => {
        showListener.remove();
        hideListener.remove();
      };
    }, []);
  
    return <View style={[styles.container, { height: keyboardSpace }, style]} />;
  };