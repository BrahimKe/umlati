import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';

import { theme } from '../constants';
import { Block, Badge, Card } from '../components';
import Icon from 'react-native-vector-icons';
import { LinearGradient } from 'expo';
import {NavigationEvents} from 'react-navigation';

import { scanned } from './Camera';

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
    ),
    headerRight: (
      <TouchableOpacity 
        style={{
          marginRight: 20,
        }}
      >
        <Image source={require('../assets/profile.png')}/>
      </TouchableOpacity>
    )
  }

  constructor(props){
    super(props);
    this.state = {
      pts: 100,
    }
  }

  updateScore() {
    if(scanned)
      for(i=0; i<40; i++) {
        setTimeout(() => {
          this.setState(previousState => (
            { pts: previousState.pts +1 }
          ))
        }, 1000) 
      }
    
  }

  renderScore() {
    return(
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.scoreContainer}
      >
        <View style={styles.points}>
          <View style={styles.scoreIconContainer}>
            <Image source={require('../assets/icons/dollar.png')}/>
          </View>
          <View style={styles.text}>
            <Text style={styles.score}> 15</Text> 
            <Text style={styles.secScore}>.25</Text>
          </View>
          <Text style={styles.dollar}>Coins</Text> 
        </View>
        <View style={styles.points}>
          <View style={styles.scoreIconContainer}>
            <Image source={require('../assets/icons/goldenCup.png')}/>
          </View>
          <View style={styles.text}>
            <Text style={styles.score}>{this.state.pts}</Text> 
          </View>
          <Text style={styles.dollar}>Pts</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderPrize() {
    return( 
      <LinearGradient
        style={styles.prizeContainer}
        end={{ x: 1, y: 0 }}
        colors={["#8bc34a", "#388e3c"]}
      >
        <View style={styles.prizeIconContainer}>
          <Image source={require('../assets/cup.png')} style={{height: 30, width: 30}}/>
        </View>
        <View style={styles.prizeTextContainer}>
          <Text style={{color: 'white', fontWeight: '500', fontSize: 18}}>Wohoooa!</Text>
          <Text style={{color: 'white', fontWeight: '300', fontSize: 12}}>Congratulations! you've just earned a MyCoin</Text>
        </View>
      </LinearGradient>
    )
  }

  renderOffersList() {
    return(
      <View>
        <Text style={{fontWeight: '500', fontSize: 18}}>Offers availables</Text>
        <TouchableOpacity
          style={styles.offerContainer}
        >
          <View style={styles.offerImageContainer}>
            <Image source={require('../assets/offer01.jpg')} style={{height: 50, width: 50}}/>
          </View>
          <View style={styles.offerTextContainer}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Souq</Text>
            <Text>Redeem 200 coins and get a 50 AED worth giftcard from Souq.com!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.offerContainer}
        >
          <View style={styles.offerImageContainer}>
            <Image source={require('../assets/offer02.jpg')} style={{height: 50, width: 50}}/>
          </View>
          <View style={styles.offerTextContainer}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Namshi</Text>
            <Text>Redeem 175 coins and get a one-time 10% discount on Namshi!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.offerContainer}
        >
          <View style={styles.offerImageContainer}>
            <Image source={require('../assets/offer03.jpg')} style={{height: 50, width: 50}}/>
          </View>
          <View style={styles.offerTextContainer}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Starbucks</Text>
            <Text>Redeem 50 coins and get your second drink for free from Starbucks!</Text>
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
          onPress={() => this.props.navigation.navigate('Camera')}
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
        <NavigationEvents onDidFocus={() => this.updateScore()} />
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
    paddingTop: 30,
    paddingBottom: 80,
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
  scoreIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80
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
    fontSize: 18,
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
    backgroundColor: '#8bc34a',
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerContainer: {
    marginVertical: 10,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerTextContainer: {
    flex: 8,
  }
});
