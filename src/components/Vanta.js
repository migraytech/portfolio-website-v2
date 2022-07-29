
// import React from 'react'
// import * as THREE from 'three'
// import FOG from '../vanta.globe.min.js';

// class Vanta extends React.Component {
//     constructor() {
//       super()
//       this.vantaRef = React.createRef()
//     }
//     componentDidMount() {
//       this.vantaEffect = FOG({
//         el: this.vantaRef.current,
//         THREE: THREE,
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         highlightColor: 0x628e4d,
//         midtoneColor: 0xbb704f,
//         lowlightColor: 0xd41585
//       });
//     }
//     componentWillUnmount() {
//       if (this.vantaEffect) {
//         this.vantaEffect.destroy()
//       }
//     }
//     render() {
//       return <div id='vanta' ref={this.vantaRef}>

//       </div>
//     }
//   }
  
// export default Vanta;