import React, { Component } from 'react';
import { Container, Header, Left, Right, Body, Text, ListItem, CheckBox } from 'native-base'
import { FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import styles from '../styles/StyleinChamAn'
import Item from './FlatListItem/ItemInChamAn'



class ChamAnNgay extends Component {
    render() {
        
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Body style={styles.body}>
                        <Text style={styles.textinheader}>Chấm ăn</Text>
                    </Body>
                </Header>
                <ListItem style={styles.listitem}>
                    <Left>
                        <Text>Tích All</Text>
                    </Left>
                    <Right >
                        <CheckBox
                            onPress={() => this.props.tichAll()}
                            checked={this.props.checkAll}></CheckBox>
                    </Right>
                </ListItem>
                <FlatList
                    data={this.props.datalist}
                    style={styles.flatlist}
                    renderItem={({ item, index }) => {
                        return (
                            <Item item={item} index={index} />
                        );
                    }}
                />


            </Container>

        );
    }
}
function mapStateToProps(state) {
    return {
        checkAll: state.checkAll,
        checkDon: state.checkDon,
        datalist: state.dataList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        tichAll: () => dispatch({ type: "TICH_ALL" })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChamAnNgay)