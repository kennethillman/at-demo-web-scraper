import cheerio from 'cheerio'
import axios from 'axios'

export const state = () => ({
  scrape: false,
  url: false
})

export const mutations = {
  setScrape(state, data) {
    state.scrape = data
  },
  setUrl(state, data) {
    state.url = data
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { req }) {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');

    let newUrl = "https://edition.cnn.com/asia/live-news/coronavirus-outbreak-02-" + dd +"-20-intl-hnk/index.html";
    commit('setUrl', newUrl)

    let response = await axios.get(newUrl)

    let $ = cheerio.load(response.data);
    let newsItems = $('.ls-template article');
    let newsList = [];

    $('.ls-template article').each(function(index, element){

      let modIndex = index -1;

      if (index > 0 ) {

        newsList[modIndex] = {};

        let header = $(element).find('header h2');
        newsList[modIndex]['name'] = $(header).text();

        let from = $(element).find('header p');
        newsList[modIndex]['from'] = $(from).text();

        let image = $(element).find('figure img');
        newsList[modIndex]['image'] = $(image).attr('src')
      }

    });

    commit('setScrape', newsList)

  },
  setScrape(vuexContext, data) {
    vuexContext.commit('setScrape', data)
  },
  setUrl(vuexContext, data) {
    vuexContext.commit('setUrl', data)
  }
}

export const getters = {
  getScrape(state) {
    return state.scrape
  },
  getUrl(state) {
    return state.url
  }
}
