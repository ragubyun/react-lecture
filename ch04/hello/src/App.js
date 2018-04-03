import React, { Component } from 'react'
import Title from './Title'
import CountryList from './CountryList'

class App extends Component {
    createString(x, y) {
    return (
            <div className="well">{x} + {y} = {x + y}</div>
        )
    }

    render() {
        const message = '<i>world</i>'
        const list = [
            { no: 1, country: '이집트', visited: false },
            { no: 2, country: '일본',  visited: true },
            { no: 3, country: '피지', visited: false },
            { no: 4, country: '콜롬비아', visited: true }
        ]

        return (
            <div className="container">
                <h1>Hello, { message }!</h1>
                <hr className="dash-style" />
                { this.createString(4, 5) }
                <Title title='타이틀' />
                { Title({title: '타이틀 함수'}) }
                <CountryList countries={list} />
            </div>
        );
    }
}

export default App;