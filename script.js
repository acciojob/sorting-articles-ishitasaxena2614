const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

function strip(bandName) {
  // remove 'a ', 'an ', 'the ' from beginning, case insensitive
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  if (strip(a) > strip(b)) return 1;
  else if (strip(a) < strip(b)) return -1;
  else return 0;
});

const ul = document.getElementById('band');

// populate after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
});


