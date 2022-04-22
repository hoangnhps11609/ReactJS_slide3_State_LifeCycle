import React, { useEffect } from "react";

function LocationDisplay(props) {
  useEffect(() => {
    console.log("child component did mount");
    return () => {
      console.log("child component will mount");
    };
  }, []);

  console.log('render');
  return (
    <div>
      {props.errorMessage ? (
        <h3>{props.errorMessage}</h3>
      ) : (
        <h3>Latitude: {props.latitude}</h3>
      )}
    </div>
  );
}

// class LocationDisplay extends Component {

//     componentDidMount(){
//         console.log('child component did mount');
//     }

//     componentDidUpdate(){
//         console.log('child component did update');
//     }

//     componentWillUnmount(){
//         console.log('child component will unmount');
//     }

//   render() {
//     console.log('child render');
//     return (
//       <div>
//         {this.props.errorMessage ? <h3>{this.props.errorMessage}</h3> :
//           <h3>Latitude: {this.props.latitude}</h3>
//         }
//       </div>
//     )
//   }
// }

export default LocationDisplay;
