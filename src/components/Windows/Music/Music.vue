<template>
  <div class="relative right-0 h-content-window flex overflow-y-auto bg-white pb-14">
    <div class="w-full font-trebuchet-pixel">
      <div class="w-full h-full overflow-x-hidden">
        <div v-if="Object.keys(playlist).length">
          <div class="flex items-center gap-5 p-1.5 bg-white">
            <img v-if="playlist.images && playlist.images.length > 0" :src="playlist.images[0].url" alt="Playlist Image" class="w-24">
            <div>
              <h2 class="text-xl font-bold">{{ playlist.name }}</h2>
              <p class="text-xs">{{ playlist.description }}</p>
              <p class="text-xxs text-gray-500 italic mb-1.5">Cette playlist et sa lecture est réalisée en utilisant l'API de spotify</p>
              <Button :href="playlist.external_urls.spotify" :blank="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 24 24">
                  <path fill="#000000"
                    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
                </svg>
                <span class="ml-1.5">Voir sur Spotify</span>
              </Button>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-12 items-center pl-1.5">
              <div class="col-span-7 sm:col-span-5 flex items-center gap-1">
                <div class="pl-2 w-8">
                  <p class="text-xs">#</p>
                </div>
                <div class="flex flex-col max-w-48">
                  <p class="text-xs font-trebuchet-pixel">Titre</p>
                </div>
              </div>
              <div class="col-span-4 overflow-hidden px-1 hidden md:block">
                <p class="text-xs font-trebuchet-pixel">Album</p>
              </div>
              <div class="col-span-2 px-1">
                <p class="text-xs font-trebuchet-pixel">Ajouté le</p>
              </div>
              <div class="col-span-1 px-1">
                <p class="text-xs font-trebuchet-pixel">Durée</p>
              </div>
            </div>
            <div class="w-full h-px bg-gray-300 mb-2 mt-1"></div>
          </div>
          <div class="pb-3">
            <div v-for="(track, index) in playlist.tracks.items" :key="track.track.id">
              <div class="grid grid-cols-12 items-center pl-1.5">
                <div class="col-span-7 sm:col-span-5 flex items-center gap-1">
                  <div class="pl-2 w-8">
                    <p class="text-xs font-trebuchet-pixel">{{ index + 1 }}</p>
                  </div>
                  <a class="flex items-center gap-2 cursor-pointer" :href="track.track.href">
                    <img v-if="track.track.album.images && track.track.album.images.length > 0" :src="track.track.album.images[2].url" alt="Track Image" class="w-12">
                    <div class="flex flex-col max-w-48">
                      <p class="text-sm font-trebuchet-pixel">{{ track.track.name }}</p>
                      <p class="text-xs font-trebuchet-pixel">{{ track.track.artists[0].name }}</p>
                    </div>
                  </a>
                </div>
                <div class="col-span-4 overflow-hidden px-1 hidden sm:block">
                  <p class="text-xs text-left font-trebuchet-pixel truncate">{{ track.track.album.name }}</p>
                </div>
                <div class="col-span-2 px-1">
                  <p class="text-xs font-trebuchet-pixel truncate">{{ formatDistanceToNow(new Date(track.added_at), { locale: fr }) }}</p>
                </div>
                <div class="col-span-1 px-1">
                  <p class="text-xs font-trebuchet-pixel">{{ (track.track.duration_ms / 60000).toFixed(2) }} min</p>
                </div>
              </div>
              <div v-if="index < playlist.tracks.items.length - 1" class="w-11/12 h-px bg-gradient-to-r from-blue-300 to-white my-2"></div>
            </div>
          </div>
          <Player v-if="playlist.tracks.items.length > 0" :playlist="playlist.tracks.items" />
        </div>
        <div v-else class="w-full h-full font-trebuchet-pixel">
          <div class="w-full h-full flex items-center justify-center flex-col">
            <p class="text-xs text-center mb-2">Pour accéder à cette fonctionnalité, <br> il est nécessaire de se
              connecter à Spotify..</p>
            <Button @click="redirectToSpotify" class="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" class="mb-px" viewBox="0 0 24 24">
                <path fill="#000000"
                  d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2" />
              </svg>
              Se connecter à Spotify
            </Button>
            <p class="text-red-500">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useVolumeStore } from '@/stores/volumeStore';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import Button from '@/components/Buttons/Button.vue';
import Player from '@/components/Windows/Music/Player.vue';

const playlist = ref({});
const errorMessage = ref('');
const playlistId = '1hMzZICeyywzM40RKVahoU';
const token = ref(localStorage.getItem('access_token') || '');
const refreshToken = localStorage.getItem('refresh_token') || '';
const volumeStore = useVolumeStore();

function redirectToSpotify() {
  const clientId = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
  const redirectUri = `${import.meta.env.VITE_APP_PORTFOLIO_DOMAIN_NAME}/office`;
  const scopes = 'user-read-private user-read-email user-modify-playback-state streaming';
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  window.location.href = authUrl;
}

async function fetchInitialToken(authorizationCode) {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
      params: {
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: `${import.meta.env.VITE_APP_PORTFOLIO_DOMAIN_NAME}/office`,
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
    return;
  }
}

async function fetchWebApi(endpoint, method, body) {
  try {
    const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
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

    const contentType = res.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const jsonResponse = await res.json();
      if (!res.ok) {
        console.error('Fetch API Error:', jsonResponse);
        throw new Error(jsonResponse.error.message || 'API request failed');
      }
      return jsonResponse;
    } else {
      const text = await res.text();
      console.error('Fetch API Error:', text);
      throw new Error('Non-JSON response received');
    }
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
    const response = await fetchWebApi(`playlists/${playlistId}`, 'GET');
    playlist.value = response;
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
    console.log('Playlist:', playlist); 
  } else {
    return;
  }
});
</script>