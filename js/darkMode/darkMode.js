darkMode = localStorage.getItem('darkMode')
console.log(darkMode)

if (darkMode === 'desactive') {
  console.log('light mode activé')
  document.body.removeAttribute('data-theme')
  document.getElementById("imgSearch").setAttribute('src', "img/searchDark.png")
}
if (darkMode === 'active') {
  console.log('Dark mode activé')
  document.body.setAttribute('data-theme', 'dark')
  document.getElementById("toggler").checked = true;
  document.getElementById("imgSearch").setAttribute('src', "img/searchWhite.png")
}

document.getElementById('toggler').addEventListener('change', (event) => {

  if (event.target.checked) {
    document.body.setAttribute('data-theme', 'dark')
    document.getElementById("imgSearch").setAttribute('src', "img/searchWhite.png")
    localStorage.setItem('darkMode', 'active')
  }
  else {
    document.body.removeAttribute('data-theme')
    localStorage.setItem('darkMode', 'desactive')
    document.getElementById("imgSearch").setAttribute('src', "img/searchDark.png")
  }
}
);
