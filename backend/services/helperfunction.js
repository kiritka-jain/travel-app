function formatTime(date) {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  }

const getTimeWithAddedHours=(hoursToAdd)  => {
    const currentTime = new Date();
    const futureTime = new Date(currentTime.getTime() + hoursToAdd * 60 * 60 * 1000); 
    return formatTime(futureTime);
  

}


  
  
module.exports = getTimeWithAddedHours;