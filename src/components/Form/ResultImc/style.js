import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contextImc:{
        flex:1,
        alignItems:"center",
        marginTop:20,
        paddingTop:15,
        width:"100%"
    },
    resultImc:{
        flex:1,
        marginTop:15,
        paddingTop:60,
        borderRadius:50,
        alignItems:"center",
        width:"100%",
    },
    numberImc:{
        fontSize: 48,
        color: "#6B7AA1",
        fontWeight: "bold",
    },
    information:{
        fontSize:18,
        color:"#99A799",
        fontWeight:"bold",
    },
    boxShareButton:{
        width:"100%",
        alignItems:"center",
        marginBottom:10
    },
    shared:{
        backgroundColor:"#6B7AA1",
        borderRadius:50,
        paddingBottom:5,
        paddingTop:5
    },
    sharedText:{
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal:30
    }
});

export default styles