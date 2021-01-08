/*<div class="champion - card">
    <img class="champion-image" src="./images/card-Aatrox_0.jpg" alt="" >
    <a href="#" class="champion-name">AATROX</a>
</div >*/
let data = '';

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

httpGetAsync('http://ddragon.leagueoflegends.com/cdn/11.1.1/data/pt_BR/champion.json', (response) => {
  data = JSON.parse(response);

  let champions = Object.values(data["data"]);

  champions.map((champ) => {
    let container = document.querySelector('.champion-container');
    container.innerHTML +=
      `<div class="champion-card">
        <a href="./pages/champion/champion.html" onclick="handleChampion('${champ.id}')">
        <img class="champion-image" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg" alt="" >
        <p>${champ.name}</p>
        </a>
      </div>`
  });
});

function handleChampion(champion) {
  localStorage.setItem('champion', champion);
}