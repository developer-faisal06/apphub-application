
import { Outlet, useNavigation } from 'react-router';
import './App.css'
import NavBar from './Components/NavBar/NavBar';

function App() {
  
  const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

 
  return (
    <>
    <NavBar></NavBar>
{isNavigating && <span className="loading loading-spinner text-success"></span>}
    <Outlet></Outlet>
    
    </>
  )
}

export default App
