/* eslint-disable */
// eslint-disable-next-line
<template>
  <div id="video-player">
    <div class="video-container">
      <iframe width="640" height="360" frameboard="0" :src="this.activeVideo.youtubeURL" allow="autoplay:encrpted-media" allowfullscreen />
      <h3> {{ this.activeVideo.title }} </h3>
      <div class="row">
        <p> {{this.activeVideo.views}} Views </p>
        <p> {{this.activeVideo.likes}} <button @click="likeVideo">Like</button> </p>
      </div>
    </div>
    <div class="video-list">
      <div :key="video.id" @click="chooseVideo(video)"  v-for="video in videos" class="thumbnail">
        <div class="thumbnail-img">
          <img :src="video.thumbnail" />
        </div>
        <div class="thumbnail-info">
          <h3> {{ video.title }} </h3>
          <p> {{ video.creator }} </P>
          <p class="thumbnail-views"> {{video.views}} Views </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data () {
    return {
      videos,
      activeVideo: videos[0]
    }
  },
  methods: {
    chooseVideo (video) {
      this.activeVideo = video
      video.views += 1
    },
    likeVideo () {
      this.activeVideo.likes += 1
    }
  }
}

// VideoPlayer.vue

let videos = [
  {
    id: 1,
    title: '18-core iMac Pro Review: Not a Trap!',
    thumbnail:
      'https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA',
    youtubeURL: 'https://www.youtube.com/embed/jn9mHzXJIV0',
    creator: 'Marques Brownlee',
    likes: 0,
    views: 0
  },
  {
    id: 2,
    title: 'Dope Tech: Camera Robots!',
    thumbnail:
      'https://i.ytimg.com/vi/UIwdCN4dV6w/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA',
    youtubeURL: 'https://www.youtube.com/embed/UIwdCN4dV6w',
    creator: 'Marques Brownlee',
    likes: 0,
    views: 0
  },
  {
    id: 3,
    title: "Let's Talk About Tesla Roadster 2020!",
    thumbnail:
      'https://i.ytimg.com/vi/ctx4YBEdOxo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w',
    youtubeURL: 'https://www.youtube.com/embed/ctx4YBEdOxo',
    creator: 'Marques Brownlee',
    likes: 0,
    views: 0
  },
  {
    id: 4,
    title: 'Talking Tech with Neil deGrasse Tyson!',
    thumbnail:
      'https://i.ytimg.com/vi/pqQrL1K0Z5g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw',
    youtubeURL: 'https://www.youtube.com/embed/pqQrL1K0Z5g',
    creator: 'Marques Brownlee',
    likes: 0,
    views: 0
  },
  {
    id: 5,
    title: 'The Apple Ecosystem: Explained!',
    thumbnail:
      'https://i.ytimg.com/vi/KB4_WIPE7vo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw',
    youtubeURL: 'https://www.youtube.com/embed/KB4_WIPE7vo',
    creator: 'Marques Brownlee',
    likes: 0,
    views: 0
  }
]
</script>

<style scoped>
  .video-player {
    display: flex;
    width:1200px;
    margin:auto;
  }

  .video-container{
    margin-right:40px;
  }

  .row{
    display:flex;
    justify-content:space-between;
  }

  button{
    background:#D0021B;
    color:white;
    border:none;
    padding:10px 20px;
  }

  .thumbnail {
    display: flex;
  }
  .thumbnail img {
    width: 168px;
  }
  .thumbnail-info {
    margin-left: 20px;
    text-align: left;
  }
  .thumbnail h3 {
    background-color: black;
    color: aqua;
    font-size: 16px
  }
h3,
p {
  margin: 0;
  padding: 0;
}
.thumbnail-views {
  font-size: 14px
}
</style>
