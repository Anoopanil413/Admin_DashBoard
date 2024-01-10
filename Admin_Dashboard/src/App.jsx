
import './App.css'
import DashBoard from './components/DashBoard'
import Nav from './components/Nav'
import Test from './components/test'


import { styled } from '@mui/material/styles';

const Drawer = styled('div')({
  position: 'absolute',
  marginTop: '67px !important',
  backgroundColor: 'black',
  border: 'solid red 5px',
  top: '67px',
});


function App() {

  return (
    <>

      <Test />
      <Nav />
      <div className='drawerComp'>
        <DashBoard />
      </div>





    </>
  )
}

export default App
