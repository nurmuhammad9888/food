import { Navigate, Route, Routes } from 'react-router-dom';
// import { Home } from './pages/Home/Home';
import { Graph } from './pages/Graph/Graph';
import { Message } from './pages/Message/Message';
import { Notification } from './pages/Notification/Notification';
import { Settings } from './pages/Settings/Settings';
import { Logout } from './pages/Logout/Logout';
import { Discount } from './pages/Discount/Discount';
import './assets/styles/main.css';
import { Heders } from './components/Heders/Heders';
import { Hederstop } from './components/Hederstop/Hederstop';
import { Main } from './components/Main/Main'


function App() {
	return (
		<div className="app d-flex">
      <div>
				<Heders />
      </div>
      <div className='app-wrap-center'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace={true}/>}/>
          <Route path='/home/*' element={<Hederstop/> } />
            {/* <Route index element={<Main />}/>  */}
      
            <Route path='cold' element={<h2>Cold</h2>}/>
          <Route path='/' element={<Navigate to="/home" replace={true}/> }/>
          <Route path='/home/*' element={<Hederstop/> }>
            <Route index element={<Main />} />
            <Route path='cold' element={<Main />}/>
            <Route path='soup' element={<h2>Soup</h2>}/>
            <Route path='grill' element={<h2>Grill</h2>}/>
            <Route path='appetizer' element={<h2>Appetizer</h2>}/>
            <Route path='dessert' element={<h2>Dessert</h2>}/>
          
          <Route path='/discount' element={<Discount/> }/>
          <Route path='/graph' element={<Graph/> }/>
          <Route path='/message' element={<Message/> }/>
          <Route path='/notification' element={<Notification/> }/>
          <Route path='/settings' element={<Settings/> }/>
          <Route path='/logout' element={<Logout/> }/>
          </Routes>
       
        </div>
      </div>
		
	);
}

export default App;
