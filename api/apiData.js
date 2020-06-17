require("dotenv").config();

const moment = require("moment-timezone");
moment.tz.setDefault("UTC");
const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.resolve("./api/data.json"), "utf-8")
);

function generateSessions(id) {
  const sessions = [];
  const nums = id
    .replace("tt", "")
    .split("")
    .map(item => {
      let num = parseInt(item);
      if (num === 0) {
        num = 1;
      }
      if (num > 6) {
        num = num - 2;
      }
      return num;
    });
  nums.splice(nums[3], 0, nums[0]);
  nums.shift();
  nums.forEach((num, index) => {
    const date = moment()
      .startOf("day")
      .add(index, "days");
    for (let i = 0; i < num; i++) {
      const pos =
        index + i <= nums.length ? index + i : index + i - nums.length;
      const hours = nums[pos] + 12;
      const mins =
        nums[pos] < 2.5 ? 0 : nums[pos] < 5 ? 15 : nums[pos] < 7.5 ? 30 : 45;
      sessions.push({
        id: `${id}_${i}`,
        time: moment(date)
          .add(hours, "hours")
          .add(mins, "minutes"),
        seats: Math.round(
          200 -
            nums.reduce((acc, val) => {
              return acc + val;
            }) +
            num * i
        )
      });
    }
  });
  return sessions.sort((a, b) => {
    if (a.time < b.time) {
      return -1;
    } else {
      return a.time > b.time;
    }
  });
}

function cleanData(movie) {
  if (
    movie.Rated === "N/A" ||
    movie.Rated === "UNRATED" ||
    movie.Rated === "NOT RATED"
  ) {
    const last = parseInt(movie.imdbID[movie.imdbID.length - 1]);
    movie.Rated = last < 7 ? (last < 4 ? "G" : "PG-13") : "R";
  }
  return movie;
}

module.exports = () =>
  data.map(item => {
    return {
      id: item.imdbID,
      movie: cleanData(item),
      sessions: generateSessions(item.imdbID)
    };
  });
