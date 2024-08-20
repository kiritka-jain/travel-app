function addHours(date, hours) {
  const dateCopy = new Date(date.getTime());
  const hoursToAdd = hours * 60 * 60 * 1000;
  dateCopy.setTime(date.getTime() + hoursToAdd);
  return dateCopy;
}
const getTimeWithAddedHours = () =>{
  const date = new Date();
  const newDate = addHours(date, 2);  
  return newDate;

}
  
module.exports = getTimeWithAddedHours;
