import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoeditInput} multiline value="hi" />
        <CircleButton style={styles.editButton}>
          { '\uf00c' }
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
  },
  memoeditInput :{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:32,
    paddingLeft:16,
    paddingRight:16,
    paddingBottom:16,
    fontSize:16,
  },
});


export default MemoEditScreen;
