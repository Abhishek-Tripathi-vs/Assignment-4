import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { styles } from './asPlayPause-style';

interface ASPlayPauseProps {
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
  paused: boolean;
}

const ASPlayPause: React.FC<ASPlayPauseProps> = ({ setPaused, paused }) => {
  const handlePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={handlePlayPause}>
        {paused ? (
          <Image
            style={styles.buttons}
            source={require('../../assets/Icons/Play.png')}
          />
        ) : (
          <Image
            style={styles.buttons}
            source={require('../../assets/Icons/Pause.jpeg')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ASPlayPause;
