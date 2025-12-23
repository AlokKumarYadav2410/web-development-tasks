import React from 'react'

const Hero = () => {
    return (
        <div className='hero'>
            <div>
                <h2>Unleash Your Inner Champion Today.</h2>
                <h2>All In One Place.</h2>
            </div>
            <div>
                <p>Join the ultimate tennis experience - where passion meets performance.</p>
                <p>and every swing brings you closer to victory.</p>
            </div>
            <div>
                <div className="btn">Start your own journey</div>
            </div>
            <div className="footer">
                <div className="left">
                    <div className="div">
                        <p>Train with real professionals.</p>
                        <p>Get the real results.</p>
                    </div>
                    <div className="photos">
                        <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img src="https://images.unsplash.com/photo-1602652904385-d093ee5afd32?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img src="https://images.unsplash.com/photo-1500917129638-ca7e13bc30f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>Instagram<i className="ri-arrow-right-up-line"></i></p>
                    <p>Facebook<i className="ri-arrow-right-up-line"></i></p>
                    <p>Youtube<i className="ri-arrow-right-up-line"></i></p>
                </div>
            </div>
        </div>
    )
}

export default Hero
