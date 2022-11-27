let pk = document.getElementById("pakistan");
let ind = document.getElementById("india");
let usa = document.getElementById("usa");
let china = document.getElementById("china");
let turkey = document.getElementById("turkey");
let afg = document.getElementById("afghanistan");


function updateTime(){
    let date = new Date();
    pk.innerHTML = date.toLocaleString(undefined, 
        {timeZone: 'Asia/Karachi'}).split(", ")[1];

    ind.innerHTML = date.toLocaleString(undefined, 
        {timeZone: 'Asia/Kolkata'}).split(", ")[1];

    usa.innerHTML = date.toLocaleString(undefined, 
        {timeZone: 'America/Los_Angeles'}).split(", ")[1];

    china.innerHTML = date.toLocaleString(undefined, 
        {timeZone: 'Asia/Shanghai'}).split(", ")[1];

    turkey.innerHTML = date.toLocaleString(undefined, 
        {timeZone: 'Asia/Istanbul'}).split(", ")[1];

    afg.innerHTML = date.toLocaleString(undefined, 
        {timeZone: 'Asia/Kabul'}).split(", ")[1];

        let time = document.getElementById("alarm");
        let hour = time.value.split(":")[0]
        let minutes = time.value.split(":")[1]
        console.log(time.value);
        if(date.getHours == hour && date.getMinutes == minutes){
            console.log("Alarm is ringing")
        }
        console.log(date.getHours())
}

setInterval( updateTime, 1000);



