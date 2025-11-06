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

// Function to remove 'a', 'an', 'the' from start for sorting
function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands alphabetically ignoring 'a', 'an', 'the'
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Display them in the unordered list
const bandList = document.getElementById('band');
bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

