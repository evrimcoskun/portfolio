<template>
  <div>
    <h2>Work</h2>
    <p>Some of my work</p>
    <div class="works">
      <div v-for="work in works" :key="work.title" class="work">
        <h3>{{work.title}}</h3>
        <img :src="work.screenshot" :alt="work.title" class="screenshot">
        <p>{{work.description}}</p>
        <a :href="work.weblink" target="_blank" class="button">View</a>
        <a :href="work.github" target="_blank" class="button button__secondary">Github</a>
        <h4>Technologies used</h4>
        <a v-for="technology in work.technologies" :key="technology.index" :href="technologyLink(technology)" class="work-technology">{{technology}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    technologyLink(technology) {
      return this.tecnologies[technology]
    }
  },
  computed: {
    
  },
  data() {
    return {
      works: [
        {
          title: 'myFlix',
          weblink: 'https://ec-myflix-api.herokuapp.com/client/',
          github: 'https://github.com/evrimcoskun/myFlix',
          description: 'A web applicaton that lists movies. User can add/remove favorites.',
          screenshot: './screenshots/myFlix.png',
          technologies: ['react', 'reactRedux', 'nodejs', 'express', 'bootstrap', 'heroku', 'parcel']
        },
        {
          title: 'Awesome Quiz',
          weblink: 'https://evrimcoskun.github.io/awesome-quiz/',
          github: 'https://github.com/evrimcoskun/awesome-quiz',
          description: 'A web applicaton that lists movies. User can add/remove favorites. ',
          screenshot: './screenshots/awesome-quiz.png',
          technologies: ['angular', 'typescript', 'material'],
        },
        {
          title: 'Awesome To-Do',
          weblink: 'https://evrimcoskun.github.io/awesome-todo/',
          github: 'https://github.com/evrimcoskun/awesome-todo',
          description: 'A web applicaton that lists movies. User can add/remove favorites. ',
          screenshot: './screenshots/awesome-todo.png',
          technologies: ['vuejs', 'material'],
        },
        {
          title: 'Pokedex',
          weblink: 'https://evrimcoskun.github.io/pokedex-jquery/',
          github: 'https://github.com/evrimcoskun/pokedex-jquery',
          description: 'Pokemon listing.',
          screenshot: './screenshots/pokedex.png',
          technologies: ['javascript', 'css'],
        }
      ],
      tecnologies: {
        vuejs: 'https://vuejs.org/',
        angular: 'https://angular.io/',
        react: 'https://reactjs.org/',
        reactRedux: 'https://react-redux.js.org/',
        nodejs: 'https://nodejs.org/en/',
        express: 'https://expressjs.com/',
        typescript: 'https://www.typescriptlang.org/',
        material: 'https://material.io/',
        bootstrap: 'https://getbootstrap.com/',
        heroku: 'https://www.heroku.com/',
        parcel: 'https://parceljs.org/'
      }
    }
  }
}
</script>

<style>
  .works {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .work {
    width: 48%;
    margin-bottom: 5%;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ddd;
  }
  .screenshot {
    max-width: 300px;
    border: 10px solid #fff;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
  .work-technology {
    font-size: .8em;
    margin-right: 10px;
    display:inline-block;
  }
</style>
