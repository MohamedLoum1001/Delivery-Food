import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const History = () => {
  return (
    <View style={styles.Section2}>
      <View style={styles.div}>
        {/* <View style={styles.Image}>
          <Image
            source={require('../../../assets/chevron-left.png')}
          />
        </View> */}
        <View>
          <Text style={styles.Para}>History </Text>

        </View>
      </View>
      <Image style={styles.Ima}
        source={require('../../../assets/Vector.png')}

      />
      <Text style={styles.Par}>No history yet </Text>
      <Text style={styles.Pa}>Hit the orange button down
        below to Create an order </Text>

      <TouchableOpacity style={styles.Btn}>
        <Text style={{ color: 'white' }}>Start odering</Text>
      </TouchableOpacity>
    </View>
  );
}

export default History

const styles = StyleSheet.create({
  Section2: {
    flex: 1,
  },
  Image: {
    marginTop: 20,
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: 'flex-start'
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  Para: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '900',
    fontSize: 20
  },
  Ima: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 130,
    marginTop: 50,

  },
  Par: {
    textAlign: 'center',
    marginTop: 30,
    fontWeight: '900',
    fontSize: 20
  },
  Pa: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20
  },
  Btn: {
    display: 'flex',
    backgroundColor: '#fa4a0c',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    marginLeft: 100,
    marginTop: 100,
  }
})