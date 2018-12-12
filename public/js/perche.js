const Perche = {
  components: {Suivant, Precedent},
  data () { return  { 
    tendu: false,
    suivant: suivant('perche'),
    precedent: precedent('perche'),
  }},
  template: `
  <div class="component">
    <router-link to="/" tag="div" id="retourmenu">&#9776;</router-link>
    <h1>Tendre une perche</h1>
    <div id="perche">
      <img :class="{ tendu }" src="public/img/perche.png" alt="Une perche" />
    </div>
    <div class="btnwrap">
      <Precedent :precedent="precedent"></Precedent>
      <button @click="tendu = !tendu" class="btn">{{ tendu ? 'Détendre' : 'Tendre' }}</button>
      <Suivant :suivant="suivant"></Suivant>
    </div>
  </div>`
}