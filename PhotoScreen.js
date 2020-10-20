import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Linking,
    FlatList,
    Button,
    Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

/**
 * Dette view har til formål at agerer som en scanner, hvor man som medlem via kameraet kan få scannet sit ansigt og
 * efterfølgende få et abonnement anbefaldet på baggrund af blandt andet hårvækst.
 */



export default class PhotoScreen extends React.Component {
    cameraRef = React.createRef();

    state = {
        hasCameraPermission: null,
        isClicked:false,
        cameraPosition:Camera.Constants.Type.front,
        lastPhoto:null,
        hasCameraRollPermission: null,
        galleryImages:null,
        showGallery: false
    };

    componentDidMount() {
        this.updateCameraPermission();
        this.updateCameraRollPermission();
    }

    /*Få adgang til kamera*/
    updateCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    /*Få adgang til galleri*/
    updateCameraRollPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({ hasCameraRollPermission: status === 'granted' });
    };

    /*Tag et billde*/
    handleTakePhoto = async () => {
        if (!this.cameraRef.current) {
            return;
        }
        const result = await this.cameraRef.current.takePictureAsync();
        this.setState({ lastPhoto: result.uri });
        this.handleSaveToCameraRoll(this.state.lastPhoto)
    };

    // Gem billedet i galleriet
    handleSaveToCameraRoll = async uri => {
        try {
            await MediaLibrary.createAssetAsync(uri, 'photo');

        } catch (error) {
            console.error(error);
        }
    };

    /*Skift imellem for og bag*/
    handleChangeCamera = () =>{
        if(this.state.isClicked){
            this.setState({cameraPosition:Camera.Constants.Type.front})
            this.setState({isClicked:false})
        }else{
            this.setState({cameraPosition:Camera.Constants.Type.back})
            this.setState({isClicked:true})
        }
    }

    /*Gå til indstillinger og få permission*/
    handleSettingLink = () =>{
        Linking.openSettings()
    }

    // Hent 3 billeder fra galleriet
    handleLoadGalleryImages = async () => {
        try {
            const result =  await MediaLibrary.getAssetsAsync({first:20});
            this.setState({ galleryImages:result.assets });
        }catch (e) {
            console.log(e)
        }
    };

    renderCameraView() {
        const { hasCameraPermission, type } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        }
        if (hasCameraPermission === false) {
            return (
                <View>
                    <Text>Du har ikke adgang til kamera.</Text>
                    <Button onPress={this.handleSettingLink} title='Get permissions to access camera'> </Button>
                </View>
            );
        }
        return (
            <View>
                <Camera
                    style={styles.cameraView}
                    type={this.state.cameraPosition}
                    ref={this.cameraRef}>
                </Camera>
                <Button style={styles.btn} title="Scan dit ansigt" onPress={this.handleTakePhoto} />
                <Button style={styles.btn} title="Switch camera" onPress={this.handleChangeCamera} />
            </View>
        );
    }

    renderGalleryView() {
        // Vi ingenting så længe vi venter på input fra bruger
        const { hasCameraRollPermission, galleryImages } = this.state;
        if (hasCameraRollPermission === null) {
            return <View />;
        }
        // Vis en fejlbesked og en knap til settings hvis brugeren ikke har accepteret adgang
        if (hasCameraRollPermission === false) {
            return (
                <View>
                    <Text>No access to camera roll.</Text>
                    <Button title="Go to settings" onPress={this.handleSettingLink} />
                </View>
            );
        }
    }

    renderLastPhoto() {
        // Her viser vi det senest tagne billede
        const { lastPhoto } = this.state;
        if (!lastPhoto === null) {
            return <View />;
        }
        return (
            <View style={styles.lastPhotoContainer}>
                <Text style={{marginLeft: 160}} > Du skal bruge følgende abonnement:</Text>
            </View>
        );
    }

    /*Main renderr*/
    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.cameraContainer}>{this.renderCameraView()}</View>
                <View style={styles.lastPhotoContainer}>{this.renderLastPhoto()}</View>
                <View style={styles.galleryContainer}>{this.renderGalleryView()}</View>
            </SafeAreaView>);
    }
}

const containerStyle = {
    padding: 5,
    borderRadius: 1,
    margin: 4,
    borderWidth: 1,
    justifyContent: 'center'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff3f6',
    },
    btn:{
        margin:100
    },
    Flatlist_render:{
        width:'100%'
    },
    cameraContainer: {
        // Her pakkes fælles style ud
        ...containerStyle,
        backgroundColor: '#01393d',

    },
    cameraView: {
        marginTop: 100,
        marginLeft: 10,
        marginBottom:15,
        aspectRatio: 1.2,
        width: '100%',
        height: 270
    },
    lastPhotoContainer: {
        backgroundColor: '#fd7e14',
        width: '100%',
        height: 130,
        margin: 0,
        textAlign: 'left'
    },

    thumbnail: {
        width: 110,
        height: 110,
        marginLeft: 140
    },thumbnail2: {
        width: 200,
        height: 200,
        margin: 10,
    },
    FlatList_image:{
        width: 200,
        height: 200,
        margin: 5
    },
});