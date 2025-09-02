import { NavLink } from "react-router-dom"

export const Error=()=>{
    return (
        <>
            <section id="error-page">
                <div className="content">
                    <h2 className="header">404</h2>
                    <h4>Sorry! Page not found</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum dicta ducimus id vitae! Autem exercitationem, voluptates 
                        vel enim nesciunt voluptatibus.</p>
                        <div className="btns">
                            <NavLink to="/">Return Home</NavLink>
                            <NavLink to="/contact">Report Problem</NavLink>
                        </div>
                </div>
            </section>
        </>
    )
}