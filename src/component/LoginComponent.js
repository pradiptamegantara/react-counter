import { Component } from 'react';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { usernameInput: '', passwdInput: '' };
  }

  handleSubmit = (event) => {
   
    let validInput = true;
    let errorMessage = [];
    let errorCount = 0;
    if (!this.state.usernameInput.includes('@')) {
      validInput = false;
      errorCount++;
      errorMessage.push(`${errorCount}. Email tidak valid`);
    }
    if (this.state.passwdInput.length < 6) {
      validInput = false;
      errorCount++;
      errorMessage.push(`${errorCount}. Password tidak boleh kurang dari 6 karakter`);
    }
    if (validInput) {
      if (
        this.state.usernameInput === 'pradiptamegantara@yahoo.com' &&
        this.state.passwdInput === 'password'
      ) {
        alert(
              `Selamat datang ${this.state.usernameInput}, login berhasil!`
        );
      } else {
        alert(
          'Email atau password yang anda masukkan salah')
      }
    } else {
      alert(errorMessage);
    }
  };

  render() {
    const allContainer = {
      backgroundImage: 'url(/asset/hi-tech.jpg)',
      height: '100%',
      width: '100%',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    };
    const loginContainer = {
      backgroundColor: 'white',
      height: '200px',
      width: '250px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      padding: '10px',
      borderRadius: '10px',
      gap: '-15px',
    };
    const textContainer = {
      height: '250px',
      width: '250px',
      padding: '10px',
      paddingTop: '60px',
      color: 'white',
    };
    const input = {
      marginTop: '3px',
      height: '25px',
      width: '229px',
    };
    const button = {
      height: '35px',
    };
    const header = {
      marginBlockStart: '0',
      marginBlockEnd: '0',
      fontWeight: 'normal',
    };
    return (
      <>
        <div style={allContainer}>
          <div style={textContainer}>
            <h1 style={header}>SMM Batch 2</h1>
            <h4 style={header}>
              <i>Front End Hands On</i>
            </h4>
          </div>
          <div style={loginContainer}>
            <div>
              <label>User Name</label>
              <br />
              <input
                style={input}
                type="text"
                name="username"
                id="username"
                onChange={(event) => {
                  this.setState({
                    usernameInput: event.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label>Password</label>
              <br />
              <input
                style={input}
                type="password"
                name="password"
                id="password"
                onChange={(event) => {
                  this.setState({
                    passwdInput: event.target.value,
                  });
                }}
              />
            </div>
            <button
              style={button}
              type="submit"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      </>
    );
  }
}