import './App.css';
import React, { useEffect, useState } from 'react';
import ShowGoal from './components/ShowGoal';
import Goal from './components/Goal';

function App() {

  const [goals, setGoals] = useState([]);
  const [viewGoal, setViewGoal] = useState({});
  const [toggleView, setToggleView] = useState(true);

  function pressGoal(indexNum) {
    console.log(indexNum);
    setViewGoal(goals[indexNum-1]);
    setToggleView(false); 
  }

  function goBack() {
    setViewGoal({})
    setToggleView(true);
  }

  useEffect(() => {
    fetch('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true'
    ).then(
      (response) => {
        return response.json();
      }
    ).then(
      (data) => {
        setGoals(data);
        console.log(data);
      }
    )
  }, []);

  return (
    <div className="App">
      <h1 className='h1Tag'>FN:s Globala mål för år 2030</h1>
      {toggleView ? goals.map((goal) => {
        return <Goal goal={goal} key={goal.code} updateState={pressGoal}/>
      }): <ShowGoal viewGoal={viewGoal} goBack={goBack}/>}
    </div>
  );
}

export default App;
