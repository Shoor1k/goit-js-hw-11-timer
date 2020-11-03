
  const refs = {
  body: document.querySelector(`body`),
}




class CountdownTimer {
  constructor(selector, targetDate) {
    this._markupTimer()
    this.targetDate = targetDate
    this.selector = selector
    this._setTimer()
  }
 
  _markupTimer() {
    refs.body.insertAdjacentHTML(`beforeend`, `<div class="timer" id="timer-1">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>
</div>`)
  }
  _setTimer() { 
    function getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return{days, hours, mins, secs}}
  
  
    setInterval(() => {
    const currentData = new Date();
    const time = this.targetDate - currentData 
    const timeComponents = getTimeComponents(time)
    refsTimer.days.textContent = timeComponents.days
    refsTimer.hours.textContent = timeComponents.hours
    refsTimer.mins.textContent = timeComponents.mins
    refsTimer.secs.textContent = timeComponents.secs
   }, 1000)

  }
}
  


const timer = new CountdownTimer(
 '#timer-1',
 new Date('Jul 17, 2021'),
)

  

const refsTimer = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
}