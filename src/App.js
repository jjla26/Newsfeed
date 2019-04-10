import React, { Component } from 'react';
import './App.css';
import Container from './components/container'
import Button from './components/button'
import Input from './components/input'
import Form from './components/form'


class App extends Component {
  state = {
    title: 'Log in and enjoy the App',
    register: false
  } 

  handleClick = () => {
    const { register } = this.state
    if(register){
      this.setState({register: false })
    }else{
      this.setState({register: true })
      }
  }

  login = () => {

  }

  register = () => {
    
  }

  render() {
  const { title, register } = this.state

    return (
      <div >
        <Container title={title}>
          <Form>

            <Input label="Username" type="text" placeholder="Ex: jjla" name="name"/>
            <Input label="Password" type="password" placeholder="" name="password"/>
            {register &&
              <Input label="Confirm Password" type="password" placeholder="" name="confirmPassword"/>}
            {!register && 
            
              <Button color='primary'>
                Sign In
              </Button>}
            
            {register && 
              <Button color='primary'>
                Sign UP
              </Button>}
            {register &&
              <p>
                <a onClick={this.handleClick}>
                  Sign UP
                </a>
              </p>}
            {!register &&
              <p>
                <a onClick={this.handleClick}>
                  Sign In
                </a>
              </p>}
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
