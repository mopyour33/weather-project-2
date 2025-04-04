import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, buttonColor, colorChange}) => {
  //console.log("cities:", cities);
  //console.log("buttonColor", buttonColor);

  return (
    <div className="weather-button">
      {cities.map((item,index)=>(
        <Button variant={buttonColor?.[index]} key={(index)} onClick={() => {
          setCity(item);
          colorChange(index);
        }}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton


// //1~6까지 내 스스로 개발(시작)

// import React from 'react'
// import { Button } from 'react-bootstrap';

// const WeatherButton = ({onValueChange}) => {

//   const handleInputChange = (value) => {
//     onValueChange(value);
//   };

//   return (
//     <div className="weather-button">
//       <Button variant="warning" onClick={() => handleInputChange("Current Location")}>Current Location</Button>
//       <Button variant="warning" onClick={() => handleInputChange("Paris")}>Paris</Button>
//       <Button variant="warning" onClick={() => handleInputChange("NEW YORK")}>New York</Button>
//     </div>
//   )
// }

// export default WeatherButton

// //1~6까지 내 스스로 개발(끝)
