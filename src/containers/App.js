import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'
import Errorboundary from '../components/Errorboundary';
 
function  App(){
 const[robots, setrobots]= useState([])
 const[searchfield, setSearchfield]= useState('')
 const[count,setCount]= useState(0)

 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>{ setrobots(users)});
    console.log(count)
   
},[count]) //only run if count changes.

    const onSearchChange = (event) => {
        setSearchfield( event.target.value)
    }

  const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

    return !robots.length?
    <h1>Loading..</h1>:

           (
                  <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <button onClick={()=>setCount(count+1)}>Click</button>
                    
                    <SearchBox SearchChange={ onSearchChange} />
                    <Scroll>
                    <Errorboundary>
                   < CardList robots={filteredRobots} />
                   </Errorboundary>
                   </Scroll> 
                </div>
            );
        }  
    
 


export default App; 