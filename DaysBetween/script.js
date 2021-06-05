// one of the exercise
// used quokka

const date1 = new Date("July 30, 1989");
const date2 = new Date("June 5, 2021");

const getDays = (date1, date2) => {
  const oneDay = 1000 * 60 * 60 * 24;

  const time2 = date2.getTime();
  const time1 = date1.getTime();
  console.log(time2);
  console.log(time1);

  let time = time2 - time1;
  console.log(time);

  time = time / oneDay;
  time = Math.round(Math.abs(time));

  return time;
};

/*
shorter solution
const getDays = (date1, date2) => Math.round(Math.abs(date2 - date1)/(1000 * 3600 * 24))
*/

console.log(getDays(date1, date2));
