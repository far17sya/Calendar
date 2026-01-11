function updateCalendar(){
    //For date
    const now = new Date();
    const day = now.getDate();

    //for month
    const monthNames = ["January","February","March","April","May",
        "June","July","August","September","October","November","December"]
    
    //to get actual month
    const month = monthNames[now.getMonth()];

    //connect it with variable in index.html
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

//initialize in order to call the calendar function
updateCalendar();