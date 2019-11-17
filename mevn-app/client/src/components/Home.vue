// eslint-disable-next-line no-console
/* eslint-disable */
/*eslint no-console: "error"*/

<template>
  <div class="home">
    <hr/>
    <form @submit.prevent="addMessage" class="mb-3">
      <div v-if="error" class="alert alert-dismissible alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Error!</h4>
        <p class="mb-0">{{error}}</p>
      </div>

      <div class="from-group">
        <label for="usename">Username</label>
        <input
          v-model="message.username"
          type="text"
          class="form-control"
          id="username"
          placeholder="message.username" required />
      </div>

      <div class="from-group">
        <label for="subject">Subject</label>
        <input
          v-model="message.subject"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter a subject" required />
      </div>

      <div class="from-group">
        <label for="message">Message</label>
        <textarea
          v-model="message.message"
          class="form-control"
          id="message"
          rows="3"></textarea>
      </div>

      <div class="from-group">
        <label for="imageURL">Image URL</label>
        <input
          v-model="message.imageURL"
          type="text"
          class="form-control"
          id="imageURL"
          placeholder="Enter URL to an image" />
      </div>
      <button type="submit" class="btn btn-primary">Add Message</button>

    </form>
    <hr/>
    <div class="list-unstyled" v-for="message in reversedMessages" :key="message._id">
      <li class="media">
        <img v-if="message.imageURL" class="mr-3" :src="message.imageURL" :alt="message.subject">
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{message.username}}</h4>
          <h5 class="mt-0 mb-1">{{message.subject}}</h5>
          {{message.message}}
          <br/>
          <small>{{message.created}}</small>
        </div>
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// const API_URL = 'http://localhost:4000/messages';
const API_URL = 'https://4000-b6aecc97-47ef-4eca-9e9b-259658b8cf6f.ws-ap01.gitpod.io/messages';

export default {
  name: 'home',
  data: () => ({
    error: '',
    messages: [],
    message: {
      username: 'Enter a screen name',
      subject: '',
      message: '',
      imageURL: '',
    },
  }),
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();
    },
  },
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then((result) => {
        this.messages = result;
      });
  },
  methods: {
    addMessage() {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(this.message),
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then((result) => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map(detail => detail.message)
              .join('. ');
            this.error = error;
          } else {
            this.error = '';
            this.showMessageForm = false;
            this.messages.push(result);
          }
        });
    },
  },
};
</script>

<style>
img {
 max-width: 300px;
  height: auto;
}
</style>
