import logo from './logo.svg';
import './App.css';
import BodyComponent from './component/BodyComponent';
import BodyComponentFunc from './component/BodyComponentFunc';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Content from './component/Content';
import Footer from './component/Footer';
import Parent from './component/Parent';
import Child from './component/Child';
import Greet from './component/Greet';
import Counter from './component/Counter';

function App() {
  // jsx: memanggil sebuah variabel trs di convert variablenya
// const enigma ='Enigmacamp'; // bisa buat var di dalam func app
// const name = <h1> Hello {enigma}</h1>// jangan lupa pake {} waktu manggil const enigma. hasil: hello enigmacamp
// function sayHello(name){ // bisa dibuat function di dalam function app
//   return hello ${name}
// }
// // buat func dan var harus diatas return
// const buttontext ={
//   text : 'Send'
// }
// // object styling
// const myStyle ={
//   color: 'red',
//   fontSize:'100px'
// }

  return (
    <>
    {/* {name} */}
    {/* inline styling: penulisan seperti object, makannya dibungkus {{}} */}
    {/* <h1 style={{color: 'red', fontSize:'100px'}}>{sayHello(enigma)}</h1>  */}
    {/* object styling */}
    {/* <h1 style={myStyle}>{sayHello(enigma)}</h1>  */}
    {/* css stylesheet */}
    {/* <button className='my-button'>{buttontext.text}</button> */}
    {/* <label htmlFor='name'>Enter Name</label>  */}
    {/* <BodyComponent/>
    <BodyComponentFunc/> */}
    {/* <Navbar/>
    <div style={{minHeight:'87vh'}}>
    <Content/>
    </div>
    <Footer/> */}

    {/* props */}
    {/* <BodyComponent secondName='tikuy'/>
    <BodyComponentFunc firstName=' tika'/>
    <Parent name='tika' age={20}/> */}

    {/* state */}
    <Greet/>
    <Counter/>
    </>
  );
}

export default App;

// react styling ada 3:
// inline styling: sama kayak di css, cuma untuk masukin stylenya dengan double kurng kurawal {{}}
// object styling
// css stylesheet: edit app.css, buat file css, terus import di file js