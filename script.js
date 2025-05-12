const quotes = [
  "The present moment is filled with joy and happiness. If you are attentive, you will see it. – Thich Nhat Hanh",
  "You don’t have to control your thoughts. You just have to stop letting them control you. – Dan Millman",
  "Serenity comes when you trade expectations for acceptance. – Unknown",
  "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure. – Oprah Winfrey",
  "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. – Thich Nhat Hanh",
  "The mind is like water. When it’s turbulent, it’s hard to see. When it’s calm, everything becomes clear. – Prasad Mahes",
  "Peace is the result of retraining your mind to process life as it is, rather than as you think it should be. – Wayne Dyer",
  "You cannot always control what goes on outside, but you can always control what goes on inside. – Wayne Dyer",
  "Calmness is the cradle of power. – Josiah Gilbert Holland",
  "Within you, there is a stillness and a sanctuary to which you can retreat at any time. – Hermann Hesse",
  "Do not let the behavior of others destroy your inner peace. – Dalai Lama",
  "The best way to capture moments is to pay attention. This is how we cultivate mindfulness. – Jon Kabat-Zinn",
  "Each morning we are born again. What we do today is what matters most. – Buddha",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "Let go of the thoughts that don’t make you strong. – Unknown",
  "The greatest weapon against stress is our ability to choose one thought over another. – William James",
  "Your calm mind is the ultimate weapon against your challenges. – Bryant McGill",
  "Be happy in the moment, that’s enough. Each moment is all we need, not more. – Mother Teresa",
  "When you realize nothing is lacking, the whole world belongs to you. – Lao Tzu",
  "Mindfulness is a way of befriending ourselves and our experience. – Jon Kabat-Zinn",
  "The only way to live is by accepting each minute as an unrepeatable miracle. – Tara Brach",
  "Stillness is where creativity and solutions to problems are found. – Eckhart Tolle",
  "The quieter you become, the more you can hear. – Ram Dass",
  "To understand the immeasurable, the mind must be extraordinarily quiet, still. – Jiddu Krishnamurti",
];

const facts = [
  "The human brain can process information as fast as 120 meters per second.",
  "Honey never spoils due to its natural preservatives like low water content and high acidity.",
  "Writing down your thoughts can reduce stress by helping you process emotions.",
  "The shortest war in history lasted 38 minutes.",
  "Drinking water can improve focus and reduce anxiety by keeping your brain hydrated.",
  "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
  "Bananas are berries, but strawberries are not.",
  "Taking short breaks during work can boost productivity by up to 13%.",
  "The shortest bone in the human body is the stapes in the ear, about 3 mm long.",
  "Deep breathing increases oxygen flow to the brain, reducing stress hormones.",
  "The first computer 'bug' was an actual insect stuck in a relay.",
  "Chewing gum can improve concentration and memory by increasing blood flow to the brain.",
  "Octopuses have three hearts and can change color to blend into their surroundings.",
  "Walking for 20 minutes a day can reduce stress and improve mood.",
  "The Great Wall of China is over 21,000 kilometers long.",
  "Listening to music can lower cortisol levels and promote relaxation.",
  "A single lightning bolt can heat the air around it to 30,000°C.",
  "Practicing gratitude can increase happiness by up to 25%.",
  "The shortest war in ancient history was the Anglo-Zanzibar War of 1896.",
  "Smiling, even when forced, can trick your brain into feeling happier.",
  "The shortest war in modern history was the Six-Day War of 1967.",
  "Taking a 10-minute nap can improve alertness and cognitive performance.",
  "The human body contains about 0.2 milligrams of gold, most of it in the blood.",
  "Laughing for 10-15 minutes can burn up to 40 calories and reduce stress.",
  "The first email was sent in 1971 by Ray Tomlinson.",
];

const steps = [
  { text: "Inhale", class: "inhale", duration: 4000 },
  { text: "Hold", class: "hold", duration: 4000 },
  { text: "Exhale", class: "exhale", duration: 4000 },
];

let isBreathing = false;
let intervalId = null;
let currentStep = 0;

const breathingCircle = document.getElementById("breathingCircle");
const startButton = document.getElementById("startBreathing");
const stopButton = document.getElementById("stopBreathing");
const quoteElement = document.getElementById("quote");
const factElement = document.getElementById("fact");

// Initialize with random quote and fact
quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
factElement.textContent = facts[Math.floor(Math.random() * facts.length)];

function startBreathing() {
  if (isBreathing) return;
  isBreathing = true;
  startButton.disabled = true;
  stopButton.disabled = false;

  currentStep = 0;
  updateBreathingState();

  intervalId = setInterval(() => {
    currentStep = (currentStep + 1) % steps.length;
    updateBreathingState();
  }, steps[currentStep].duration);
}

function stopBreathing() {
  if (!isBreathing) return;
  isBreathing = false;
  clearInterval(intervalId);
  intervalId = null;
  breathingCircle.textContent = "Click to Start";
  breathingCircle.className = "breathing-circle";
  startButton.disabled = false;
  stopButton.disabled = true;
}

function updateBreathingState() {
  const step = steps[currentStep];
  breathingCircle.textContent = step.text;
  breathingCircle.className = `breathing-circle ${step.class}`;
}

function getRandomQuote() {
  quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomFact() {
  factElement.textContent = facts[Math.floor(Math.random() * facts.length)];
}
