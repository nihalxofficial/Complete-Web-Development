import './App.css'

function App() {
  return (
    <>
      <h1>Student Details</h1>
      <Student name="X" classType="C"></Student>
      <Student name="Y"classType="B"></Student>
      <Student name="Z"></Student>
      
    </>
  )
}

function Student({name,classType}){
  // const name = "X"
  const roll = 2
  const address = "abc road"
  const grade = "A+"
  const passed = true
  return (
    <div>
      <h2>Name is: {name} </h2>
      <p>Roll is : {roll}</p>
      <p>address is : {address}</p>
      <p>grade is : {grade}</p>
      <p>Status : {passed}</p>
      <p>Class is : {classType}</p>
    </div>
  )
}


export default App
