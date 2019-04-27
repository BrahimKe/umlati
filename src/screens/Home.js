import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { theme } from '../constants';
import { Block, Badge, Card } from '../components';
import Icon from 'react-native-vector-icons';
import { LinearGradient } from 'expo';

export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: <Text style={{fontSize: 20, fontWeight: '400', marginLeft: 10}}>Home</Text>,
    headerLeft: (
      <TouchableOpacity
        style={{marginLeft: 20}}
      >
        <View >
          <Image
            resizeMode="contain"
            source={require('../assets/icons/menu.png')}
            style={{ width: 20, height: 24 }}
          />
          <View
            style={{
              width: 8, height: 8,
              backgroundColor: 'red',
              borderRadius: 4,
              position: 'absolute', top: 0, left: 12
            }}
          >
          </View>
        </View>
      </TouchableOpacity>
    )
  }


  renderScore() {
    return(
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.scoreContainer}
      >
        <View style={styles.points}>
          <Image/>
          <View style={styles.text}>
            <Text style={styles.dollar}>$</Text> 
            <Text style={styles.score}> 15</Text> 
            <Text style={styles.secScore}>.25</Text>
          </View>
        </View>
        <View style={styles.points}>
          <Image/>
          <View style={styles.text}>
            <Text style={styles.score}>200</Text> 
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderPrize() {
    return( 
      <LinearGradient
        style={styles.prizeContainer}
        end={{ x: 1, y: 0 }}
        colors={["#FF988A", theme.colors.accent]}
      >
        <View style={styles.prizeIconContainer}>
          <Icon.FontAwesome name="trophy" color="white" size={26} />
        </View>
        <View style={styles.prizeTextContainer}>
          <Text style={{color: 'white', fontWeight: '500', fontSize: 18}}>Wohoooa!</Text>
          <Text style={{color: 'white', fontWeight: '300', fontSize: 12}}>Congratulations! you've just gained a public transport coupon</Text>
        </View>
      </LinearGradient>
    )
  }

  renderOffersList() {
    return(
      <View>
        <Text style={{fontWeight: '500', fontSize: 18}}>Other offers</Text>
        <TouchableOpacity
          style={styles.offerContainer}
        >
          <View style={styles.offerImageContainer}>

          </View>
          <View style={styles.offerTextContainer}>
            <Text>600 points for 15% discount</Text>
            <Text>Get a discount in Amazon by winning 600 points ..</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.offerContainer}
        >
          <View style={styles.offerImageContainer}>

          </View>
          <View style={styles.offerTextContainer}>
            <Text>600 points for 15% discount</Text>
            <Text>Get a discount in Amazon by winning 600 points ..</Text>
          </View>
        </TouchableOpacity>
      </View>
      
    )
  }

  renderAppBarBttom() {
    return(
      <View style={styles.appBarBottom}>
        <Image source={require('../assets/appBar.png')}/>
        <TouchableOpacity
          style={styles.FAB}
        >
          <Image style={{width: 24, height: 24}} source={require('../assets/QRCode.png')}/>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.renderScore()}
          {this.renderPrize()}
          {this.renderOffersList()}
        </ScrollView>
        {this.renderAppBarBttom()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {

    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 200,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  points: {
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  text: {
    flexDirection: 'row'
  },
  dollar: {
    fontSize: 36,
    fontWeight: '100',
  },
  score: {
    fontSize: 36,
    fontWeight: '500',
  }, 
  secScore: {
    fontSize: 18,
    fontWeight: '100',
    marginTop: 10,
  },
  prizeContainer: {
    marginVertical: 20,
    width: '90%',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  prizeIconContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prizeTextContainer: {
    flex: 8
  },
  appBarBottom: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FAB: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: '#606060',
    position: 'absolute',
    bottom: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerContainer: {
    marginVertical: 20,
    width: '90%',
    height: 100,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  offerImageContainer: {
    flex: 2,
  },
  offerTextContainer: {
    flex: 8,
  }
});
