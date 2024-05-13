import { useState } from 'react'

function PracticalExp () {
    const [companyName, setCompanyName] = useState("");
    const [positionTitle, setPositionTitle] = useState("");
    const [mainResp, setMainResp] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateUntil, setDateUntil] = useState("");

    const changeCompanyName = (e) => {
        setCompanyName(e.target.value) 
    }
    const changePositionTitle = (e) => {
        setPositionTitle(e.target.value) 
    }
    const changeMainResp = (e) => {
        setMainResp(e.target.value) 
    }
    const changeDateFrom = (e) => {
        setDateFrom(e.target.value) 
    }
    const changeDateUntil = (e) => {
        setDateUntil(e.target.value) 
    }

    return (
        <section className='educational-info'>
            <h2 className='section-title'>Practical Experience</h2>
            
            <div className="section-content">
                <div className="section-item">
                    <label htmlFor="company-name">
                        Company Name:
                    </label>
                    <input
                        id='company-name'
                        type="text"
                        value={companyName}
                        onChange={changeCompanyName}
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="title-position">
                        Position Title:
                    </label>
                    <input
                        id='title-position'
                        type="text"
                        value={positionTitle}
                        onChange={changePositionTitle}
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="main-resp">
                        Main Responsabilities:
                    </label>
                    <input
                        id='main-resp'
                        type="text"
                        value={mainResp}
                        onChange={changeMainResp}
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="date-from">
                        From:
                    </label>
                    <input
                        id='date-from'
                        type="month"
                        value={dateFrom}
                        onChange={changeDateFrom}
                        min="1950-01"
                        max="2030-12"
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="date-until">
                        Until:
                    </label>
                    <input
                        id='date-until'
                        type="month"
                        value={dateUntil}
                        onChange={changeDateUntil}
                        min="1950-01"
                        max="2030-12"
                    />
                </div>
            </div>
        </section>
    )

}

export default PracticalExp