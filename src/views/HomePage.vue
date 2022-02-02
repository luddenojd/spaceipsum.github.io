<template>
  <div id="textPic">
    <p>
      For those who have seen the Earth from space, and for the hundreds and
      perhaps thousands more who will, the experience most certainly changes
      your perspective. The things that we share in our world are far more
      valuable than those which divide us. <br />
      <br />
      It suddenly struck me that that tiny pea, pretty and blue, was the Earth.
      I put up my thumb and shut one eye, and my thumb blotted out the planet
      Earth. I didn't feel like a giant. I felt very, very small. <br />
      <br />
      Science has not yet mastered prophecy. We predict too much for the next
      year and yet far too little for the next 10. <br />
      <br />
      We choose to go to the moon in this decade and do the other things, not
      because they are easy, but because they are hard, because that goal will
      serve to organize and measure the best of our energies and skills, because
      that challenge is one that we are willing to accept, one we are unwilling
      to postpone, and one which we intend to win. <br />
      <br />
      There can be no thought of finishing for 'aiming for the stars.' Both
      figuratively and literally, it is a task to occupy the generations. And no
      matter how much progress one makes, there is always the thrill of just
      beginning. <br />
      <br />
      <strong>
        How To Use SpaceIpsum: Search for an object. Click the link that is
        presented. Click on the button. There you go.
      </strong>
    </p>
    <img
      id="launchpic"
      src="/assets/SpaceX-NASA-Launch-04.jpg"
      width="600"
      alt=""
    />
  </div>
</template>
<style lang="scss" scoped>
  $text_color: black;

  p {
    width: 50%;
    font-family: arial, sans-serif;
    color: $text_color;
    margin-bottom: 10px;
    margin-left: 15px;
    background-color: rgba(185, 176, 49, 0.1);
    padding: 5px;
    border-radius: 10px;
  }

  #launchpic {
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.7);
  }

  #textPic {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 40px;
  }
</style>
