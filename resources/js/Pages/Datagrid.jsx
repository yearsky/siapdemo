import React from "react";
import App from "../Layouts/App";
import { Link } from "@inertiajs/inertia-react";
import CustomerGrid from "./CustomerGrid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UserGrid from "./UserGrid";
export default function Category() {
    return (
        <div>
            <div className="breadcrumb">
                <h1>Data Customer</h1>
                <ul>
                    <li>
                        <Link href={route("home.index")}>Home</Link>
                    </li>
                    <li>Index</li>
                </ul>
            </div>
            <div className="separator-breadcrumb border-top" />
            <div className="col-md-12">
                <div className="card o-hidden mb-4">
                    <div className="card-header">
                        <h3 className="text-start card-title m-0">
                            {/* <Link
                                href={route("users.create")}
                                as="button"
                                className="btn btn-bantuibu btn-raised-primary m-1"
                            >
                                Add User
                            </Link> */}
                            Data Customer
                        </h3>
                    </div>
                    <div className="card-body">
                        {/* <CustomerGrid /> */}
                        {/* <UserGrid /> */}
                        <Tabs>
                            <TabList>
                                <Tab>UsersGrid</Tab>
                                <Tab>CustomerGrid</Tab>
                            </TabList>
                            <TabPanel>
                                <UserGrid />
                            </TabPanel>
                            <TabPanel>
                                <CustomerGrid />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}

Category.layout = (page) => <App children={page} title="Datagrid" />;
