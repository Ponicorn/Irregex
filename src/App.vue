<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nixie+One');

html, body {
  background: #eeeeee;
  color: #2e3131;
  font-family: 'Nixie One', cursive;
}

.content-wrap {
  height: 60vh;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    justify-content: center;
    display: flex; align-items: center;
    width: 75vw;
    img {
      max-height: 60vh;
      max-width: 100%;
    }
  }
}

.btn {
  border: #2e3131 1px solid;
  background: #eeeeee;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 2em;
  outline: none;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
   -khtml-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
</style>
