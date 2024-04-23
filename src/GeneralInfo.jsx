import { useState } from 'react'

function GeneralInfo () {
    const [nameValue, setNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");

    const changeName = (e) => {
        setNameValue(e.target.value) 
    }
    const changeLastName = (e) => {
        setLastNameValue(e.target.value) 
    }
    /* const fullName = nameValue + ' ' + lastNameValue; */

    const changeEmail = (e) => {
        setEmailValue(e.target.value) 
    }
    const changePhone = (e) => {
        setPhoneValue(e.target.value) 
    }

    return (
        <section className='general-info'>
            <h2 className='section-title'>General Information</h2>
            
            <label htmlFor="name">
                Name:
            </label>
            <input
                id='name'
                type="text"
                value={nameValue}
                onChange={changeName}
            />

            <label htmlFor="lastName">
                Last Name:
            </label>
            <input
                id='lastName'
                type="text"
                value={lastNameValue}
                onChange={changeLastName}
            />

            <label htmlFor="email">
                Email:
            </label>
            <input
                id='email'
                type="email"
                value={emailValue}
                onChange={changeEmail}
            />

            <label htmlFor="phone">
                Phone:
            </label>
            <input
                id='phone'
                type="tel"
                value={phoneValue}
                onChange={changePhone}
            />
        </section>
    )
}

export default GeneralInfo