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
        id: 2,
        name: '이황',
        phone: '010-2223-2223'
      },
    ],
    keyword: ''
  }

  handleCreate = (data) => {  
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: ++this.id, ...data })
    })
  }

  handleChange = (e) => {
      this.setState({    
        keyword: e.target.value
      });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information : information.map( info => info.id === id 
                                             ? {...info, ...data}
                                             : info
      )
    })
  } 

  handleRemove = (id) => {
    
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
    
  render() {
    const { information, keyword } = this.state; 

    const filteredList = information.filter( info => info.name.indexOf(keyword) !== -1);
    console.log('## App.render keyword= [' + (keyword && !keyword.lenght) + ']');
    if(keyword && !keyword.lenght) {
        console.log("keyword found");
    }
    console.log('## App.render.org=' + JSON.stringify(information));
    console.log('## App.render.filtered=' + JSON.stringify(filteredList));
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />

        {/*JSON.stringify(information)*/}
        <input name='name' 
          placeholder='검색 할 이름을 입력하세요' 
          onChange={this.handleChange}
          value={keyword}
        />
        <PhoneInfoList 
          data={ (keyword && !keyword.lenght) ?  filteredList : information} 
          onRemove={this.handleRemove} 
          onUpdate={this.handleUpdate} 
        />
      </div>
    );
  }
}

export default App;