import React, { Component } from 'react';
import { Container } from 'flux/utils';
import ItemStore from './flux/ItemStore';
import ItemAction from './flux/ItemAction';

class App extends Component {
    changeItemName = e => {
        //this.setState({itemName : e.target.value})
        ItemAction.changeName(e.target.value);
    }

    addItem = () => {
        ItemAction.addItem(this.state.itemName);
        ItemAction.changeName('');
    }

    deleteItem = id => {
        ItemAction.deleteItem(id);
    }

    render() {
        const styles = {
            color: 'blue',
            cursor: 'pointer',
            fontSize: '9pt'
        }
        const itemlist = this.state.items.map(item => {
            return (
                <li key={item.id}>
                    {item.itemName}{' '}
                    <span style={styles} onClick={() => { this.deleteItem(item.id) }}>삭제</span>
                </li>
            )
        })

        return (
        <div>
            <h3>올드팝 목록</h3>
            <div>
            <input type="text" value={this.state.itemName} onChange={this.changeItemName} />
            <button onClick={this.addItem}>추 가</button>
            </div>
            <ul>
                {itemlist}
            </ul>
        </div>
        )
    }
}

App.getStores = () => ([ ItemStore ]);
App.calculateState = prevState => ItemStore.getState()
const AppContainer = Container.create(App);

export default AppContainer;