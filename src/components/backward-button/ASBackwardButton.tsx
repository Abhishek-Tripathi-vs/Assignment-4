import React, { forwardRef } from 'react'; 
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './asBackwardButton-style';

const ASBackwardButton = forwardRef((props, ref) => {
  return (
    <View style={styles.mainConatiner}>
      <TouchableOpacity
        onPress={() => {
          if (props.progress) {
            ref.current.seek(parseInt(props.progress.currentTime - 10));
          }
        }}>
        <Image
          style={styles.buttons}
          source={require('../../assets/Icons/Backward.png')}
        />
      </TouchableOpacity>
    </View>
  );
});

export default ASBackwardButton;
