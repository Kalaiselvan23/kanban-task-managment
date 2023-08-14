import { Provider } from 'react-redux'
import './App.css'
import Navbar from './Components/Navbar'
import store from './redux/store.js'
import TaskView from './Components/TaskView'

function App() {

  return (
    <>
    <Provider store={store}>
      <Navbar/>
      <TaskView/>
    </Provider>
    </>
  )
}

export default App
