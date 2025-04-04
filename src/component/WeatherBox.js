import React from 'react'

const WeatherBox = ({weather}) => {
  const temp = weather?.main?.temp;
  const fah = (temp===null? null : Math.round((weather?.main?.temp * 1.8 + 32)*100)/100);
  //console.log("섭씨:", weather?.main?.temp);
  //console.log("화씨:", fah);
  //console.log("weather:", weather);


  return (
    <div className="weather-box">
        <div>{weather?.name}</div>
        <h2>{temp}℃/{fah}화씨</h2>
        <h3>{weather?.weather?.length > 0 ? weather?.weather[0].description: "날씨정보없음"}</h3>
    </div>
  )
}

export default WeatherBox



// //1~6까지 내 스스로 개발(시작)

// import React from 'react'

// const WeatherBox = ({weather}) => {
//   const temp = weather?.main?.temp;
//   const fah = (temp===null? null : Math.round((weather?.main?.temp * 1.8 + 32)*100)/100);
//   console.log("섭씨:", weather?.main?.temp);
//   console.log("화씨:", fah);
//   console.log("weather:", weather);


//   return (
//     <div className="weather-box">
//         <div>{weather?.name}</div>
//         <h2>{temp}℃/{fah}화씨</h2>
//         <h3>{weather?.weather?.length > 0 ? weather?.weather[0].description: "날씨정보없음"}</h3>
//     </div>
//   )
// }

// export default WeatherBox

// //1~6까지 내 스스로 개발(끝)