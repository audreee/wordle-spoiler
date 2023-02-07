const fetch = require('node-fetch');
const fs = require('fs');
const Mustache = require('mustache');
const Template = './main.mustache';

let getToday = () => {
  let today = new Date()
  return today.toISOString().slice(0, 10)
}

const getYesterday = () => {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  let yesterday = d.toISOString().split('T')[0];
  return yesterday
};

const getTomorrow = () => {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  let tomorrow = d.toISOString().split('T')[0];
  return tomorrow
};

async function fetchSolution(date) {
  let url = `https://www.nytimes.com/svc/wordle/v2/${date}.json`
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data.solution;
  } catch (error) {
      console.error(error);
  }
}

async function renderSolution(date) {
  const solution = await fetchSolution(date);
  return solution;
}

const generateReadMe = () => {
  let today = renderSolution(getToday());
  let yesterday = renderSolution(getYesterday());
  let tomorrow = renderSolution(getTomorrow());
  let solutionObj;
  Promise.all([today, yesterday, tomorrow])
    .then((solutions) => {
      console.log(solutions);
      solutionObj = {
        today: solutions[0],
        yesterday: solutions[1],
        tomorrow: solutions[2]
      }
    })
    .then(() => {
      console.log(solutionObj)
      fs.readFile(Template, (err, data) =>  {
        if (err) {
            console.error(err);
        } else {
            const output = Mustache.render(data.toString(), solutionObj);
            fs.writeFileSync('README.md', output);
        }
      });
    }
    );
}

generateReadMe();