const expressions = [
  {
    nom: 'perche',
    titre: 'Tendre une perche'
  }, 
  {
    nom: 'averti',
    titre: 'Un homme averti en vaut deux'
  }]

function precedent (nom) {
  let result
  for(let key in expressions) {
    if (expressions[key].nom != nom) continue
    result = parseInt(key) - 1
  }
  return expressions[result] != undefined ? expressions[result] : false;
}

function suivant (nom) {
  let result = false
  for(let key in expressions) {
    if (expressions[key].nom != nom) continue
    result = parseInt(key) + 1
  }
  console.log(result)
  return expressions[result] != undefined ? expressions[result] : false;
}

const Accueil = { 
  data() {
    return { expressions }
  },
  template: `
    <div class="component">
      <h1>Expressions Irregulières</h1>
      <ul class="menu">
        <router-link 
          v-for="(expression,index) in expressions"
          :key="index"
          :to="expression.nom" 
          tag="li">{{ expression.titre }}</router-link>
      </ul>
    </div>`
    }

const Suivant = {
  props: ['suivant'],
  template: `
    <div class="direction">
      <router-link v-if="suivant" :to="suivant.nom" tag="button" class="btn sansbord">></router-link>
    </div>
  `
}

const Precedent = {
  props: ['precedent'],
  template: `
    <div class="direction">
      <router-link v-if="precedent" :to="precedent.nom" tag="button" class="btn sansbord"><</router-link>
    </div>
  `
}