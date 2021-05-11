import React , { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    FlatList,
    Platform,
    StyleSheet,
} from 'react-native'

const style = StyleSheet.create({
    item: {
        fontSize: 32,
        margin: 10,
        ...Platform.select({
            ios: {
                color: 'blue'
            },
            android: {
                color: 'red'
            }
        })
    }
})

const App : () => Node = () => {
    console.log(Platform.OS)
    const [text, setText] = useState('')
    const [selectId, setSelectId] = useState(null)
    return (
        <View style={{backgroundColor: 'yellow'}}>
            <Text style={{backgroundColor: 'pink'}}>你好</Text>
            <TextInput 
                style={{ borderWidth: 1, height: 40 }}
                placeholder="input here"
                onChangeText={text => { setText(text) }}
                defaultValue={text}
                />
            <Text>
                { text.split(' ').map(word => word && '🍕').join('') }
            </Text>
            <FlatList 
                data={[
                    {text: '11'},
                    {text: '22'},
                    {text: '33'},
                    {text: '44'},
                ]}
                renderItem={
                    ({item, index}) => 
                        <Text 
                            style={{...style.item, backgroundColor: selectId === index ? "#6e3b6e" : "#f9c2ff"}}
                            onPress={() => { setSelectId(index) }}
                        >
                            {item.text}
                        </Text>
                }
                keyExtractor={(item, index) => index}
                />
        </View>
    )
}

export default App