<template>
  <div class="relative right-0 h-content-window flex">
    <div class="w-full bg-white p-1.5">
      <div class="w-full">
        <img v-if="playlist.images && playlist.images.length > 0" :src="playlist.images[0].url" alt="Playlist Image" class="w-24">
        <h2>Playlist Details</h2>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const playlist = ref({});
const errorMessage = ref('');
const playlistId = '1hMzZICeyywzM40RKVahoU';
const token = ref(localStorage.getItem('access_token') || '');
const refreshToken = localStorage.getItem('refresh_token') || '';

function redirectToSpotify() {
  const clientId = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
  const redirectUri = `${import.meta.env.VITE_APP_DOMAIN_NAME}/office`;
  const scopes = 'user-read-private user-read-email';
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  window.location.href = authUrl;
}

async function fetchInitialToken(authorizationCode) {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: `${import.meta.env.VITE_APP_DOMAIN_NAME}/office`,
        client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
        client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    token.value = response.data.access_token;
    localStorage.setItem('access_token', token.value);
    if (response.data.refresh_token) {
      localStorage.setItem('refresh_token', response.data.refresh_token);
    }
    fetchPlaylist();
  } catch (error) {
    console.error('Error fetching initial token:', error);
  }
}

async function renewAccessToken() {
  try {
    const requestData = {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
      client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
    };

    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: requestData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    token.value = response.data.access_token;
    localStorage.setItem('access_token', token.value);
    if (response.data.refresh_token) {
      localStorage.setItem('refresh_token', response.data.refresh_token);
    }
  } catch (error) {
    console.error('Error renewing access token:', error);
    redirectToSpotify(); // Redirect to Spotify login if token renewal fails
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
      // Fetch new token and try again
      await renewAccessToken();
      return fetchWebApi(endpoint, method, body);
    }
    return await res.json();
  } catch (error) {
    console.error('Fetch API Error:', error);
    throw error;
  }
}

async function fetchPlaylist() {
  if (!token.value) {
    return;
  }

  try {
    const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    playlist.value = response.data;
  } catch (error) {
    console.error('Error fetching playlist:', error);
  }
}

onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const authorizationCode = urlParams.get('code');

  if (authorizationCode && !token.value) {
    fetchInitialToken(authorizationCode);
  } else if (token.value) {
    fetchPlaylist();
  } else {
    redirectToSpotify();
  }
});
</script>