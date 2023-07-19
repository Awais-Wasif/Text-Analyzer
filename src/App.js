import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/about';

function App() {

	const [Mode,setMode] = useState('light')

	 const ToggleMode = () =>
	{
		if(Mode === 'light')
		{
			setMode('dark')
			document.body.style.background = 'black'
		}
		else
		{
			setMode('light')
			document.body.style.background = 'white'
		}
	}
	
return (
	<>
	<Navbar title = "Home" mode ={Mode}  toggleMode ={ToggleMode}></Navbar>
	<br></br>
	<div className='container'>
	<TextForm heading = "Enter text to analyze"  mode ={Mode} ></TextForm>
	</div>
	{/* <About></About> */}
	</>
);
}

export default App;
