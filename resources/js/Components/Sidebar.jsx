import { Link, usePage } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
    const currentUrl = window.location.pathname;
    const { auth } = usePage().props;
    const role = auth.user.isrole;

    const [dataItem, setDataItem] = useState();

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        await axios.get(`http://127.0.0.1:8000/api/side`).then(({ data }) => {
            setMenu(data);
        });
    };

    // const handleSide = (parent) => {
    //     setDataItem(parent);
    // };

    // console.log(auth);
    console.log(dataItem);
    return (
        <div className="side-content-wrap">
            <div className="sidebar-left open rtl-ps-none sidebarscroll">
                <ul className="navigation-left">
                    {role == "admin" ? (
                        <>
                            <li
                                className={`nav-item ${
                                    currentUrl === "/home" ? "active" : ""
                                }`}
                            >
                                <Link
                                    className="nav-item-hold"
                                    href={route("home.index")}
                                >
                                    <i className="nav-icon i-Home1" />
                                    <span className="nav-text">Home</span>
                                </Link>
                                <div className="triangle" />
                            </li>
                        </>
                    ) : (
                        <></>
                    )}

                    <li
                        className={`nav-item ${
                            currentUrl === "/datagrid" ? "active" : ""
                        }`}
                    >
                        <Link
                            className="nav-item-hold"
                            href={route("datagrid.index")}
                        >
                            <i className="nav-icon i-File-Horizontal-Text" />
                            <span className="nav-text">Customers Grid</span>
                        </Link>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item" data-item="oke">
                        <Link className="nav-item-hold" href="#">
                            <i className="nav-icon i-Home1" />
                            <span className="nav-text">Statis</span>
                        </Link>
                        <div className="triangle" />
                    </li>

                    {menu.map((row, index) => (
                        <>
                            {row.treelevel === 1 && row.parent == "" ? (
                                <>
                                    <li
                                        className="nav-item"
                                        key={row}
                                        data-item="woke"
                                        onChange={() => setDataItem(row.L1)}
                                    >
                                        <Link
                                            className="nav-item-hold"
                                            href="#"
                                        >
                                            <i
                                                className={`nav-icon ${row.icon}`}
                                            />
                                            <span className="nav-text">
                                                {row.caption}
                                            </span>
                                        </Link>
                                        <div className="triangle" />
                                    </li>
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    ))}
                </ul>
            </div>
            <div
                className="sidebar-left-secondary rtl-ps-none"
                data-perfect-scrollbar
                data-suppress-scroll-x="true"
            >
                <ul className="childNav" data-parent="oke">
                    <li className="nav-item ">
                        <a
                            className="{{ Route::currentRouteName()=='dashboard_version_1' ? 'open' : '' }}"
                            href="#"
                        >
                            <i className="nav-icon i-Clock-3" />
                            <span className="item-name">Version 1</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="sidebar-overlay" />
        </div>
    );
}
