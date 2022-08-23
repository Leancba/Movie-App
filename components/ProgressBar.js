import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const CircularProgress1 = ({ vote_average }) => {
  return (
    <CircularProgress
    
      value= {vote_average}
      maxValue={10}
      radius= {19}
      textColor= {'#fcff08'}
      activeStrokeColor= {'#f8f698'}
      inActiveStrokeColor= {'black'}
      inActiveStrokeOpacity= {0.3}
      inActiveStrokeWidth= {6.5}
      activeStrokeWidth= {6.5}
      fill= {''}
      
      
      
      
    />
  );
};

export default CircularProgress1
;

 // <View
    //   style={{
    //     width: 100,
    //     height: 10,
    //     backgroundColor: 'tomato',
    //     borderRadius: 5,
    //     marginRight: 10,
    //   }}>
    //   <View
    //     style={{
    //       position: 'absolute',
    //       width: Math.abs(10 * vote_average),
    //       height: 10,
    //       backgroundColor: 'lightgreen',
    //       borderRadius: 5,
    //     }}></View>
    // </View>
