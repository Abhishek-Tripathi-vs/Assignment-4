import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import {styles} from './asMute-style'

const ASMute = ({muted,setMuted}) => {
    function handleMute(){
        setMuted(!muted);
    }
  return (
    <View style={styles.mainContainer} >
      
      <TouchableOpacity onPress={()=>{handleMute()}} >
        {(!muted)?<Text>Mute</Text>:<Text>Unmute</Text>}
      </TouchableOpacity>

    </View>
  )
}

export default ASMute