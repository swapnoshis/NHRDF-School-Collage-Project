function timeStamp(){
    let time = new Date();

    // Show Current Time
    let hours = time.getHours();
    let minitues = time.getMinutes();
    let seconds = time.getSeconds();
    let session = hours >= 12 ? 'PM' : 'AM';
    hours = hours > 12 ? hours -12 : hours;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0'+hours : hours;
    minitues = minitues < 10 ? '0'+minitues : minitues;
    seconds = seconds < 10 ? '0'+seconds : seconds;
    let currentTime = `<sapan>${hours}:${minitues}:${seconds} ${session}</span>`;
    
    // Show Current Date
    let days = time.getDay();
    let dates = time.getDate();
    let months = time.getMonth();
    let years = time.getFullYear();
    let day = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let currentDay = day[days];
    let currenMonth = month[months];
    let currentDate = `<span>${currentDay}, ${dates} ${currenMonth}, ${years}</span>`;

    document.querySelector('.clock').innerHTML = currentDate +' | '+'Current Time: '+ currentTime +' (BST)';
}

timeStamp();
setInterval(timeStamp,1000);