import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Guest from '../../Layouts/Guest'

export default function Login({errors}) {
    const { data, setData, post } = useForm({
        no_handphone: '',
        password: '', 
        remember:'',
    })

    const changeHandler = (event) => setData({ ...data, [event.target.id]: event.target.value })

    const submitHandler = (event) =>{
        event.preventDefault();
        post(route('login'), data);
        // console.log(errors);
    }

    return (
        // <Guest title="Login">
        <div>
            <h1 className="mb-3 text-18 text-center t-font-boldest">Sign In</h1>
            <form onSubmit={submitHandler} noValidate>
                <div className="form-group">
                    <label htmlFor="no_handphone" className="t-font-boldest">Phone</label>
                    <input value={data.no_handphone} onChange={changeHandler} id="no_handphone" type="text" className={`form-control form-control-rounded ${errors.no_handphone && 'is-invalid'}`} name="no_handphone" required autoComplete="off" placeholder="Number Phone"/>
                    {errors.no_handphone && (<div className="text-danger">Wrong Number Phone</div>)}
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="t-font-boldest">Password</label>
                    <input value={data.password} onChange={changeHandler} id="password" type="password" className={`form-control form-control-rounded ${errors.password && 'is-invalid'}`} name="password" required autoComplete="off" placeholder="Password"/>
                    {errors && (<div className="text-danger">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input value={data.remember} onChange={(event) => setData({...data,remember: event.target.checked})} className="form-check-input" type="checkbox" name="remember" id="remember" />
                        <label className="form-check-label" htmlFor="remember">
                        Remember Me
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-rounded btn-bantuibu btn-block mt-2">Sign In</button>
            </form>

        </div>
        // </Guest>
    )
}


Login.layout = (page) => <Guest children={page} title="Login"/>