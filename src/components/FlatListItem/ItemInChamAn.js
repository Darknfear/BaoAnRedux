import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container,Left,Right,Body,ListItem,CheckBox,Text} from 'native-base'
import styles from '../../styles/StyleItemChamAn'

class ItemInChamAn extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCheck : this.props.checkDon
        }
    }
    tichDon = () => {
        if(this.state.isCheck == false){
            this.setState({
                isCheck : true
            }),
            this.props.boTichALL()
            //console.log("log1")
        }
        if(this.state.isCheck == true ){
            this.setState({
                isCheck : false
            
            }),
            this.props.boTichALL()
            //console.log("log2")
        }
        if(this.state.isCheck == true && this.props.checkAll == true){
            this.setState({
                isCheck : false
            
            }),
            this.props.boTichALL()
            //console.log("log2")
        }
    }
    
    componentWillReceiveProps(nextProps) {
        
       
        if(nextProps.checkAll != this.props.checkAll && nextProps.checkDon != this.props.checkAll) {
            this.setState({
                isCheck : nextProps.checkDon
            })
           // console.log("debug :"+this.state.isCheck)
        }
        // if(nextProps.checkAll != this.props.checkAll && this.state.isCheck == true) {
        //     this.setState({
        //         isCheck : !this.state.isCheck
        //     })
        //     console.log("debug2 :"+this.state.isCheck)
        // }
        // if(nextProps.checkAll != this.props.checkAll && this.state.isCheck == false) {
        //     this.setState({
        //         isCheck : !this.state.isCheck
        //     })

        //     console.log("debug3 :"+this.state.isCheck)
        // }
    }
    render(){
        
    console.log("statuschekAll" +this.props.checkAll)
    console.log("isChecked" +this.props.checkAll)

        return(
                <ListItem >
                    <Left>
                        <Text>{this.props.item.HoTen}</Text>
                    </Left>
                    <Right>
                        <CheckBox
                            onPress={() => this.tichDon()}
                            checked={this.state.isCheck}></CheckBox>
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
        boTichALL : () => dispatch({ type : "BO_TICH_ALL"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemInChamAn)