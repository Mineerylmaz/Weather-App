const url = 'https://api.openweathermap.org/data/2.5/';
const key = '4d282ecbe209a3ec0ab765fb485532f4';


const fonk=(e) =>{
    if(e.keyCode===13){
        sonuc(aramakutusu.value)
    }
}

const sonuc =(sehir) =>{
    let query=`${url}weather?q=${sehir}&appid=${key}&units=metric&lang=tr`
    console.log(query)
    fetch(query)
    .then(hava =>{
        return hava.json()
    })
.then(degisken)
.catch(error => {
    console.error('Error fetching weather data:', error);
});


}
const degisken=(sonuc) =>{
    console.log(sonuc)
    document.querySelector('.sehir').textContent=`${sonuc.name}, ${sonuc.sys.country}`
    document.querySelector('.derece').textContent=`${Math.round(sonuc.main.temp)}C°`
    document.querySelector('.durum').textContent=`${sonuc.weather[0].description}`
    document.querySelector('.maxmin').textContent = `${Math.round(sonuc.main.temp_min)}C° - ${Math.round(sonuc.main.temp_max)}C°`;


}
const aramakutusu=document.getElementById('aramakutusu')
aramakutusu.addEventListener('keypress',fonk)