import { useState } from 'react'

function EducationalInfo () {
    const [schoolName, setSchoolName] = useState("");
    const [titleStudy, setTitleStudy] = useState("");
    const [dateStudy, setDateStudy] = useState("");

    const changeSchool = (e) => {
        setSchoolName(e.target.value) 
    }
    const changeTitleStudy = (e) => {
        setTitleStudy(e.target.value) 
    }
    const changeDateStudy = (e) => {
        setDateStudy(e.target.value) 
    }

    return (
        <section className='educational-info'>
            <h2 className='section-title'>Educational Experience</h2>
            
            <div className="section-content">
                <div className="section-item">
                    <label htmlFor="school-name">
                        School Name:
                    </label>
                    <input
                        id='school-name'
                        type="text"
                        value={schoolName}
                        onChange={changeSchool}
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="title-study">
                        Title of Study:
                    </label>
                    <input
                        id='title-study'
                        type="text"
                        value={titleStudy}
                        onChange={changeTitleStudy}
                    />
                </div>

                <div className="section-item">
                    <label htmlFor="date-study">
                        Conferred Date:
                    </label>
                    <input
                        id='date-study'
                        type="month"
                        value={dateStudy}
                        onChange={changeDateStudy}
                        min="1950-01"
                        max="2030-12"
                    />
                </div>
            </div>
        </section>
    )
}

export default EducationalInfo