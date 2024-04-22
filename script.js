
async function populate() {
  const response = await fetch('data.json')
  const results = await response.json();

  const previousWeeklyHours = document.querySelectorAll('#previousweekly')
  const myParas = document.querySelectorAll('.current')
  const dailyBtn = document.querySelector('.btn.daily-btn')
  const weeklyBtn = document.querySelector('.btn.weekly-btn')
  const monthlyBtn = document.querySelector('.btn.monthly-btn')
  const previousData = document.querySelectorAll('.previous')


  for (let i = 0; i < results.length; i++) {
    myParas[i].textContent = `${results[i].timeframes.weekly.current}hrs`
    previousWeeklyHours[i].textContent = ` ${results[i].timeframes.weekly.previous}hrs`

  }
  function displayDailylyData() {
    for (let i = 0; i < results.length; i++) {
      if (results[i].timeframes.daily.current === 1) {
        myParas[i].textContent = `${results[i].timeframes.daily.current}hr`
      }
      else if (results[i].timeframes.daily.previous === 1){
        previousData[i].textContent = 'Yesterday' + ' - ' + results[i].timeframes.daily.previous + 'hr'
      }
      else {
        myParas[i].textContent = `${results[i].timeframes.daily.current}hrs`
        previousData[i].textContent = 'Yesterday' + ' - ' + results[i].timeframes.daily.previous + 'hrs'
      }

    }
  }

  function displayMonthlyData() {
    for (let i = 0; i < results.length; i++) {
      myParas[i].textContent = `${results[i].timeframes.monthly.current}hrs`
      /*  previousWeeklyHours[i].textContent = results[i].timeframes.monthly.previous*/
      previousData[i].textContent = 'Last month' + ' - ' + results[i].timeframes.monthly.previous + 'hrs'
    }
  }

  function displayWeeklyData() {
    for (let i = 0; i < results.length; i++) {
      myParas[i].textContent = ` ${results[i].timeframes.weekly.current}hrs`
      /*  previousWeeklyHours[i].textContent = ` ${results[i].timeframes.weekly.previous}hrs `*/
      previousData[i].textContent = 'Last week' + ' - ' + results[i].timeframes.weekly.previous + 'hrs'

    }
  }

  dailyBtn.addEventListener('click', () => {
    displayDailylyData();
  })

  monthlyBtn.addEventListener('click', () => {
    displayMonthlyData();
  })

  weeklyBtn.addEventListener('click', () => {
    displayWeeklyData();
  })

}


populate()




