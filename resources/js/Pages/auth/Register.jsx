import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Register() {
    return (
        // <Guest title="Register">
        <div>
            <h1 className="mb-3 text-18">Register</h1>
        </div>
            // <div className="card">
            //     <div className="card-header">
            //         Register
            //     </div>
            //     <div className="card-body">
                    
            //     </div>
            //     <div className="card-footer">
            //         <Link className="link-dark text-decoration-none" href="/login">Login</Link>
            //     </div>
            // </div>
        // </Guest>
    )
}


Register.layout = (page) => <Guest children={page} title="Register"/>