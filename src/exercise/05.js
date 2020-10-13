// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// 1. Solution inline coding, no custom component
// const smallBox = <div className="box--small" style={{
//   backgroundColor: 'lightblue',
//   fontStyle: 'italic'
// }}> small lightblue box</div >
// const mediumBox = <div className="box--medium box" style={{
//   backgroundColor: 'pink',
//   fontStyle: 'italic'
// }}>medium pink box</div>
// const largeBox = <div className="box--large box" style={{
//   backgroundColor: 'orange',
//   fontStyle: 'italic'
// }}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// 2. Create Custom Box Component

// const Box = ({ className, style, children }) => (
//   <div className={className} style={style}>{children}</div>
// )


// function App() {
//   return (
//     <div>
//       <Box className='box--small' style={{
//         backgroundColor: 'lightblue',
//         fontStyle: 'italic'
//       }}> small lightblue box</Box>
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// 3.Create an API for box size

// const Box = ({ className, style, children }) => {
//   switch (className) {
//     case 'small':
//       className = 'box--small box'
//       break;
//     case 'medium':
//       className = 'box--medium box'
//       break;
//     case 'large':
//       className = 'box--large box'
//       break;
//     default:
//       className = '';
//   }
//   return <div className={className} style={style}>{children}</div>
// }


// function App() {
//   return (
//     <div>
//       <Box className='large' style={{
//         backgroundColor: 'lightblue',
//         fontStyle: 'italic'
//       }}> small lightblue box</Box>
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }


// Final Solution

const Box = ({ className, style, size, ...restProps }) => {
  const sizeClassName = size ? `box--${size}` : ''
  return <div
    className={`box ${sizeClassName}`}
    style={{
      fontSize: 'italic',
      ...style
    }}
    {...restProps}
  ></div >
}

function App() {
  return (
    <div>
      <Box size='small' style={{
        backgroundColor: 'lightblue',
      }}> small lightblue box</Box>
      <Box size="medium" style={{
        backgroundColor: 'pink'
      }}> medium pink box</Box>
      <Box size="large" style={{
        backgroundColor: 'orange'
      }}> large orange box</Box>
    </div>
  )
}
export default App
