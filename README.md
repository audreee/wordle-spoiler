# wordle-spoiler

<details>
  <summary>Click to reveal <b>today's</b> word!</summary>
  <br>
  <b> cheek </b>
</details>

<details>
  <summary>Click to reveal <b>tomorrow's</b> word!</summary>
  <br>
  <b> ample </b>
</details>

<details>
  <summary>Click to reveal <b>yesterday's</b> word!</summary>
  <br>
  <b> shame </b>
</details>

<i>Note: These spoilers are based on EST time-zone. The [Wordle](https://www.powerlanguage.co.uk/wordle/) puzzle solutions are generated according to your local time zone.</i>

## How do you have the solutions?
All of the Wordle game logic is in the client. Anyone can inspect the site's source code and see the logic resides in a javascript file. At the time of writing this, the file is `main.db1931a8.js`. If you're using Chrome, you can "pretty-print" the file to re-format it so it's easier to read. Or, I copied it and re-formatted it [here](https://gist.github.com/audreee/69660547c6d1259adefeaa1129b74e28#file-wordle-js). The solutions are stored in an array [`var Aa`](https://gist.github.com/audreee/69660547c6d1259adefeaa1129b74e28#file-wordle-js-L942). The game works by selecting a word from that array. So how do you know which word is selected as the daily solution? The index of the word from the solutions array is calculated in [this](https://gist.github.com/audreee/69660547c6d1259adefeaa1129b74e28#file-wordle-js-L968-L981) code. Basically, you take the date June 19, 2021 and subtract it from the local current date (this means you can change the date on your system if you want to generate a new word). After some division and some rounding, you get an index. Then, you look up that index in the array of possible solutions (using the mod-operator) to get the daily solution. 

## How can I view the solution in the browser?
Since the app uses your browser's `localStorage`, you can open the Chrome developer console and click on the application tab. Inside Local Storage, there will be a value called `gameState`. The daily solution is stored as the `solution` value. Or, if you click on the game's settings, you'll notice a number in the bottom right-hand corner, i.e. `#xxx`. That is the position of the daily solution word in the [list](https://gist.github.com/audreee/69660547c6d1259adefeaa1129b74e28#file-wordle-js-L942) of possible solutions.  