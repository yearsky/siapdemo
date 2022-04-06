import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import App from '../../Layouts/App'

export default function Create() {
    
    const {data, setData, post, errors} = useForm({
        name: '',
        email: '',
        no_handphone: '',
        password: '',
        retypepassword: '',
    });
    
    const changeHandler = (event) => setData({...data,[event.target.id]: event.target.value });
    
    const submitHandler = (event) =>{
        event.preventDefault();
        post(route('users.store'),data);
    }
    return (
        <div>
            <div className="breadcrumb">
                <h1>Users Create</h1>
                <ul>
                    <li><Link href={route('home.index')}>Home</Link></li>
                    <li><Link href={route('users.index')}>Users</Link></li>
                    <li>Users Create</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top" />
            <div className="col-md-12">
                <div className="card mb-4">
                    <div className="card-body">
                    <div className="card-title mb-3">Create New User</div>
                        <form onSubmit={submitHandler} noValidate>
                            <div className="row">
                            <div className="col-md-4 form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name"  className={`form-control ${errors.name && 'is-invalid'}`} value={data.name} onChange={changeHandler} id="name" placeholder="Enter your name" />
                            {errors && (<div className="text-danger mt-1">{errors.name}</div>)}
                            </div>
                            <div className="col-md-4 form-group mb-3">
                                <label htmlFor="email">Email address</label>
                                <input type="email" name="email" className={`form-control ${errors.email && 'is-invalid'}`} value={data.email} onChange={changeHandler} id="email" placeholder="Enter email" /> 
                            {errors && (<div className="text-danger mt-1">{errors.email}</div>)}
                            </div>
                            <div className="col-md-4 form-group mb-3">
                                <label htmlFor="no_handphone">Phone</label>
                                <input type="number" name="no_handphone" className={`form-control ${errors.no_handphone && 'is-invalid'}`} value={data.no_handphone} onChange={changeHandler} id="no_handphone" placeholder="Enter phone" />
                            {errors && (<div className="text-danger mt-1">{errors.no_handphone}</div>)}
                            </div>
                            <div className="col-md-6 form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" className={`form-control ${errors.password && 'is-invalid'}`} value={data.password} onChange={changeHandler} id="password" placeholder="Enter your password" />
                            {errors && (<div className="text-danger mt-1">{errors.password}</div>)}
                            </div>
                            <div className="col-md-6 form-group mb-3">
                                <label htmlFor="retypepassword">Retype Password </label>
                                <input type="password" name="retypepassword" className={`form-control ${errors.retypepassword && 'is-invalid'}`} value={data.retypepassword} onChange={changeHandler} id="retypepassword" placeholder="Enter your retype password" />
                            {errors && (<div className="text-danger mt-1">{errors.retypepassword}</div>)}
                            </div>
                            <div className="col-md-12 text-end">
                                <button type="submit" className="btn btn-bantuibu">Submit</button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

Create.layout = (page) => <App children={page} title="User Create"/>