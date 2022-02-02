<script>
  export default {
    components: {}
  }
</script>

<template>
  <nav>
    <ul id="routermenu">
      <li id="logo">
        <RouterLink to="/">SpaceIpsum</RouterLink>
      </li>
      <li>
        <RouterLink to="/first">Satellites</RouterLink>
      </li>
      <li>
        <RouterLink to="/third">Centers</RouterLink>
      </li>
      <li>
        <RouterLink to="/second">Spacecrafts & Launchers</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
    <h4>©SpaceIpsum</h4>
    <div id="footerinfo">
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <h5>About</h5></a
      >
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <h5>Privacy</h5></a
      >
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <h5>Legal Notice</h5></a
      >
    </div>
    <div id="socialmedias">
      <a
        id="twitter"
        href="https://se.linkedin.com/in/ludwig-n%C3%B6jd-019029197"
        target="_blank"
      >
        <img src="/assets/iconmonstr-twitter-5-48.png" />
      </a>
      <a
        id="instagram"
        href="https://se.linkedin.com/in/ludwig-n%C3%B6jd-019029197"
        target="_blank"
      >
        <img src="/assets/iconmonstr-instagram-15-48.png" />
      </a>
      <a
        id="facebook"
        href="https://se.linkedin.com/in/ludwig-n%C3%B6jd-019029197"
        target="_blank"
      >
        <img src="/assets/iconmonstr-facebook-5-48.png" />
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  $text_color: black;
  @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Staatliches&display=swap');
  #routermenu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Staatliches', cursive;
    font-size: 20px;
    background-color: rgba(51, 170, 51, 0.4);
    padding: 10px;
    text-shadow: 1px 1px 3px #000000;

    #logo {
      font-family: 'Abril Fatface', cursive;
      font-size: 30px;
      border: solid rgba(51, 170, 51, 0.8) 1px;
      padding: 1px;
      border-radius: 7px;
      background-color: rgba(51, 170, 51, 0.4);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7),
        0 6px 20px 0 rgba(0, 0, 0, 0.7);
    }
  }

  a {
    text-decoration: none;
    color: black;
    margin: 5px;
  }

  a:hover {
    color: rgba(37, 46, 46, 0.5);
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: $text_color;
    background-color: rgba(51, 170, 51, 0.4);
    margin-top: 240px;
    padding: 15px;
  }

  #footerinfo {
    display: flex;
    flex-direction: row;
  }

  h5 {
    margin: 8px;
  }
</style>
