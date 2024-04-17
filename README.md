# wordle-spoiler

<details>
  <summary>Click to reveal <b>today's</b> word!</summary>
  <br>
  <b> tithe </b>
</details>

<details>
  <summary>Click to reveal <b>tomorrow's</b> word!</summary>
  <br>
  <b> facet </b>
</details>

<details>
  <summary>Click to reveal <b>yesterday's</b> word!</summary>
  <br>
  <b> shank </b>
</details>

## Note
This was repository was updated 2/7/2023 after the NYT acquisition of Wordle. Results are now based off requests to the url `https://www.nytimes.com/svc/wordle/v2/YYYY-MM-DD.json`. This means that changes to the wordle url may result in future breakages

## How can I view the solution in the browser?
Open the developer tools in Chrome. Click on the "network" tab. Under the Fetch/XHR section, you should see a request to YYYY-MM-DD.json. If you click on that request and view the "Preview" tab, you will see a JSON object containing the day's solution.