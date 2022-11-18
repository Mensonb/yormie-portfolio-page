import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AuthorCard from './components/AuthorCard';
import Education from './components/Education';
import Work from './components/Work';
import Hobbies from './components/Hobbies';
import{useState} from 'react'

 function App() {
    // definding our useState
    const [isActive, setIsActive] =useState({
      active: true,
      name: "education"
    })
  return ( 

    <> 
    <main>
<Navbar/>
      <div class="py-6">
        
      {/* passing props  */}
      <AuthorCard isActive={isActive} setIsActive={setIsActive}/>

{/* making each component to display one at a time using tenary if statement */}
      {
        isActive.active && isActive.name==="education" ? (
          <Education/>) :isActive.active && isActive.name=== "work"?(
            <Work/>) :(<Hobbies/>)
      }
      {/* <Hobbies/> */}
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
         

            {/* <!-- Work --> */}
          
            {/* <!-- Education --> */}
         
            {/* <!-- Hobbies --> */}
          
          </div>
          {/* <!-- /End replace --> */}
      </div>
      </main>
    
  

    </>
  )
  }
  export default App;
