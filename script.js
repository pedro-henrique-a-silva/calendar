
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

const createDays = () => {
  const ulDays = document.querySelector('#days');
  const holidays = [24, 25, 31];
  const fridays = [4, 11, 18, 25];
  
  for (let decemberDay of decemberDaysList) {
    const liDays = document.createElement('li');
    liDays.classList.add('day');
    liDays.innerText = decemberDay;
    liDays.id = decemberDay;

    if (holidays.includes(decemberDay)) {
      liDays.classList.add('holiday');
    }
    
    if (fridays.includes(decemberDay)) {
      liDays.classList.add('friday');
    }
    ulDays.appendChild(liDays);
  }
}

createDays();

const changeColorHoliday = () => {

  const btnHoliday = document.querySelector('#btn-holiday');

  btnHoliday.addEventListener('click', () => {
    const holidays = document.querySelectorAll('.holiday');

    for (let holiday of holidays) {
      if (!holiday.classList.contains('background-holiday')) {
        holiday.classList.add('background-holiday');
      } else {
        holiday.classList.remove('background-holiday');
      }
    }
  })
}

changeColorHoliday();

const changeFridayValue = () => {
  const btnFridays = document.querySelector('#btn-friday');

  btnFridays.addEventListener('click', () => {
    const fridays = document.querySelectorAll('.friday');

    for (let friday of fridays) {
      if (friday.innerText === 'Sextou') {
        friday.innerText = friday.id;
      } else {
        friday.innerText = 'Sextou';
      }
    }
  })
}

changeFridayValue();

const zoomInOut = () => {
  const days = document.querySelectorAll('.day');
  
  for (let day of days) {
    day.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
    })

    day.addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
    })
  }
};

zoomInOut();

const markCalendar = () => {
  const tasks = document.querySelectorAll('.task');
  const days = document.querySelectorAll('.day');

  for (let task of tasks) {
    task.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
  
      if (event.target.classList.contains('selected')) {
        event.target.classList.remove('selected')
      }else {
        event.target.classList.add('selected');
      }

      if (selected) {
        selected.classList.remove('selected');
      }

    })
  }

  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');

      if (days[index].style.color !== '') {
        days[index].style.color = '';
      } else {
        days[index].style.color = selected.style.backgroundColor;
      }
    })
  }

}

markCalendar();