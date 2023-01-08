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
import { Main } from './components/Main/Main'
import { Soup } from './pages/Soup/Soup';
import { Clod } from './pages/Clod/Clod';
import { Grill } from './pages/Grill/Grill';
import { Appetizer } from './pages/Appetizer/Appetizer';
import { Dessert } from './pages/Dessert/Dessert';

function App() {
	return (
		<div className="app d-flex">
      <div>
				<Heders />
      </div>
      <div className='app-wrap-center'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace={true}/>}/>
          <Route path='/home/*' element={<Hederstop/> } > 
            <Route index element={<Main />} />
            <Route path='cold' element={<Clod/>}/>
            <Route path='soup' element={<Soup/>}/>
            <Route path='grill' element={<Grill/>}/>
            <Route path='appetizer' element={<Appetizer/>}/>
            <Route path='dessert' element={<Dessert/>}/>
          </Route>
          <Route path='/discount' element={<Discount/> }/>
          <Route path='/graph' element={<Graph/> }/>
          <Route path='/message' element={<Message/> }/>
          <Route path='/notification' element={<Notification/> }/>

          <Route path='/settings' element={<Navigate to="products" replace={true}/>}/>
            <Route path='/settings/*' element={<Settings/> }>
          </Route>
          <Route path='/logout' element={<Logout/> }/>
          </Routes>
        </div> 
      </div>
	);
}

export default App;
