import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container,Left,Right,Body,ListItem,CheckBox,Text} from 'native-base'
import styles from '../../styles/StyleItemChamAn'

class ItemInChamAn extends Component{
    render(){
    console.log("checkDon2 :"+this.props.checkDon)

        return(
                <ListItem >
                    <Left>
                        <Text>{this.props.item.HoTen}</Text>
                    </Left>
                    <Right>
                        <CheckBox
                            onPress={() => this.props.boTichAll()}
                            checked={this.props.checkDon}></CheckBox>
                    </Right>
                </ListItem>  
        );
    }
}
function mapStateToProps(state){
    return {
        checkAll : state.checkAll,
        checkDon : state.checkDon
    }
}
function mapDispatchToProps(dispatch){
    return {
        boTichAll : () => dispatch({ type : "SET_ALL"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemInChamAn)