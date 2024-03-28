import { View, Text } from 'react-native';
import React, { forwardRef } from 'react';
import Slider from '@react-native-community/slider';

import { styles } from './asBottomView-style';

const ASBottomView = forwardRef(({ progress }, ref) => { 
    const format = seconds => {
        let mins = parseInt(seconds / 60)
          .toString()
          .padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.timer}>{format(progress.currentTime)}</Text>

            <Slider
                style={{ width: '80%', height: 40 }}
                minimumValue={0}
                maximumValue={progress.seekableDuration}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(x) => { ref.current.seek(x) }}
            />

            <Text style={styles.timer}>{format(progress.seekableDuration)}</Text>
        </View>
    );
});

export default ASBottomView;
