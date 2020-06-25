import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    CardBox: {
        marginLeft:10,
        marginRight:10,
        width:300,
        height:160,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'#FF6D00',
        borderRadius:20,
        alignSelf:'center',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:15,
    },
    CardTopText:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },  
    CardFlag: {
        width:60,
        height:60,
    },
    CardBankText:{
        fontSize:25,
        color:'#FFF',
        fontWeight:'bold'
    },
    limitText:{
        color:'#FFF'
    },
    limitDisponible:{
        color:'#FFF',
        fontSize:17,
        fontWeight:'bold'
    },
});