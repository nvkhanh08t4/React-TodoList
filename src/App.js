import React, { Component } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import tasks from './mocks/tasks';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: ''
    };

    this.handleToogleForm = this.handleToogleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleToogleForm(){
    this.setState({
        isShowForm: !this.state.isShowForm
      }
    )
  }

  closeForm(){
    this.setState({
      isShowForm: false
    }
  )
  }

  handleSearch(value){
    this.setState({
      strSearch: value
    }
  )
  }

  render() {
    console.log('strString: ', this.state.strSearch);
    let items = this.state.items;
    let isShowForm = this.state.isShowForm;
    let elmForm = null;
    if(isShowForm) {
      elmForm = <Form onClickCancel={this.closeForm}/>;
    }

    return (
      <div>
          {/* TITLE : START */}
         <Title />
          {/* TITLE : END */}

          {/* CONTROL (SEARCH + SORT + ADD) : START */}
          <Control
            onClickSearchGo={this.handleSearch} 
            isShowForm={isShowForm}
            onClickAdd={this.handleToogleForm}/>
          {/* CONTROL (SEARCH + SORT + ADD) : END */}

          {/* FORM : START */}
          {elmForm}
          {/* FORM : END */}

          {/* LIST : START */}
          <List items={items}/>
          {/* LIST : END */}

      </div>
    );
  }
}

export default App;
