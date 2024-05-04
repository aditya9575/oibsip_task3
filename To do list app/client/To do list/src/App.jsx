import React from 'react'
import DetailsForm from './components/TaskDetailsForm/DetailsForm'

const App = () => {
  return (
    <div>
    <nav style={{ textAlign: 'center', fontSize: '4rem', background: '-webkit-linear-gradient(left, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>To Do List App</nav>

      <DetailsForm/>
    </div>
  )
}

export default App