import { Navigate, Route, Routes } from 'react-router-dom';
import { Graph } from './pages/Graph/Graph';
import { Message } from './pages/Message/Message';
import { Notification } from './pages/Notification/Notification';
import { Settings } from './pages/Settings/Settings';
import { Logout } from './pages/Logout/Logout';
import { Discount } from './pages/Discount/Discount';
import './assets/styles/main.css';
import { Heders } from './components/Heders/Heders';
import { Hederstop } from './components/Hederstop/Hederstop';
import { Main } from './components/Main/Main';
import { Products } from './pages/Settings/Products/Products';

function App() {
	return (
		<div className="app d-flex">
      <div>
				<Heders />
      </div>
      <div className='app-wrap-center'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace={true}/> }/>
          <Route path='/home/*' element={<Hederstop/> }>
            <Route index element={<Main />} />
            <Route path='cold' element={<h2>Cold</h2>}/>
            <Route path='soup' element={<h2>Soup</h2>}/>
            <Route path='grill' element={<h2>Grill</h2>}/>
            <Route path='appetizer' element={<h2>Appetizer</h2>}/>
            <Route path='dessert' element={<h2>Dessert</h2>}/>
          </Route>

          <Route path='/discount' element={<Discount/> }/>
          <Route path='/graph' element={<Graph/> }/>
          <Route path='/message' element={<Message/> }/>
          <Route path='/notification' element={<Notification/> }/>
          <Route path='/logout' element={<Logout/> }/>

          <Route path='/settings/*' element={<Settings/>}>
            <Route path='appereance' element={<h2>Apperance</h2>}/>
            <Route path='restourant' element={<h2>Restourant</h2>}/>
            <Route index element={<Products/>}/>
            <Route path='notifications' element={<h2>Notifications</h2>}/>
            <Route path='security' element={<h2>Securityy</h2>}/>
            <Route path='security' element={<h2>Security</h2>}/>
            <Route path='about' element={<h2>About</h2>}/>
          </Route>
        </Routes>
      </div>
		</div>
	);
}

export default App;
