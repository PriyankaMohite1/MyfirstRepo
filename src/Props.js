import React from 'react'

const props = ({ name }) => {

  const shoot = () => {
    alert('Login Sucessful')
  }
  return (
    <>
      <center>
        <div>
          <h2>This is this.props.first</h2>
          <h1>{name}</h1>
        </div>
        <div>
          <h1> Login Form</h1>
          <label htmlFor="userid">USER-ID</label>
          <input type="text"></input>
          <label htmlFor="password">PASSWORD</label>
          <input type="password"></input>
          <button onClick={shoot}></button>
        </div>
      </center >
    </>
  )
}

export default props;