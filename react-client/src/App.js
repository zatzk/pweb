import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './routes/MyRoutes'
import AuthContext from './contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    
    <AuthContext>
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
