import { View, Text } from 'react-native';
import React from 'react';
import Config from 'react-native-config';


const App = () => {
  return (
    <View style={{alignItems:'center', flex: 1, justifyContent:'center'}}>
      <Text>{Config.ENV}</Text>
    </View>
  );
};

export default App;
