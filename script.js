function showSermon(sermonId) {
  // Hide all sermon content
  const sermonContents = document.querySelectorAll('.sermon-content');
  sermonContents.forEach(content => content.classList.remove('active'));

  // Show the selected sermon content
  const selectedSermon = document.getElementById(sermonId);
  selectedSermon.classList.add('active');
}
