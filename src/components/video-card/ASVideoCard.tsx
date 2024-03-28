import React, { useState, useRef } from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';

import DaakuVideo from '../../assets/Daaku.mp4';
import ASForwardButton from '../forward-button/ASForwardButton';
import ASBackwardButton from '../backward-button/ASBackwardButton';
import ASBottomView from '../bottom-view/ASBottomView';
import ASPlayPause from '../play-pause/ASPlayPause';
import ASMute from '../mute/ASMute';
import ASFullScreen from '../full-screen/ASFullScreen';

import { styles } from './asVideoCard-style';


const ASVideoCard = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<any>(null); 
  const [muted, setMuted] = useState<boolean>(false);
  const [fullscreen,setFullscreen] = useState<boolean>(false);
  const videoRef = useRef<Video>(null);

  const handlePress = () => {
    setClicked(!clicked);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={handlePress}>
        <Video
          style={(!fullscreen)?styles.backgroundVideo:styles.backgroundVideo2}
          source={DaakuVideo}
          paused={paused}
          ref={videoRef}
          onProgress={(x) => {
            setProgress(x);
          }}
          muted={muted}
        />

        {clicked && (
          <TouchableOpacity style={(!fullscreen)?styles.onPause:styles.onPause2} onPress={handlePress}>
            <View style={styles.buttonsContainer}>
              <ASBackwardButton progress={progress} ref={videoRef} />
              <ASPlayPause paused={paused} setPaused={setPaused} />
              <ASForwardButton progress={progress} ref={videoRef} />
            </View>
            <ASFullScreen fullscreen={fullscreen} setFullscreen={setFullscreen} />
            <ASBottomView progress={progress} ref={videoRef} />
            
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      {/* yhaaaa */}

      <View style={{flex:1}} >
      <ASMute muted={muted} setMuted={setMuted} />
      <Text style={{flex:1}} >Hiii</Text>
      </View>
    </View>
  );
};

export default ASVideoCard;
