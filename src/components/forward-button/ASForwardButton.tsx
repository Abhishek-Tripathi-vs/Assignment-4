import React, { forwardRef } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { styles } from './asForwardButton-style';

const ASForwardButton = forwardRef(({ progress }, ref) => {
    const handlePress = () => {
        if (progress && ref && ref.current) {
            ref.current.seek(parseInt(progress.currentTime + 10));
        }
    };

    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={handlePress}>
                <Image
                    style={styles.buttons}
                    source={require('../../assets/Icons/Forward.jpeg')}
                />
            </TouchableOpacity>
        </View>
    );
});

export default ASForwardButton;
