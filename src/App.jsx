import { useState } from 'react'
import './App.css'
import GeneralInfo from './GeneralInfo'
import EducationalInfo from './EducationalInfo'
import PracticalExp from './PracticalExp'

function App() {
  const [buttonState, setButtonState] = useState(false);
  const changeButtonState = (e) => {
    e.preventDefault();
    buttonState ? setButtonState(false) : setButtonState(true)
  }
  const onSub = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <form className='form-container'>
       <GeneralInfo buttonOn={buttonState}></GeneralInfo>
       <EducationalInfo buttonOn={buttonState}></EducationalInfo>
       <PracticalExp buttonOn={buttonState}></PracticalExp>
       <div className="btn-container">
        <button className='btn' onClick={changeButtonState}>{buttonState ? "Edit" : "Ok"}</button>
        <button className='btn' onClick={onSub} disabled={!buttonState}>Submit</button>
       </div>
    </form>
    </>
  )
}

export default App
