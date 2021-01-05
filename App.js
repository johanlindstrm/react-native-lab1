import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';

console.log("reloading")
export default function App() {

let textInput = "no value"

const image = require("./assets/emoji.png")

const handleChangeText = (value) => {
  console.log("text changed:" + value)
  textInput = value
}


  return (
    <View style={{width :"100%", height : "100%", }}>

      <View style={styles.HeaderView}></View>

      <Text style={styles.headerText}>
        Hello World! {"\n"}
        <Text style={styles.secondHeaderText}>
          First React Native App {"\n"}
        </Text>
        <Text style={styles.paragraphText}>
          This is a paragraph explaining what this app is all about.
          As you can see there are already many components including text, images and buttons.
        </Text>
      </Text>

      <View style={styles.blockContainer}>
        <Text style={styles.questionText}>
          What would you like to get out of this course?
        </Text>
        <TextInput style={styles.textInputStyle}
                   onChangeText={handleChangeText}
                   multiline 
                   placeholder="Enter Text" 
                   placeholderTextColor="gray">
        </TextInput>
      </View>

      <View style={styles.blockContainer}>
        <Text style={styles.questionText}>
          An emoji describing how you are feeling about this course:
        </Text>
        <Image 
          source={image} 
          style={{width:100, height:100}}
        />

        <Button title="Submit" 
                onPress={() => console.log(textInput)} 
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  HeaderView: 
  {
    backgroundColor: '#24305E',
    width: '100%',
    height: '5%',
  },

  headerText: 
  {
    fontSize: 36,
    fontWeight: "bold",
    color: '#24305E',
    width: '100%',
    height: '20%',
    backgroundColor: '#A8D1E7',
    paddingTop: 20,
    paddingBottom: 20,

  },

  paragraphText: 
  {
    fontSize: 16,
    fontWeight: '300',
    color: '#24305E',
    width: '100%',
  },

  secondHeaderText: 
  {
    fontSize: 26,
    fontWeight: '400',
    color: '#24305E',
    width: '100%',
  },

  questionText: 
  {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
    
  },

  blockContainer:
  {
    width: '100%',
    height: '20%',
    paddingTop: 40,
    paddingBottom: 10
  },

  textInputStyle: 
  {
    width: '100%',
    height: '100%',
    backgroundColor: '#F2F2F2',
  }

});
