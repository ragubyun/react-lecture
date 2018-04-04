import React, { Component } from 'react';
import produce from 'immer'
import MyButton from './MyButton'
import List from './List'

class App extends Component {
    constructor() {
        super();
        this.state = {
            itemList: []
        }
    }
 
    addItem = () => {
        this.num = this.num || 0
        ++this.num
        let newItemList = produce(this.state.itemList, draft => {
            draft.push({
                no: new Date().getTime(),
                item: '아이템' + this.num
            })
        })
        this.setState({itemList: newItemList})
    }

    render() {
        return (
            <div className="container">
                <div className="well">
                    <MyButton addItem={this.addItem} />
                    <List itemList={this.state.itemList} />
                </div>
            </div>
        )
    }
}

export default App;