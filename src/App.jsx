import { useState } from 'react'
import './App.css'
import GeneralInfo from './GeneralInfo'
import EducationalInfo from './EducationalInfo'

function App() {

  return (
    <>
    <form>
       <GeneralInfo></GeneralInfo>
       <EducationalInfo></EducationalInfo>
    </form>
    </>
  )
}

export default App
