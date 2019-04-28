import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  BarCodeScanner,
  Permissions,
  Constants,
  WebBrowser,
}from 'expo';

export var scanned=0;

export default class Camera extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    
    super(props);

    this.state = {
        hasCameraPermission: null,
    }

}

async componentWillMount() {

    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });


}

async handleBarCodeScanned(data) {

  alert('Nice job recycling! You just won a coin!');
  scanned = 1;
  this.props.navigation.navigate('Home')

}

  render() {
    
    // if (!this.props.visible) {
    //     return false;
    // }
  
    if (this.state.hasCameraPermission === null) {
        return <View />;
    }
    else if (this.state.hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
          <View 
              style={styles.component}
            >
                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <BarCodeScanner 
										style={styles.item1}
										onBarCodeRead={(data) => this.handleBarCodeScanned(data)}
									/>

                			</View>

                		</View>
                	</View>
                  <View style={styles.layout2}>

                    <View style={styles.itemcontainer2}>

                       <View style={styles.itemcontainer2Inner}>

                        <View style={styles.item2}>
                                <Text 
                                  style={styles.item2Text}  
                                >
                                Scan QR Code
                                </Text>
        
                              </View>
                       </View>
                    </View>
                  </View>
                </View>
          </View>           
    );
  }
}

const styles = StyleSheet.create({
  component: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#606060',
    height: '100%',
    paddingLeft: 7.5,
    paddingRight: 7.5,
    paddingTop: 7.5,
    paddingBottom: 7.5,
  },
  layouts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
},

layout1: {
    width: '100%',
    height: 450,
},

itemcontainer1: {
    width: '100%',
    height: '100%',
    paddingTop: 7.5,
    paddingBottom: 7.5,
    paddingLeft: 7.5,
    paddingRight: 7.5,
},

itemcontainer1Inner: {
    width: '100%',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
},

item1: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#606060',
  },
  layout2: {
    width: '100%',
    height: 90,
},

itemcontainer2: {
    width: '100%',
    height: '100%',
    paddingTop: 7.5,
    paddingBottom: 7.5,
    paddingLeft: 7.5,
    paddingRight: 7.5,
},

itemcontainer2Inner: {
    width: '100%',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
},

item2: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 10,
},

item2Text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
},

})
