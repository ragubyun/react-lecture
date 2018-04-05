import React, { Component } from 'react';
import { Portal } from 'react-portal'
import axios from 'axios'

import InputName from './InputName'
import ContactList from './ContactList'
import Loading from './Loading'
import AddContact from './AddContact'

const BASE_URL = ''

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            isLoading: false,
            name: '',
            showAddContact: false
        }
    }

    searchContact = () => {
        const { name } = this.state
        if (name.length > 1) {
            this.setState({ isLoading: true })
            axios.get(`/contacts_long/search/${name}`, {
                baseURL: BASE_URL
            }).then(res => {
                this.setState({ contacts: res.data })
                this.setState({ isLoading: false })
            }).catch(err => {
                console.log('[log] err:', err)
                this.setState({ isLoading: false })
            })
        } else {
            this.setState({ contacts: [] })
        }
    }

    changeShowAddContact = state => {
        this.setState({ showAddContact : state })
    }

    addContact = ({ name, tel, address }) => {
        this.setState({ name: name })
        axios.post('/contacts',{
            name: name,
            tel: tel,
            address:address
        }, {
            baseURL: BASE_URL
        }).then(res => {
            this.changeShowAddContact(false)
            if (res.data.status === 'success') {
                this.searchContact();       //추가한 연락처 조회
            }
        }).catch(err => {
            console.log('[log] err:', err)
            this.changeShowAddContact(false)
        })
    }

    deleteContact = no => {
        //현재 검색어로 조회
        axios.delete(`/contacts/${no}`, {
            baseURL: BASE_URL
        }).then(res => {
            this.searchContact()
        }).catch(err => {
            console.log('[log] err:', err)
        })
    }
    
    changeName = name => {
        if (name) {
            this.setState({ name: name })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="well">
                    <div className="col-xs-1"></div>
                    <div className="title col-xs-10">:: 연락처 앱</div>
                    <div className="col-xs-1">
                        <button className="btn btn-warning btn-circle" onClick={() => this.changeShowAddContact(true)}>
                            <span className="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="panel panel-default panel-borderless">
                    <div className="panel-body">
                        <InputName searchContact={this.searchContact} name={this.state.name}
                            changeName={this.changeName}/>
                    </div>
                </div>
                <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} />
                { 
                    this.state.showAddContact 
                        ? <AddContact addContact={this.addContact} changeShowAddContact={this.changeShowAddContact} /> 
                        : '' 
                }
                <Portal node={document && document.getElementById('modal-area')}>
                    <Loading isLoading={this.state.isLoading}>
                        <div className="well title">
                            <h4>데이터 조회중</h4>
                        </div>
                    </Loading>    
                </Portal>
            </div>
        );
    }
}

export default App;