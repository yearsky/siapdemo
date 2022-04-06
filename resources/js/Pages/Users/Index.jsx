import App from '../../Layouts/App';
import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Pagination from '../../Components/Pagination';

export default function Index(props) {
    const { data: users, links, from } = props.users;
    console.log(users);
    return (
        <div>
            <div className="breadcrumb">
                <h1>Users</h1>
                <ul>
                    <li><Link href={route('home.index')}>Home</Link></li>
                    <li>Users</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top" />

            <div className="col-md-12">
                <div className="card o-hidden mb-4">
                    <div className="card-header">
                        <h3 className="text-end card-title m-0">
                            <Link href={route('users.create')} as="button" className="btn btn-bantuibu btn-raised-primary m-1">Add User</Link>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table  text-center">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col" className="text-end">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((value, index) => (
                                        <tr key={value.id}>
                                            <th scope="row">{from + index}</th>
                                            {/* <th scope="row">{value.id}</th> */}
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.no_handphone}</td>
                                            <td>
                                                <div className="dropdown dropleft text-end float-right">
                                                    <button className="btn btn-warning" type="button" id="dropdownMenuButton_table3"
                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <i className="nav-icon i-Gear-2"></i>
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton_table3">
                                                        <Link className="dropdown-item" href={route('users.edit', value.id)}>Edit</Link>
                                                        <Link as="button" className="dropdown-item text-danger" method="delete" href={route('users.destroy', value.id)}>Delete</Link>
                                                        {/* <button className="dropdown-item text-danger" onClick={() => destroyData(users)}>Delete</button> */}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={links} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


Index.layout = (page) => <App children={page} title="Users" />;