import React, { Component  } from 'react'

class PhoneInfo extends Component  {

    static defaultPros = {
        info : {
            
            name:'이름',
            phone: '000-0000-0000',
            id: 0
        }
    }
    state = {
        editing: false,
        name: '',
        phone: ''
    }

    handleToggleEdit  = () => {
        const {editing } = this.state;
        
        this.setState(
            {editing : !editing}
        )
    }

    handleChange  = (e) => {
        const {name, value } = e.target;
        this.setState({
            [name] : value
        })
    }
    
    handleRemove = () => {
        const {info, onRemove, onUpdate } = this.props;
        onUpdate(info.id, info )
    }

    componentDidUpdate(prevProps, prevState) {
        const {info, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if(prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })            
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
            editing 
        } = this.state;
        
        if(editing) {
            return (
                <div style={style}>
                    <div> 
                        <input 
                            name='name' 
                            placeholder='이름' 
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div> 
                        <input 
                            name='phone' 
                            placeholder='전화번호' 
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit }> 적용 </button>
                    <button onClick={this.handleRemove}> 삭제 </button>

                </div>
            )
        } else {
    // 일반모드
            const {
                name, phone
            } = this.props.info;            
            return (
                <div style={style}>
                    <div> <b>{name}</b></div>
                    <div>{phone}</div>
                    <button onClick={this.handleRemove}> 삭제 </button>
                    <button onClick={this.handleToggleEdit }> 수정 </button>
                </div>
            )

        }
    }
}

export default PhoneInfo;