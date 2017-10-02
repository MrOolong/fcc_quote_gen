var quoteArray = []

quoteArray[0] = "Courage is almost a contradiction in terms. It means a strong desire to live taking the form of a readiness to die.";
quoteArray[1] = "A dead thing can go with the stream, but only a living thing can go against it.";
quoteArray[2] = "Men do not differ much about what things they will call evils; they differ enormously about what evils they will call excusable.";
quoteArray[3] = "Fallacies do not cease to be fallacies because they become fashions.";
quoteArray[4] = "If we want to give poor people soap we must set out deliberately to give them luxuries. If we will not make them rich enough to be clean, then empathically we must do what we did with the saints. We must reverence them for being dirty.";
quoteArray[5] = "Art, like morality, consists of drawing the line somewhere.";
quoteArray[6] = "There are in this world of ours only two kinds of speakers. The first is the man who is making a good speech and won’t finish. The second is the man who is making a bad speech and can’t finish. The latter is the longer.";
quoteArray[7] = "There are two kinds of revolutionists, as of most things – a good kind and a bad. The bad revolutionists destroy conventions by appealing to fads – fashions that are newer than conventions. The good do it by appealing to facts that are older than conventions.";
quoteArray[8] = "It is perfectly obvious that in any decent occupation (such as bricklaying or writing books) there are only two ways (in any special sense) of succeeding. One is by doing very good work, the other is by cheating.";
quoteArray[9] = "I would rather a boy learnt in the roughest school the courage to hit a politician, or gained in the hardest school the learning to refute him – rather than that he should gain in the most enlightened school the cunning to copy him.";

var credits = " -G.K. Chesterton";

//console.log(quoteArray.q1 + credits);

function randomQuoteGen() {
  var randomMathGen = Math.floor(Math.random()*(quoteArray.length));
  document.getElementById('quotebox').innerHTML = '"' + quoteArray[randomMathGen] + '"' + credits;
};