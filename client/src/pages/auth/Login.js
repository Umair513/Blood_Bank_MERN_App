import React from 'react'
import InputTypes from '../../components/shared/form/InputTypes'
import Form from '../../components/shared/form/Form'

const Login = () => {
    return (
        <>
            <div className="row g-0">
                <div className="col-md-8 form-banner">
                    <img src="./assets/images/banner1.jpg" alt='LoginImage'></img>
                </div>
                <div className="col-md-4 form-container">
                    <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"login"}></Form>
                </div>
            </div>
        </>
    )
}

export default Login
