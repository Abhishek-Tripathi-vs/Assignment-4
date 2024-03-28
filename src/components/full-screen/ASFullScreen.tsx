import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Orientation from 'react-native-orientation-locker';

import {styles} from './asFullScreen-style';

const ASFullScreen = ({fullscreen, setFullscreen}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          if (fullscreen) {
            Orientation.lockToPortrait();
          } else {
            Orientation.lockToLandscape();
          }
          setFullscreen(!fullscreen);
        }}>

          {(!fullscreen)?<Image
          style={styles.fullscreen}
          source={require('../../assets/Icons/FullScreen.png')}
        />:<Image
        style={styles.fullscreen}
        source={require('../../assets/Icons/NotFullScreen.png')}
      />}


        
      </TouchableOpacity>
    </View>
  );
};

export default ASFullScreen;
