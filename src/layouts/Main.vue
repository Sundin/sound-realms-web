<template>
  <div class="bg">
    <div id="app">
      <!-- <Header /> -->
      <!-- <Analytics /> -->
      <div id="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
<style>
@font-face {
  font-family: "HamletOrNot";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;

}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  max-width: 960px;
}
.section-content a {
  --hover-color: rgb(203, 47, 47);
}

:root {
  --text-color: black;
  --link-color: #a166a0;
  --hover-color: white;
  font-size: 150%;
}

body,
html {
  height: 100%;
  background-color: white;
  margin: 0;
}

#app {
  /* font-family: Georgia, serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: var(--text-color);
}

/* #content {
  max-width: 70ch;
  padding: 2ch;
  margin: auto;
} */

section {
  width: 100%;
  padding: 0;
  display: table;
  margin: 0;
  max-width: none;
  background-image: url("~@/assets/skeleton_background.png");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
}

section:nth-of-type(2n) {
  background-image: url("~@/assets/castle_background.png");
}

@media screen and (max-width: 600px) {
  .bg {
    background-size: auto;
  }
}

a {
  color: var(--link-color);
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: lighter;
  text-align: left;
  font-size: small;
  text-decoration: none;
}
a.active {
  color: var(--link-color);
}
a:hover {
  color: var(--hover-color);
}

p,li {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-weight: lighter;
  text-align: left;
  font-size: small;
  line-height: 2;
}
.bold {
  font-weight: bold;
}
strong {
  font-weight: bold;
}

img {
  max-width: 100%;
  height: auto;
}

hr {
  width: 50%;
  border-color: var(--text-color);
}

span.title {
  font-style: italic;
}

.inverted {
  color: white;
}

h1 {
  color: #a166a0;
  font-family: "HamletOrNot";
  font-weight: normal;
}

h2 {
  font-family: "HamletOrNot";
  font-weight: normal;
}

h3 {
  font-family: "HamletOrNot";
  font-weight: normal;
}

@media screen and (max-width:980px){
  .section-content {
    max-width: 80%;
  }
}

.image-large {
  max-height: 666px;
}
.image-small {
  max-height: 200px;
}

.image-medium {
  max-height: 400px;
}

</style>
