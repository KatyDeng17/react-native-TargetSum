import React from 'react'; 
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class RandomNumber extends React.Component{
  static propTypes = {
    number: PropTypes.number.isRequired,
  };
  handlePress = ()=>{
    console.log(this.props.number);
  }
  render(){
    return(
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={styles.randomNum} >{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  randomNum:{
    fontSize: 35,
    width: 100,
    backgroundColor: '#aaa', 
    marginHorizontal: 15,
    marginVertical: 25,
    textAlign:'center',
  
  }
});