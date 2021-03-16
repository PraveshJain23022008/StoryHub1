import React from 'react';
import {StyleSheet, Text, View, Header, TextInput} from 'react-native';

export default class WriteStoryScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
        <View style={styles.profileContainer}>
         
          <Text style={styles.title}>Story Hub</Text>
          
       
        </View>
        
        <View style={styles.buttonContainer}>
              <TextInput
              style={styles.loginBox}
              placeholder="STORY TITLE- ex- GrandMaa's Bag of Books!!!!"
              placeholderTextColor = "#33FFB3"
              keyboardType =''
              onChangeText={(text)=>{
                this.setState({
                  StoryTitle: text
                })
              }}
            />
           
    
            <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="Name Of the Author. Ex- Robin Hood"
              placeholderTextColor = "#33FFB3"
              onChangeText={(text)=>{
                this.setState({
                  Title: text
                })
              }}
            />
            <TextInput
            style = {styles.loginBox}
            secureTextEntry = {true}
            multiline={multiline || true}
            placeholder="Write Your Story. Ex- Robin Hood"
            placeholderTextColor = "#33FFB3"
            onChangeText={(text)=>{
              this.setState({
                Title: text
            
            })
        }
    }
    />
    </View>   
    </View>

         );}
}