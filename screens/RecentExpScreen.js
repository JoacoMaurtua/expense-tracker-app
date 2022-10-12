import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton';

export default function RecentExpScreen({navigation}) {

  function navigateHandler(){
    console.log('pressed!')
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon='md-add'
            onPress={navigateHandler}
            color="white"
          />
        );
      },
    });

  },[navigation,navigateHandler]);

  return (
    <View>
      <Text>RecentExpScreen</Text>
    </View>
  )
}