import React from 'react'
import './App.css'
import Children from './components/Children'
import Greet from './components/Greet'
import Parent from './components/Parent'
import Person from './components/Person'
import PersonList from './components/PersonList'

function App() {
	const name = {
		first: 'Vinothkumar',
		last: 'Krishnamoorthy'
	}
	const names = [
		{
			first: 'Vinothkumar',
			last: 'Krishnamoorthy'
		},
		{
			first: 'Kalpana',
			last: 'Vinoth'
		},
		{
			first: 'Kaavyaa',
			last: 'Vinoth'
		}
	]
	return (
		<div className='App'>
			<Greet name='Vinoth' msgCount={15} />
			<Person name={name} />
			<PersonList names={names} />
			<Parent children={`${name.first} learning typescript!`} />
			<Parent>
				<Children>{`${name.first} ${name.last} learning typescript!`}</Children>
			</Parent>
		</div>
	)
}

export default App
