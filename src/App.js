//1~6까지 내 스스로 개발(시작)

import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton';
import WeatherBox from './component/WeatherBox';

//1. app이 실행되자마자 현재위치기반의 날씨가 보인다.
//2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태정보가 보인다.
//3. 5개의 버튼이 있다.(1개는 현재위치, 4개는 다른 도시)
//4. 도시버튼을 클릭할 때마다 도시별 날씨가 보인다.
//5. 현재 위치 기반 날씨 버튼을 누르면 다시 현재 위치 기반으로 돌아온다.
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

//Define the API URL
const apiKey = "c4dcd132109d1f8c94d8d25e7a55a0ff";

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");


  const handleValueChange = (newValue) => {
    setCity(newValue);
  };

  const getClickLocation = () => {
    console.log("city :", city);

    city==="Current Location" ? getCurrentLocation() : getClickLocationWeather(city, apiKey);
    //
   }

  const getClickLocationWeather = async(city, apiKey) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4dcd132109d1f8c94d8d25e7a55a0ff&units=metric`;

    console.log("ClickapiUrl:",apiUrl);
    
    //api call을 하려면 response와 await를 사용 -> response를 json() 형태로 받으면 된다., await 사용 시 비동기적 호출이므로 async를 써줘야함
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log("city data:", data);
    setWeather(data);

  }

  //현재 나의 위치의 위도 경도를 받아오는 함수
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon =position.coords.longitude;
      console.log("현재위치", lat, lon);

      getCurrentLocationWeather(lat, lon, apiKey);
    });
  };

  //Make a Get request
  const getCurrentLocationWeather = async(lat, lon, apiKey) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;  
  
  //api call을 하려면 response와 await를 사용 -> response를 json() 형태로 받으면 된다., await 사용 시 비동기적 호출이므로 async를 써줘야함
  console.log("apiURL :", apiUrl);
  let response = await fetch(apiUrl);
  
  let data = await response.json();
  setWeather(data);
  console.log("data(real):", data);

  
  // fetch(apiUrl)
  //   .then(response => {
  //     if(!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('Error', error);
  //   });
  }

  useEffect(() => {
    getCurrentLocation();
  },[]);

  useEffect(() => {
    getClickLocation();
  },[city]);
  //

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton onValueChange={handleValueChange}/>
      </div>
    </div>
  );
}

export default App;
//1~6까지 내 스스로 개발(끝)

// import { useEffect, useState } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import WeatherButton from './component/WeatherButton';
// import WeatherBox from './component/WeatherBox';

// //1. app이 실행되자마자 현재위치기반의 날씨가 보인다.
// //2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태정보가 보인다.
// //3. 5개의 버튼이 있다.(1개는 현재위치, 4개는 다른 도시)
// //4. 도시버튼을 클릭할 때마다 도시별 날씨가 보인다.
// //5. 현재 위치 기반 날씨 버튼을 누르면 다시 현재 위치 기반으로 돌아온다.
// //6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

// //Define the API URL
// const apiKey = "c4dcd132109d1f8c94d8d25e7a55a0ff";

// function App() {

//   //자식 -> 부모 값 전달을 위해 모든 함수, 변수는 다 App이 알고 있어야함. 자식 -> 부모 전달을 위해 useState의 setValue 함수를 자식에게 내릴것(중요!!)
//   //자식이 setValue함수를 받으면 값을 넣으면 됨
//   const [weather, setWeather] = useState(null);
//   const [city, setCity] = useState("");
//   const cities = ['paris','new york','tokyo','seoul'];


//   // 이미 setCity를 통해 city 값이 바뀐뒤, useEffect를 통해서 호출되었기 때문에 async를 생각할 필요가 없음(중요!!)
//   const getWeatherByCity = async(apiKey) => {
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4dcd132109d1f8c94d8d25e7a55a0ff&units=metric`;

//     //console.log("ClickapiUrl:",apiUrl);
//     let response = await fetch(apiUrl);
//     let data = await response.json();
//     console.log("city data:", data);
//     setWeather(data);

//   }

//   //현재 나의 위치의 위도 경도를 받아오는 함수
//   const getCurrentLocation = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       let lat = position.coords.latitude;
//       let lon =position.coords.longitude;
//       //console.log("현재위치", lat, lon);

//       getCurrentLocationWeather(lat, lon, apiKey);
//     });
//   };

//   //Make a Get request
//   const getCurrentLocationWeather = async(lat, lon, apiKey) => {
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`;  
  
//   //api call을 하려면 response와 await를 사용 -> response를 json() 형태로 받으면 된다., await 사용 시 비동기적 호출이므로 async를 써줘야함
//   //console.log("apiURL :", apiUrl);
//   let response = await fetch(apiUrl);
  
//   let data = await response.json();
//   setWeather(data);
//   console.log("data(real):", data);

//   }

//   useEffect(() => {
//     if(city===''){
//       getCurrentLocation();
//     }else{
//       getWeatherByCity();
//     }    
//   },[city]);

//   return (
//     <div>
//       <div className="container">
//         <WeatherBox weather={weather}/>
//         <WeatherButton cities ={cities} setCity={setCity}/>
//       </div>
//     </div>
//   );
// }

// export default App;