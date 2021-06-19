import React, { Component } from 'react';
import { Alert, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';

var myWebView;

export default class App extends Component {


  render() {

    const html = `<html>

    <head></head>
    
    <body>
    
      <h2 id="abc" >JavaScript Alert</h2>
    
      <button onclick="myFunction()">Try it</button>
    
      <script>
    
        function myFunction() {
          window.ReactNativeWebView.postMessage("Data from webview!")
        }

        function changeData() {
          document.getElementById("abc").innerHTML = "New text!";
        }

      </script>
    </body>
    
    </html>`
    return (

      <View style={{ flex: 1 }}>

        <Button
        onPress={()=> this.myWebView.injectJavaScript('changeData();')}
        title='Change Value'></Button>

        <WebView
         ref={c => this.myWebView = c}
          source={{ html }}
          onMessage={event => {
            Alert.alert('RN : ' + event.nativeEvent.data);
          }

          }
        />

      </View >)
  }
}