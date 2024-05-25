import { Outlet } from 'react-router-dom'
import './App.css'
import { TodoList } from './components/TodoList/TodoList'
import { Content } from './core/components/Content/Content'
import { Navbar } from './core/components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
    </>
  )
}

export default App
