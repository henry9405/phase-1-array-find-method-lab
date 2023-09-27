// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(function(game) {
      return game.result === "W";
    });
  
    // Check if a winning year was found
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }