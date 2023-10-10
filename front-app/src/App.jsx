import { useState } from 'react'
import CardComponent from './components/card'
import Section from './components/section'
import { AppContext } from './context/context'
import './App.css'

function App() {
  const [selectedSection, setSelectedSection] = useState("arts")
  const dispatchUserEvent = (payload) => {
		console.log("Event Received From Context", payload);
    setSelectedSection(payload?.value)
	};
  return (
    <>
      <h1>AmeriTrade Api</h1>

      <AppContext.Provider value={{ selectedSection, dispatchUserEvent }}>
        <div className='sectionWrapper'>
          <Section />
        </div>
        <div className='cardComponentWrapper'>
          <CardComponent />
        </div>
      </AppContext.Provider>
    
    </>
  )
}

export default App
