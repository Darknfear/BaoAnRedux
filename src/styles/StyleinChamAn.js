import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    header :  {
       justifyContent : "center",
       flexDirection : "row",
       backgroundColor : "#000055"
    },
    body : {
        alignItems : "center",
        justifyContent : "center"
    },
    textinheader : {
        fontSize : 25,
        color : "white"
    },
    listitem : {
        flex : 1,
    },
    flatlist : {
        flex : 10    
    }
    
})

export default styles;