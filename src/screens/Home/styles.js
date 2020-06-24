import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    BoxContainerHome:{
        flex:1,
        backgroundColor:'#fff',
    },

    BoxHeader:{
        backgroundColor:'#FF5400',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },

    BoxMenu:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:30,
        paddingRight:30,
        justifyContent:'space-between'
    },
    BoxHistory: {
        backgroundColor:'#FFF',
        width:'100%',
        height:'100%',
        borderTopRightRadius:35,
        borderTopLeftRadius:35,
    },
    BoxBottom:{
        backgroundColor:'#FF5400',
        height:'70%',
    },
    avaliableBalance:{
        width:'70%',
        alignItems:'flex-start'
    },
    balanceText: {
        fontWeight:'bold',
        color:'#FFF',
        fontSize:35,
        
    },
    balanceSubtitle:{
        color:'#fff',
        fontWeight:'bold'
    },
    profileOptions:{
        width:'30%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    ProfileImage:{
        width:55,
        height:55,
        borderWidth:2,
        borderColor:'#FFF',
        borderRadius:15,
    },
    scrollAlignment:{
        flexDirection:'row',
        width:'100%',
        height:90,
        paddingLeft:30,
        paddingRight:30,        
        justifyContent:'space-around',
        marginTop:10,
    },

    iconsHomeHeader:{
        backgroundColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:50,
        borderRadius:15,
        alignSelf:'center'
    },
    boxButtonHeader:{
        alignItems:'center'
    },  

});