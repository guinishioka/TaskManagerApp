import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Tabs} from 'expo-router'

class MyComponent extends Component {
    render() {
        return (
            <Tabs>
                <Tabs.Screen
                    name="TaskForm"
                    options={{
                        title: "TaskForm",
                        headerShown: false
                    }}
                />
                <Tabs.Screen
                    name="TaskItem"
                    options={{
                        title: "TaskItem",
                        headerShown: false
                    }}
                />
                <Tabs.Screen
                    name="TaskList"
                    options={{
                        title: "TaskList",
                        headerShown: false
                    }}
                />
            </Tabs>
        );
    }
}

export default MyComponent;
