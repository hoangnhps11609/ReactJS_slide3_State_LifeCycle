import './App.css';
import React, { useState, useEffect} from 'react'
import LocationDisplay from './components/LocationDisplay';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(position=>{
      setLatitude(position.coords.latitude);
    }, error=>{
      setErrorMessage(error)
    });
    console.log('componentDidMount -Effect');
    return () => {
      console.log('componentWillUnmount - Cleanup');
    };
  }, [])
 
  console.log('child render');
  return (
    <div className="App">

      <LocationDisplay latitude={latitude} errorMessage={errorMessage}></LocationDisplay>
      {/* {latitude ? <h3>Latitude: {latitude}</h3> :
        <h3>Error: {errorMessage}</h3>
      } */}
    </div>
  );
}



// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       latitude:null,
//       errorMessage: '',
//       isDisplayed: true
//     }

//     console.log('constructor');
//   }

//   componentDidMount(){
//     console.log('componentDidMount');
//     window.navigator.geolocation.getCurrentPosition(position=>{
//       this.setState({latitude: position.coords.latitude});
//     }, error=>{
//       this.setState({errorMessage:error})
//     });
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate');
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount');
//   }

//   componentDidCatch(){
//     console.log('componentDidCatch');
//   }



//   render() {
//     console.log('render');
//     return (
//       <div>
//         {
//           this.state.isDisplayed && <LocationDisplay latitude={this.state.latitude} errorMessage={this.state.errorMessage}></LocationDisplay>
//         }
//       </div>
//     )
//   }
// }


export default App;
