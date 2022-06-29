import  {Routes, Route} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'
import Costumers from '../pages/Costumers'
import New from '../pages/New';
import ProtectedRoute from './protectedRoute'

 export default function MyRoutes(){
    return(
       <Routes>
          <Route exact path='/' element={<SignIn/>}/>
          <Route exact path='/register' element={<SignUp/>}/>
          <Route exact path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route exact path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          <Route exact path='/costumers' element={<ProtectedRoute><Costumers/></ProtectedRoute>}/>
          <Route exact path='/new' element={<ProtectedRoute><New/></ProtectedRoute>}/>
       </Routes> 
    );
}