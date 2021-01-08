
let champion = localStorage.getItem('champion');

//splash.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;

let html = {
  splash: document.querySelector('.splash'),
  name: document.querySelector('.champ-name'),
  title: document.querySelector('.champ-title'),
  desc: document.querySelector('.champ-desc p'),
};

let champ = {
  splash: '',
  name: '',
  title: '',
  desc: ''
};

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

httpGetAsync('http://ddragon.leagueoflegends.com/cdn/11.1.1/data/pt_BR/champion/' + champion + '.json', (response) => {
  let res = JSON.parse(response);

  champ.name = res['data'][champion].name;
  champ.title = res['data'][champion].title;
  champ.desc = res['data'][champion].lore;
  champ.splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;

  console.log(champ);
  setHTML();
});

function setHTML() {
  html.splash.src = champ.splash;
  html.name.innerHTML = champ.name;
  html.title.innerHTML = champ.title;
  html.desc.innerHTML = champ.desc;
}