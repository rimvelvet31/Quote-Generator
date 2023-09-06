const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote: `“Success is not final; failure is not fatal: It is the courage to continue that counts.”`,
    person: `Winston S. Churchill`
  },
  {
    quote: `“If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.”`,
    person: `Steve Jobs`
  },
  {
    quote: `“The most difficult thing is the decision to act, the rest is merely tenacity.”`,
    person: `Amelia Earhart`
  },
  {
    quote: `“Just one small positive thought in the morning can change your whole day.”`,
    person: `Dalai Lama`
  },
  {
    quote: `“Opportunities don't happen, you create them.”`,
    person: `Chris Grosser`
  },
  {
    quote: `“Take your victories, whatever they may be, cherish them, use them, but don't settle for them.”`,
    person: `Mia Hamm`
  },
  {
    quote: `“Without continual growth and progress, such words as improvement, achievement, and success have no meaning.”`,
    person: `Benjamin Franklin`
  },
  {
    quote: `“Ambition is the path to success. Persistence is the vehicle you arrive in.”`,
    person: `Bill Bradley`
  },
  {
    quote: `“Inspiration does exist, but it must find you working.”`,
    person: `Pablo Picasso`
  },
  {
    quote: `“The secret of your success is determined by your daily agenda.”`,
    person: `John C. Maxwell`
  },
  {
    quote: `“However difficult life may seem, there is always something you can do and succeed at.”`,
    person: `Stephen Hawking`
  },
  {
    quote: `“The only way of discovering the limits of the possible is to venture a little way past them into the impossible.”`,
    person: `Arthur C. Clarke`
  },
  {
    quote: `“If you don't risk anything, you risk even more.”`,
    person: `Erica Jong`
  },
  {
    quote: `“Start where you are. Use what you have. Do what you can.”`,
    person: `Arthur Ashe`
  },
  {
    quote: `“For the great doesn't happen through impulse alone, and is a succession of little things that are brought together.”`,
    person: `Vincent van Gogh`
  },
  {
    quote: `“It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.”`,
    person: `Charles Darwin`
  },
  {
    quote: `“All progress takes place outside the comfort zone.”`,
    person: `Michael John Bobak`
  },
  {
    quote: `“Everything you've ever wanted is sitting on the other side of fear.”`,
    person: `George Addair`
  },
  {
    quote: `“If there is no struggle, there is no progress.”`,
    person: `Frederick Douglass`
  },
  {
    quote: `“Though no one can go back and make a brand-new start, anyone can start from now and make a brand-new ending.”`,
    person: `Carl Bard`
  },
];

btn.addEventListener("click", function() {
  let index = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[index].quote;
  person.innerText = quotes[index].person;

});

