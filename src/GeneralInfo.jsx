import { useState } from 'react'

function GeneralInfo ({buttonOn}) {
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

    if(buttonOn) {
        return (
            <section className='general-info'>
                <h2 className='section-title'>General Information</h2>
                <div className="section-content">
                    <div className="section-item">
                        <h3 className='fullname'>{nameValue} {lastNameValue}</h3>
                    </div>
                    <div className="section-item">
                        <p className='section-item-value'>{emailValue}</p>
                    </div>
                    <div className="section-item">
                        <p className='section-item-value'>{phoneValue}</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className='general-info'>
            <h2 className='section-title'>General Information</h2>
            
            <div className="section-content">
                <div className="section-item">
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input
                        id='name'
                        type="text"
                        value={nameValue}
                        onChange={changeName}
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="lastName">
                        Last Name:
                    </label>
                    <input
                        id='lastName'
                        type="text"
                        value={lastNameValue}
                        onChange={changeLastName}
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        id='email'
                        type="email"
                        value={emailValue}
                        onChange={changeEmail}
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="phone">
                        Phone:
                    </label>
                    <input
                        id='phone'
                        type="tel"
                        value={phoneValue}
                        onChange={changePhone}
                    />
                </div>
            </div>
        </section>
    )
}

export default GeneralInfo