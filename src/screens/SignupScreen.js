import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Text } from 'react-native';
import firebase from 'firebase';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.props.navigation.navigate('home');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput
          style={styles.input}
          multiline
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          multiline
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password:text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#C70F66">
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    padding:24,
    backgroundColor:'#fff',
  },
  input:{
    backgroundColor:'#eee',
    height: 48,
    marginBottom:16,
    borderWidth:1,
    borderColor:'#DDD',
    paddingTop:16,
    paddingLeft:16,
  },
  title:{
    fontSize:28,
    alignSelf:'center',
    marginBottom:24,
  },
  button:{
    backgroundColor:'#E31676',
    height:48,
    borderRadius:4,
    justifyContent:'center',
    width:'70%',
    alignItems:'center',
    alignSelf:'center',
  },
  buttonTitle:{
    color:'#fff',
    fontSize:18,
  },
});


export default SignupScreen;
