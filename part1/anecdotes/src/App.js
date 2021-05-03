import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Votes = (props) => {
  var max = 0
  for (var i = 0; i < props.points.length; i++){
    if (props.points[i] > props.points[max]){
      max = i
    }
  }
  
  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={props.anecdotes} selected={max} votes={props.points[max]}/>
    </div>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      {props.anecdotes[props.selected]}
      <br></br>
      has {props.votes} votes
    </div>
  )
}

const Day = (props) => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={props.anecdotes} selected={props.selected} votes={props.points[props.selected]}/>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  // States
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  // Handlers
  const handleSelected = () => {
    setSelected(Math.floor((Math.random() * 5) + 1))
  }
  const handleVote = () => {
    const pointsCopy = [...points]
    pointsCopy[selected]++

    setPoints(pointsCopy)
  }

  return (
    <div>
      <Day anecdotes={anecdotes} selected={selected} points={points}/>
      <br></br>
      <Button text='vote' handleClick={handleVote}/>
      <Button text='next anecdote' handleClick={handleSelected}/>
      <br></br>
      <Votes anecdotes={anecdotes} selected={selected} points={points}/>
      <br></br>

    </div>
  )
}

export default App