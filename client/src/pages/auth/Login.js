import React from 'react'
import InputTypes from '../../components/shared/form/InputTypes'

const Login = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-8 form-banner">
                    <img src="./assets/images/banner1.jpg" alt='LoginImage'></img>
                </div>
                <div className="col-md-4 form-container">
                    <form>
                        <InputTypes labelText={"E-mail"} labelFor={"forE-mail"} inputType={"email"} name={"email"}></InputTypes>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login
