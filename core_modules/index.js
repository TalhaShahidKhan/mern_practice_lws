const School = require("./events");
const school = new School();
school.on("bellRing", ({ period, text }) => {
  console.log(`${period} ${text}`);
});

school.startPeriod();
