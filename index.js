const fs = require('fs');
const Mustache = require('mustache');
const Template = './main.mustache';

const { fetch } = require('undici');
const moment = require('moment');

const retrieve = async (timestamp) => {
    const url = 'https://www.nytimes.com/svc/wordle/v2/';
    const res = await fetch(url + timestamp + '.json');
    const json = await res.json();
    return json.solution;
};

const getSolutions = async () => {
    const date = new Date();
    const today = moment(date).format('YYYY-MM-DD');

    date.setDate(date.getDate() + 1);
    const tomorrow = moment(date).format('YYYY-MM-DD');

    date.setDate(date.getDate() - 2);
    const yesterday = moment(date).format('YYYY-MM-DD');

    return {
        today: await retrieve(today),
        yesterday: await retrieve(yesterday),
        tomorrow: await retrieve(tomorrow)
    };
}

const generateReadMe = async () => {
    let solutions = await getSolutions();
    
    fs.readFile(Template, async (err, data) =>  {
        if (err) {
            console.error(err);
        } else {
            const output = Mustache.render(data.toString(), solutions);
            fs.writeFileSync('README.md', output);
        }
    });
}

generateReadMe();