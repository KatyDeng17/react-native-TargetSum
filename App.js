/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Game from './src/components/game';

export default class App extends React.Component{
  render(){
    return(
      <Game randomNumberCount={6}/>
   

    );
  }
}

