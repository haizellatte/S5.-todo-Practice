import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components';

// const Button = styled.button`
//   display: inline-flex;
//   justify-content: center;
//   background-color: antiquewhite;
//   font-size: 30px;
//   border: 0;
//   border-radius: 50%;
//   width: 4rem;
//   height: 4rem;
//   margin: 1rem;
// `;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>과제3. Todo App에 FE 프레임워크 적용</p>
      </header>
    </div>
  );
}

export default App;
