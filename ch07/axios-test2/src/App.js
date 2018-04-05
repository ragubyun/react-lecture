import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
    componentDidMount() {
        axios.post('/contacts', {
            // name: '냐하하하하하하하하하하하하하하하하하하',
            tel: '010-1010-1010',
            address: 'addr1, addr2'
        }).then(res => {
            console.log('[log] res:', res)
        }).catch(err => {
            console.log('[log] err:', err)
        })
    }
    
    render() {
        console.log('[log] render')
        return (
            <div>
                <h1>콘솔 확인</h1>
            </div>
        );
    }
}

export default App;