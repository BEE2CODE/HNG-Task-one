const currentDay = document.querySelector('#currentDay')
const currentTime = document.querySelector('#currentTimeUTC')

const getDate = () => {
    const today = new Date();
    const day = today.getDate ();
    const dayList =['',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thurday',
        'Friday',
        'Saturday',
        'Sunday'

    ];

    let displayDay = (dayList[day])
    currentDay.textContent=displayDay


    const utcMilliSeconds = Date.now();
    currentTime.textContent = utcMilliSeconds;
}

getDate();
setInterval(getDate, 1000);



// const currentDayOfTheWeek = document.querySelector(".currentDayOfTheWeek")
// const displayCurrentUtcTime = document.querySelector(".currentUTCTime");

// const getDate = () =>{
//   const today =new Date();
//   const day = today.getDay();
//   const dayList = [ "",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursay",
//       "Friday",
//       "Saturday",
//       "Sunday",
//     ];

//     let dispalyCurrentDay = ( dayList[day])
//     currentDayOfTheWeek.textContent = dispalyCurrentDay

//     const utcMilliSeconds = Date.now();
//     displayCurrentUtcTime.textContent = utcMilliSeconds;
// }

// getDate();
// setInterval(getDate, 1000);