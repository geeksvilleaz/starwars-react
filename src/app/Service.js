const API_URL = 'https://swapi.dev/api/';

class Service {
  getMenu() {
    return fetch(API_URL, {cache: 'force-cache'})
        .then(response => response.json())
        .then(json => {
          let menu = [];
          Object.keys(json).forEach(item => {
            menu.push({name: item, url: json[item]});
          });
          return menu;
        });
  }

  getUrl(url) {
    return fetch(url, {cache: 'force-cache'})
        .then(response => response.json())
        .then(json => {
          return json;
        });
  }
}

export default Service;
