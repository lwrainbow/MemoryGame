# MemoryGame
<p>Create a memory game in JavaScript.</p>
<p><a href="http://lianxiao.dev.fast.sheridanc.on.ca/portfolio/MemoryGame/index.html">Play</a></p>
There has:
<ul>
  <li>A css file which contains all of my style code</li>
  <li>An html file that the user will interact with</li>
  <li>A js file that contains my javascript code</li>
</ul>

## Game flow
<ol>
  <li>The player choose what size board you would like to play with: a 4x4 grid, 6x6, 8x8, 10x10.</li>
  <li>Start by randomly assigning the pictures to the board every time. Every time it runs, they should be in a different order.</li>
  <li>When the player click on a card, it will display the picture.</li>
  <li>Once the player selects a second card, it will see if they match.</li>
    <ul>
      <li>If they match, they stay faceup.</li>
      <li>If they don’t match, they are turned face down again, after waiting 3 seconds.</li>
    </ul>
  <li>The game ends when the player has found every match.</li>
    <ul><li>Once they’ve won, display to the user a congratulations message, along with how long it took them to win.</li></ul>
</ol>
