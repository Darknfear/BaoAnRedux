import { createStore } from 'redux'

const defaultState = {
    checkAll: false,
    checkDon: false,
    dataList : [
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
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TICH_ALL":
            if(state.checkAll == false && state.checkDon == false) return {
                ...state,
                checkAll : true,
                checkDon : true,
            }
            if(state.checkAll == false && state.checkDon == true) return {
                ...state,
                checkAll : true
            }
            if(state.checkAll == true && state.checkDon == true) return {
                ...state,
                checkAll : false,
                checkDon : false
            }
            return state
           
        case "BO_TICH_ALL":
                if(state.checkAll == true && state.checkDon == true) return {
                    ...state,
                    checkAll : false,
                }
               return state;
           
        default:
            break;
    }
    return state
}

const store = createStore(reducer);
export default store;