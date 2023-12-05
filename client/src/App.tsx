import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Layout from './components/Layout';
import PostList from './features/post'
import UserList from './features/user';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<PostList />} />
        <Route path='/user' element={<UserList/> } />
      </Route>
  </Routes>
  );
}

export default App;
