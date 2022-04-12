import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import logo from "../../../public/assets/images/logo.png";
export default function Header() {
    const { auth } = usePage().props;
    const logoutHandler = () => {
        Inertia.post(route("logout"));
        //for reset
        setTimeout(() => {
            window.location.reload(false);
        }, 1000);
    };
    return (
        <div>
            <div className="main-header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menu-toggle">
                    <div style={{ backgroundColor: "#fff" }} />
                    <div style={{ backgroundColor: "#fff" }} />
                    <div style={{ backgroundColor: "#fff" }} />
                </div>
                <div className="d-flex align-items-center">
                    <div
                        className="breadcrumb"
                        style={{ paddingTop: "25px" }}
                    ></div>
                </div>
                <div style={{ margin: "auto" }} />
                <div className="header-part-right">
                    {/* <i style={{color: '#fff'}} className="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen /> */}
                    <div className="dropdown">
                        <div className="user col align-self-end">
                            <i
                                className="i-Male text-25"
                                id="userDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{ color: "#fff", cursor: "pointer" }}
                            ></i>
                            <div
                                className="dropdown-menu dropdown-menu-right"
                                aria-labelledby="userDropdown"
                            >
                                <div className="dropdown-header">
                                    <i className="i-Lock-User mr-1" />{" "}
                                    {auth.user.name}
                                </div>
                                <a href="#" className="dropdown-item">
                                    Account settings
                                </a>
                                <button
                                    className="dropdown-item text-danger"
                                    onClick={logoutHandler}
                                >
                                    {" "}
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
