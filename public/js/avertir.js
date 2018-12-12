const Averti = {
  components: {Suivant, Precedent},
  data () { return  { 
    averti: false,
    suivant: suivant('averti'),
    precedent: precedent('averti'),
  }},
  template: `
  <div class="component">
    <router-link to="/" tag="div" id="retourmenu">&#9776;</router-link>
    <h1>Un homme averti en vaut deux</h1>
    <div id="hommes" :class="{ averti }">
      <div id="homme1"><img src="public/img/homme.png" alt="Un homme" /></div>
      <div id="homme2"><img src="public/img/homme.png" alt="Un homme" /></div>
    </div>
    <div class="btnwrap">
      <Precedent :precedent="precedent"></Precedent>
      <button @click="averti = !averti" class="btn">
        {{ averti ? 'Désavertir' : 'Avertir' }}
      </button>
      <Suivant :suivant="suivant"></Suivant>
    </div>
  </div>`
}
