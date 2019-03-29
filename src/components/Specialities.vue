<template>
  <div class="specialitiesContainer">
    <h2 class="sectionTitle">My Specialities</h2>
    <div class="specialities">
      <div class="card">
        <div v-html="require('!html-loader!../assets/WebDevelopment.svg')"></div>
        <div class="title">Web Development</div>
        <div
          class="description"
        >With a first-class degree in Computer Science, I am able to bring your animations and interactions to life with proper software development techniques.</div>
      </div>
      <div class="card">
        <div v-html="require('!html-loader!../assets/Learning.svg')"></div>
        <div class="title">Rapid Learning</div>
        <div
          class="description"
        >I love to increase both my technical and real world knowledge, picking up new skills along the way. I have found that I am able to do this fairly rapidly.</div>
      </div>
      <div class="card">
        <div v-html="require('!html-loader!../assets/MobileDevelopment.svg')"></div>
        <div class="title">Native Mobile Development</div>
        <div
          class="description"
        >A great native experience can really enhance the success and professionality of a project.</div>
      </div>
      <div class="card">
        <div v-html="require('!html-loader!../assets/ProblemSolving.svg')"></div>
        <div class="title">Problem Solving</div>
        <div class="description">
          Problem solving shouldn't be about finding the quickest and easiet workaround, it's about finding the
          <em>right</em> solution to your problem.
        </div>
      </div>
      <div class="card">
        <div v-html="require('!html-loader!../assets/ResponsiveWebDesign.svg')"></div>
        <div class="title">Responsive Web Design</div>
        <div
          class="description"
        >While I'm no graphic designer, I do have a eye for great design. I am comfortable using design tools and can take responsive designs from mock-up to implementation.</div>
      </div>
      <div class="card">
        <div v-html="require('!html-loader!../assets/Teamwork.svg')"></div>
        <div class="title">Team Collabortation</div>
        <div
          class="description"
        >I am a strong team player with a belief that communication is key to a successful project. I have the flexibility to adapt to where my work needs me most.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Specialities"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Fjalla+One");
@import url("https://fonts.googleapis.com/css?family=Roboto");
@import "../assets/global.scss";

.specialitiesContainer {
  width: 100%;
  background: $primaryGrey;
  color: $bodytextGrey;
  font-family: "Roboto", sans-serif;
  text-align: left;
  padding-bottom: 50px;

  .specialities {
    padding: 0 25px;
    position: relative;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;

    @include tablet {
      grid-template-columns: repeat(2, 2fr);
    }

    @include desktop {
      grid-template-columns: repeat(3, 2fr);
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: lighten($primaryGrey, 5%);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      padding-left: 10%;
      padding-right: 10%;
      padding-top: 5%;
      padding-bottom: 5%;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.02);
      }

      img,
      svg {
        height: 100px;
        width: 100px;
        margin-bottom: 15px;
        fill: $primaryRed;
      }

      .title {
        font-family: "Fjalla One", sans-serif;
        font-size: 24px;
        color: $headingGrey;
        margin-bottom: 40px;
        position: relative;

        &:after {
          content: "";
          display: block;
          height: 2px;
          width: 70px;
          background-color: $primaryRed;
          left: 50%;
          top: 10px;
          position: relative;
          transform: translateX(-50%);
        }
      }

      .description {
        text-align: center;
      }
    }
  }
}
</style>

