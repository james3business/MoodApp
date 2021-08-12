import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

function Home() {
    return(
        <View style={{marginTop:50}}>
            <Text>Testing</Text>
            <Icon 
                name='smile-o'
                type='font-awesome'
                color='#f50'
                size='75'        
            />
            <Icon 
                name='heartbeat'
                type='font-awesome'
                color='#f50'        
            />
            <Icon 
                name='heartbeat'
                type='font-awesome'
                color='#f50'        
            />
            <Icon 
                name='heartbeat'
                type='font-awesome'
                color='#f50'        
            />
            
        </View>
    )
}

export default Home;