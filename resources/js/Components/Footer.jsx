import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="app-footer" style={{backgroundColor: '#158860', color: '#fff'}}>
                <div className="footer-bottom d-flex flex-column align-items-center">
                    <span className="flex-grow-1" />
                    <div className="d-flex align-items-center">
                    <img className="logo" src="assets/images/logo.png" alt="" />
                    <div>
                        <p className="m-0">© 2021 SiapSoft App</p>
                        <p className="m-0">All rights reserved</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
