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

  return (
    <>
    <form className='form-container'>
       <GeneralInfo buttonOn={buttonState}></GeneralInfo>
       <EducationalInfo buttonOn={buttonState}></EducationalInfo>
       <PracticalExp buttonOn={buttonState}></PracticalExp>
       <button onClick={changeButtonState}>Submit</button>
       <h2>{buttonState ? "True" : "False"}</h2>
    </form>
    </>
  )
}

export default App
