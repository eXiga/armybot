// Set the unit values in milliseconds.  
var msecPerMinute = 1000 * 60;  
var msecPerHour = msecPerMinute * 60;  
var msecPerDay = msecPerHour * 24;  

const calculateTimeInDays = to => {
    var today = new Date();
    var msecTargetDate = to.getTime();
    var interval = msecTargetDate - today.getTime();
    
    return Math.floor(interval / msecPerDay );
};

module.exports = { calculateTimeInDays }