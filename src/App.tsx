import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'
//  ? is optional

export interface IState {
  people: {
    name : string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people,setPeople] = useState<IState["people"]>([
    {
    name: "Jay",
    url:"https://storage.jewheart.com/content/users/avatars/3746/avatar_3746_500.jpg?1558628223",
    age: 21,
    note:"This is a test for Jay"
  },
])


  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
