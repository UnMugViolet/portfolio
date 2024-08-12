<template>
  <div class="w-full h-full bg-white overflow-auto p-2">
    <div class="w-full">
      <img v-if="playlist.images && playlist.images.length > 0" :src="playlist.images[0].url" alt="Playlist Image" class="w-24">
      <h2>Playlist Details</h2>
    </div>
    <div v-if="Object.keys(playlist).length">
      <p><strong>Name:</strong> {{ playlist.name }}</p>
      <p><strong>Description:</strong> {{ playlist.description }}</p>
      <p><strong>Owner:</strong> {{ playlist.owner.display_name }}</p>
      <p><strong>Tracks:</strong> {{ playlist.tracks.total }}</p>
      <ul>
        <li v-for="track in playlist.tracks.items" :key="track.track.id">
          {{ track.track.name }} by {{ track.track.artists[0].name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Loading playlist...</p>
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const playlist = ref({});
const errorMessage = ref('');
const playlistId = '1hMzZICeyywzM40RKVahoU';
const token = ref(import.meta.env.VITE_APP_SPOTIFY_API_KEY);
const refreshToken = import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  try {
    const res = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
        client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    token.value = res.data.access_token;
  } catch (error) {
    console.error('Get Access Token Error:', error);
    throw error;
  }
}

async function fetchWebApi(endpoint, method, body) {
  try {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(body),
    });
    if (res.status === 401) {
      // Refresh token and try again
      await getAccessToken();
      return fetchWebApi(endpoint, method, body);
    }
    return await res.json();
  } catch (error) {
    console.error('Fetch API Error:', error);
    throw error;
  }
}

async function fetchPlaylist() {
  try {
    const data = await fetchWebApi(`v1/playlists/${playlistId}`, 'GET');
    playlist.value = data;
    console.log(playlist.value.images[0].url);
  } catch (error) {
    errorMessage.value = error.message;
  }
}

onMounted(() => {
  fetchPlaylist();
});

</script>

<style scoped>
.error {
  color: red;
}
</style>