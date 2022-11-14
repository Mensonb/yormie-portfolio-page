import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AuthorCard from './components/AuthorCard';
import Education from './components/Education';
import Hobbies from './components/Hobbies';

export default function App() {
  return ( 

    <> 
    <main>
<Navbar/>
      <div class="py-6">
      
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            {/* <!-- Work --> */}
          <AuthorCard/>

            {/* <!-- Work --> */}
          <Work/>
            {/* <!-- Education --> */}
           <Education/>
            {/* <!-- Hobbies --> */}
      <Hobbies/>
          </div>
          {/* <!-- /End replace --> */}
      </div>
      </main>
    
  

    </>
  )
  }
