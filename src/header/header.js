import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <header className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">ReactApp</div>
                    <div className="col-sm-6 text-right">User Name</div>
                </div>
            </header>
        )
    }
}
