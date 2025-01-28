loadSavedText();

function saveText() {
  let textArea = document.getElementById('text');
  localStorage.setItem('savedText', textArea.value);
}

function showSavedText() {
  let savedText = localStorage.getItem('savedText');
  let savedTextContainer = document.getElementById('saved-text');
  if (savedText) {
    alert(savedText);
    savedTextContainer.style.display = 'block';
  } else {
    savedTextContainer.style.display = 'none';
  }
}

function clearSavedText() {
  localStorage.removeItem('savedText');
  document.getElementById('text').value = '';
  document.getElementById('saved-text').style.display = 'none';
}