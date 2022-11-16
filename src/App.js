import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AuthorCard from './components/AuthorCard';
import Work from './components/Work';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

export default function App() {
  return ( 

    <> 
    <main>
<Navbar/>
      <div class="py-6">
      
      <AuthorCard/>
      <Work/>
      <Education/>
      <Hobbies/>
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
