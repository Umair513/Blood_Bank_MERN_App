import React, { useState } from 'react'
import InputTypes from './InputTypes'

const Form = ({ submitBtn, formTitle, formType }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("donar")
    const [name, setName] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const [hospitalName, setHospitalName] = useState("")
    const [website, setWebsite] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    return (
        <div>
            <form>
                <h1 className='text-center'>{formTitle}</h1>
                <hr></hr>
                <div className="d-flex mb-3">
                    <div className="form-check">
                        <input type='radio' className="form-check-input" name='role' value={"donar"} onChange={(e) => setRole(e.target.value)} defaultChecked id='donarRadio'></input>
                        <label htmlFor='donarRadio' className='form-check-label'>
                            Donar
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input type='radio' className="form-check-input" name='role' value={"admin"} onChange={(e) => setRole(e.target.value)} id='adminRadio'></input>
                        <label htmlFor='adminRadio' className='form-check-label'>
                            Admin
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input type='radio' className="form-check-input" name='role' value={"hospital"} onChange={(e) => setRole(e.target.value)} id='hospitalRadio'></input>
                        <label htmlFor='hospitalRadio' className='form-check-label'>
                            Hospital
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input type='radio' className="form-check-input" name='role' value={"organization"} onChange={(e) => setRole(e.target.value)} id='organizationRadio'></input>
                        <label htmlFor='organizationRadio' className='form-check-label'>
                            Organization
                        </label>
                    </div>
                </div>
                {
                    (() => {
                        switch (true) {
                            case formType === "login": {
                                return (
                                    <>
                                        <InputTypes labelText={"Email"} labelFor={"forEmail"} inputType={"email"} name={"email"} value={email} onChange={(e) => setEmail(e.target.value)}></InputTypes>
                                        <InputTypes labelText={"Password"} labelFor={"forPassword"} inputType={"password"} name={"password"} value={password} onChange={(e) => setPassword(e.target.value)}></InputTypes>
                                    </>
                                )
                            }
                            case formType === "register": {
                                return (
                                    <>
                                        <InputTypes labelText={"Email"} labelFor={"forEmail"} inputType={"email"} name={"email"} value={email} onChange={(e) => setEmail(e.target.value)}></InputTypes>
                                        <InputTypes labelText={"Password"} labelFor={"forPassword"} inputType={"password"} name={"password"} value={password} onChange={(e) => setPassword(e.target.value)}></InputTypes>
                                        {(role === "admin" || role === "donar") && (
                                            <InputTypes labelText={"Name"} labelFor={"forName"} inputType={"text"} name={"name"} value={name} onChange={(e) => setName(e.target.value)}></InputTypes>
                                        )}

                                        {role === "organization" && (
                                            <InputTypes labelText={"Organization Name"} labelFor={"forOrganizationName"} inputType={"text"} name={"organizationName"} value={organizationName} onChange={(e) => setOrganizationName(e.target.value)}></InputTypes>
                                        )}
                                        {
                                            role === "hospital" && (
                                                <InputTypes labelText={"Hospital Name"} labelFor={"forHospitalName"} inputType={"text"} name={"hospitalName"} value={hospitalName} onChange={(e) => setHospitalName(e.target.value)}></InputTypes>
                                            )
                                        }

                                        <InputTypes labelText={"Website"} labelFor={"forWebsite"} inputType={"text"} name={"website"} value={website} onChange={(e) => setWebsite(e.target.value)}></InputTypes>
                                        <InputTypes labelText={"Address"} labelFor={"forAddress"} inputType={"text"} name={"address"} value={address} onChange={(e) => setAddress(e.target.value)}></InputTypes>
                                        <InputTypes labelText={"Phone"} labelFor={"forPhone"} inputType={"text"} name={"phone"} value={phone} onChange={(e) => setPhone(e.target.value)}></InputTypes>
                                    </>
                                )
                            }
                        }
                    })()
                }

                <div className="d-flex">
                    <button className='btn btn-primary' type='submit'>
                        {submitBtn}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
