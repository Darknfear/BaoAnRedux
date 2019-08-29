import React, { Component } from 'react';
import { Container,Header,Left,Right,Body,Text,ListItem,CheckBox } from 'native-base'
import { FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import styles from '../styles/StyleinChamAn'
import Item from './FlatListItem/ItemInChamAn'

let dataList = [
    {
        'STT': '1',
        'HoTen': 'Lò Thị Lông'
    },
    {
        'STT': '2',
        'HoTen': 'Nguyễn Thị Mông'
    },
    {
        'STT': '3',
        'HoTen': 'Nguyễn Thị Mông To'
    },
    {
        'STT': '4',
        'HoTen': 'Nguyễn Thị Mông Nhỏ'
    },
    {
        'STT': '5',
        'HoTen': 'Nguyễn Thị Mông Lép'
    },
    {
        'STT': '6',
        'HoTen': 'Nguyễn Thị Mông'
    },
    {
        'STT': '5',
        'HoTen': 'Nguyễn Thị Mông Lép'
    },
    {
        'STT': '6',
        'HoTen': 'Nguyễn Thị Mông'
    },
    {
        'STT': '7',
        'HoTen': 'Nguyễn Thị Mông Lép'
    },
    {
        'STT': '8',
        'HoTen': 'Nguyễn Thị Mông'
    },
    {
        'STT': '9',
        'HoTen': 'Nguyễn Thị Mông Lép'
    },
    {
        'STT': '10',
        'HoTen': 'Nguyễn Thị Mông'
    },
    {
        'STT': '11',
        'HoTen': 'Nguyễn Thị Mông'
    }
]

class ChamAnNgay extends Component {
    render() {
        console.log("checkAll :",this.props.checkAll)
        console.log("checkDon :"+this.props.checkDon)
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
                data={dataList}
                    style={styles.flatlist}
                    renderItem={({item,index}) =>{
                        return(
                            <Item item={item} index={index} />
                        );
                    }}
                />

                
            </Container>

        );
    }
}
function mapStateToProps (state) {
    return {
        checkAll : state.checkAll,
        checkDon : state.checkDon
    }
}
function mapDispatchToProps(dispatch){
    return {
        tichAll : () => dispatch({ type : "SET_ALL"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChamAnNgay)