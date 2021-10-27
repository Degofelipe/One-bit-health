import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        width:"80%",
        backgroundColor:"#FEF5ED",
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:30,
    },
    form:{
        width:"100%",
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,

    },
    buttonCalculator:{
        borderRadius:50,
        width:"90%",
        alignItems:"center",
        backgroundColor:"#99A799",
        paddingTop:5,
        paddingBottom:5,
        marginLeft:12,
        marginTop:30,
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },

});

export default styles