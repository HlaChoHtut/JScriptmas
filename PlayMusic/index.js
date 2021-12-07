const greeting = document.getElementById('greeting')
const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const audio = new Audio('bells.mp3')
const song1 = document.getElementById('song1')
const song2 = document.getElementById('song2')
const volume = document.getElementById("volume")

song1.addEventListener('click', () => {
    audio.src = "golden-freezer.mp3";
    audio.play()
    greeting.innerText = "🌟 Golder Freezer ❄️"
    if(song1.classList.add("active")){
        song1.classList.add("active")
    } else {
        song2.classList.remove("active")
    }
})

song2.addEventListener('click', () => {
    greeting.innerText = "🧑‍ A Very Happy Christmas🍷"
    audio.src = 'cold-day.mp3'
    audio.play()
    
    if(song2.classList.add('active')) {
        song2.classList.add('active')
    } else {
        song1.classList.remove('active')
    }
})

playBtn.addEventListener('click', () => {
    audio.play()
})

pauseBtn.addEventListener('click', () => {
    audio.pause()
})

stopBtn.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0;
})

volume.addEventListener('input', (a) => {
audio.volume = a.currentTarget.value / 100;
})
