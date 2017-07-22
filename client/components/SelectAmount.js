import React from 'react'
import { StyleSheet, Text, Button, TextInput, TouchableOpacity, View } from 'react-native';

export default class Amount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      show: false
    };
  }
  showOther = () => {
    if (this.state.show) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {
          this.state.show
            ?
              <View>
                <Text style={styles.greeting}>Specify an amount:</Text>
                <TextInput
                 style={styles.amount}
                 placeholder="$"
                 onChangeText={(text) => this.setState({text})}
               />
               <View style={styles.button}>
                 <TouchableOpacity onPress={()=>navigate('Confirm', {donation: this.state.text})}>
                   <View style={styles.button}>
                     <Text style={styles.buttonText}>Donate now!</Text>
                   </View>
                 </TouchableOpacity>
               </View>
             </View>
            :
            <View>
            <Text style={styles.greeting}>Choose an amount:</Text>
            <View style={styles.donateContainer}>
              <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigate('Confirm', {donation: 5})}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>$5</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigate('Confirm', {donation: 10})}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>$10</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigate('Confirm', {donation: 20})}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>$20</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigate('Confirm', {donation: 50})}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>$50</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigate('Confirm', {donation: 100})}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>$100</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity onPress={this.showOther}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Other</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d8ccb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  greeting:{
    // marginTop: 250,
    fontSize: 30,
    fontFamily: 'Avenir',
    color: '#ffffff',
  },
  amount:{
    fontSize: 30,
    height: 40,
    // margin: 20,
    width: 200,
    color: '#073e87',
    fontFamily: 'Avenir',
    borderWidth: 2,
    borderColor: 'rgb(6, 7, 74)'
  },
  button:{
    margin: 20,
    backgroundColor: '#f4e375',
    borderRadius: 25,
    // width: 100
  },
  donateContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: -250
  }
});