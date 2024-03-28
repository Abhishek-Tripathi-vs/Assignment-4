import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundVideo: {
    // flex:1,
    height: 200,
    width: '100%',
    borderWidth: 4,
    resizeMode: 'contain',
  },
  backgroundVideo2: {
    height: "100%",
    width: '100%',
    borderWidth: 4,
    resizeMode: 'contain',
  },
  onPause: {
    height: 200,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent:"center",
    alignItems:"center",
  },
  onPause2: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent:"center",
    alignItems:"center",
  },
  buttonsContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
  },
  buttons:{
    height:20,
    width:20,
    marginHorizontal:50,
  }
});
