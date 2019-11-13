import React, { Component  } from 'react'

class PhoneInfo extends Component  {

    static defaultPros = {
        info : {
            
            name:'이름',
            phone: '000-0000-0000',
            id: 0
        }
    }

    render() {
        const style = { 
            board: '1px solid black',
            backgroundColor: 'black',
            color: 'aqua',
            padding: '8px',
            margin: '8px'
        };
        /*
        const {
            name, phone, id
        } = this.defaultPros.info;  // props instead of defaultPros
        */
        const {
        name, phone, id
        } = this.props.info;
        
        return (
            <div style={style}>
                <div> <b>{name}</b></div>
                <div>{phone}</div>
            </div>            
        )
    }
}

export default PhoneInfo;