// eslint-disable-next-lin

import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: '이순신',
        phone: '010-2221-2221'
      },
      {
        id: 1,
        name: '이퇴계',
        phone: '010-2222-2222'
      },
      {
        id: 0,
        name: '이황',
        phone: '010-2223-2223'
      },
    ]
  }

  handleCreate = (data) => {    
    const {information} = this.state;
    this.setState({
      information : information.concat({id:this.id++, ...data})
    })
  }
  
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />

        {/*JSON.stringify(information)*/}
        <PhoneInfoList data={this.state.information} />
      </div>
    );
  }
}

export default App;