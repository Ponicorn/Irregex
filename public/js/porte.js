const Porte = {
  components: {Suivant, Precedent},
  data () { return  { 
    ouvert: false,
    suivant: suivant('perche'),
    precedent: precedent('perche'),
  }},
  template: `
  <div class="component">
    <router-link to="/" tag="div" id="retourmenu">&#9776;</router-link>
    <h1>Voir midi à sa porte</h1>
    <div id="midiporte">
      <div id="porte" :class="{ ouvert }">
        <img :class="{ ouvert }" src="public/img/porte.png" alt="Une perche" />
      </div>
      <div id="midi">
      </div>
    </div>
    <div class="btnwrap">
      <Precedent :precedent="precedent"></Precedent>
      <button @click="ouvert = !ouvert" class="btn">{{ ouvert ? 'Fermer' : 'Ouvrir' }}</button>
      <Suivant :suivant="suivant"></Suivant>
    </div>
  </div>`
}