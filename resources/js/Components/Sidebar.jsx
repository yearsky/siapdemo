import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Sidebar() {
    return (
        <div className="side-content-wrap">
            <div className="sidebar-left open rtl-ps-none sidebarscroll">
                <ul className="navigation-left">
                    <li
                        className="nav-item {{ request()->is('dashboard/*') ? 'active' : '' }}"
                        data-item="dashboard"
                    >
                        <a className="nav-item-hold" href="#">
                            <i className="nav-icon i-Bar-Chart" />
                            <span className="nav-text">Dashboard</span>
                        </a>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item {{request()->is('home') ? 'active' : '' }}">
                        <Link
                            className="nav-item-hold"
                            href={route("home.index")}
                        >
                            <i className="nav-icon i-Home1" />
                            <span className="nav-text">Home</span>
                        </Link>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item" hidden={true}>
                        <Link
                            className="nav-item-hold"
                            href={route("category.index")}
                        >
                            <i className="nav-icon i-Receipt-4" />
                            <span className="nav-text">Category</span>
                        </Link>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item" hidden={true}>
                        <Link
                            className="nav-item-hold"
                            href={route("product.index")}
                        >
                            <i className="nav-icon i-Checkout-Basket" />
                            <span className="nav-text">Product</span>
                        </Link>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item" hidden={true}>
                        <Link
                            className="nav-item-hold"
                            href={route("users.index")}
                        >
                            <i className="nav-icon i-Add-User" />
                            <span className="nav-text">Users </span>
                        </Link>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item" hidden={true}>
                        <Link
                            className="nav-item-hold"
                            href={route("datagrid.index")}
                        >
                            <i className="nav-icon i-File-Horizontal-Text" />
                            <span className="nav-text">Index Grid</span>
                        </Link>
                        <div className="triangle" />
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-item-hold"
                            href={route("datagrid.index")}
                        >
                            <i className="nav-icon i-File-Horizontal-Text" />
                            <span className="nav-text">Customers Grid</span>
                        </Link>
                        <div className="triangle" />
                    </li>
                </ul>
            </div>
            <div
                className="sidebar-left-secondary rtl-ps-none"
                data-perfect-scrollbar
                data-suppress-scroll-x="true"
            >
                <ul className="childNav" data-parent="dashboard">
                    <li className="nav-item ">
                        <a
                            className="{{ Route::currentRouteName()=='dashboard_version_1' ? 'open' : '' }}"
                            href="#"
                        >
                            <i className="nav-icon i-Clock-3" />
                            <span className="item-name">Version 1</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#"
                            className="{{ Route::currentRouteName()=='dashboard_version_2' ? 'open' : '' }}"
                        >
                            <i className="nav-icon i-Clock-4" />
                            <span className="item-name">Version 2</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="{{ Route::currentRouteName()=='dashboard_version_3' ? 'open' : '' }}"
                            href="#"
                        >
                            <i className="nav-icon i-Over-Time" />
                            <span className="item-name">Version 3</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="{{ Route::currentRouteName()=='dashboard_version_4' ? 'open' : '' }}"
                            href="#"
                        >
                            <i className="nav-icon i-Clock" />
                            <span className="item-name">Version 4</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-overlay" />
        </div>
    );
}
