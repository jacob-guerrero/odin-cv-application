import { useState } from 'react'
import './App.css'
import GeneralInfo from './GeneralInfo'
import EducationalInfo from './EducationalInfo'
import PracticalExp from './PracticalExp'

function App() {

  return (
    <>
    <form className='form-container'>
       <GeneralInfo></GeneralInfo>
       <EducationalInfo></EducationalInfo>
       <PracticalExp></PracticalExp>
    </form>
    </>
  )
}

export default App
