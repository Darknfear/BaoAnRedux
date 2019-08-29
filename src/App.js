import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import ChamAnNgay from './components/ChamAnNgay'

export default class App extends Component{
    render(){
        return(
           <Provider store={store}>
                <ChamAnNgay />
           </Provider>        
        );
    }
}