
import React, {Component} from 'react';

class PhoneForm extends Component {

    state = {
        name : '',
        phone: ''
    }

    handleChange  = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    handleSubmit = (e) => {


        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
        e.preventDefault();        
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder='이름' value={this.state.name} name="name" onChange={this.handleChange } />                
                <input placeholder='전화번호' value={this.state.phone} name="phone" onChange={this.handleChange } />
                <div> {this.state.name}{this.state.phone}</div>
                <div><button type="submit">등록</button></div>
            </form>

        );
    }
}

export default PhoneForm;
