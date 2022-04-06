import React from 'react'
import { Head } from '@inertiajs/inertia-react'
export default function App({title, children}) {
    return (
        <div>
            <Head title={title}/>
            <div className="auth-layout-wrap" style={{backgroundImage: "url(assets/images/photo-wide-3.jpg)",}}> 
                <div className="auth-content">
                    <div className="card" style={{backgroundColor: 'rgba(245, 255, 255, 0.8)'}} >
                        <div className="row">
                            <div className="col-md-12">
                                <div className="p-4">
                                    <div className="auth-logo text-center mb-4">
                                        <img src="assets/images/logo2.png" alt="" />
                                    </div>                                    
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}