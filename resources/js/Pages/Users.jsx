import React from 'react'
import App from '../Layouts/App'

export default function Users() {
    return (
        <div>
            <div className="breadcrumb">
                <h1>Users</h1>
                <ul>
                    <li><a href="#">Users Home</a></li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top" />
        </div>
    )
}

Users.layout = (page) => <App children={page} title="Users"/>