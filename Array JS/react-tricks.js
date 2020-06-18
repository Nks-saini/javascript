import React,{ useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import OneTimeRegistration from './OneTimeRegistration'
import FrequentRegistration from './FrequentRegistration'


export default function ServicesTab() {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);

    function tab(data) {
        if (data === "tab1") {
            setTab1(true)
            setTab2(false)
        }
        if (data === "tab2") {
            setTab2(true)
            setTab1(false)
        }
    }
    return (
        <View style={styles.MainContainer}>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <TouchableOpacity style={(tab1 ? styles.tabtxt : styles.untabtxt)} onPress={() => tab("tab1")} >
                    <Text style={{ fontFamily: 'Nexa Bold', color: tab1 ? "#FFFFFF" : "#60667F", fontSize: 15, textAlign: "center", }}>Once
                          </Text>
                </TouchableOpacity>
                <TouchableOpacity style={(tab2 ? styles.tabtxt : styles.untabtxt)} onPress={() => tab("tab2")} >
                    <Text style={{ fontFamily: 'Nexa Bold', color: tab2 ? "#FFFFFF" : "#60667F", fontSize: 15, textAlign: "center", }}>Frequently
                          </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 0 }}>
                {tab1 ?
                    <OneTimeRegistration />
                    :
                    null
                }
                {tab2 ?
                    <FrequentRegistration />
                    :
                    null
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        marginTop: -50
    },
    tabtxt: {
        height: 40,
        width: 100,
        borderBottomWidth: 3,
        borderBottomColor: "#00DCCC",
    },
    untabtxt: {
        height: 40,
        width: 100,
    },
})