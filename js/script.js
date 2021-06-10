/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote:"I got mind control over Debo. When he here, I be quiet, but when he leave, I be talkin' again.",
    source:"Smokey",
    citation:"Friday",
    year: 1995,
    tags: ["movie quotes", "humor"]
  },
  {
    quote:"Hello boys! I'm baaack!",
    source:"Russell Casse",
    citation:"Indepedence Day",
    year:1996,
    tags: ["movie quotes"]

  }, 
  {
    quote:"Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the  square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
    source:"Rob Siltanen"
  },
  {
    quote:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    source:"Helen Keller"
  },
  {
    quote:"The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    source:"Winston Churchill"
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  let randomNumber = Math.floor( Math.random() * quotes.length);
  let selectedQuote = quotes[randomNumber];
  // let quoteObject = {};
  // quoteObject.quote += selectedQuote.quote;
  // quoteObject.source += selectedQuote.source;
  // if (!selectedQuote.citation){
  //   quoteObject = quoteObject;
  // } else {
  //   quoteObject.citation += selectedQuote.citation
  // };
  // if (!selectedQuote.year){
  //   quoteObject = quoteObject;
  // } else {
  //   quoteObject.year += selectedQuote.year
  // };
  // console.log(selectedQuote);
  // console.log(quoteObject);
  return selectedQuote;
};


/***
 * `printQuote` function
***/
function printQuote(){
  let selectedQuote = getRandomQuote();
  let html = '';
  html += `<p class="quote">${selectedQuote.quote}</p>
<p class="source"> ${selectedQuote.source}`;
  if (!selectedQuote.citation){
    html = html;
  } else {
    html += `
    <span class="citation">${selectedQuote.citation}</span>`
  };
  if (!selectedQuote.year){
    html = html;
  } else {
    html += `
    <span class="year">${selectedQuote.year}</span>`
  };
  html += `
</p>`;
return document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false)