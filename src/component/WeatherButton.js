// //1~6까지 내 스스로 개발(시작)

import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({onValueChange}) => {

  const handleInputChange = (value) => {
    onValueChange(value);
  };

  return (
    <div>
      <Button variant="warning" onClick={() => handleInputChange("Current Location")}>Current Location</Button>
      <Button variant="warning" onClick={() => handleInputChange("Paris")}>PARIS</Button>
      <Button variant="warning" onClick={() => handleInputChange("NEW YORK")}>NEW YORK</Button>
    </div>
  )
}

export default WeatherButton

// //1~6까지 내 스스로 개발(끝)

// import { Button } from 'react-bootstrap';

// const WeatherButton = ({cities, setCity}) => {
//   console.log("cities:", cities);

//   return (
//     <div>
//       <Button variant="warning">Current Location</Button>

          //  {cities.map((item,index)=>(
//         <Button variant="warning" key={index} onClick={() => setCity(item)}>{item}</Button>
//       ))}
//     </div>
//   )
// }

// export default WeatherButton

