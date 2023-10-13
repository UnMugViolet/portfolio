<template>
    <div class="flex items-center">
        <div class="absolute h-28 w-7/12">

            <button @click="navigateToOffice" class="h-full w-full rounded-xl bg-color-login-blue flex items-center py-2.5 px-6 stroke-white-1 cursor-pointer">
                <div class="w-full flex items-center text-white gap-4 relative">
                    <div>
                        <ProfilePicture class="w-16 h-16 stroke-yellow-2"/>
                    </div>
                    <div>
                        <h2 class="text-2xl">Paul</h2>
                    </div>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import ProfilePicture from '../ProfilePicture.vue';
import { useRouter, useRoute } from 'vue-router';

  export default {
    name: 'LoginForm',
    components: {
      ProfilePicture
    },
    setup() {
      const router = useRouter();
      const route = useRoute();
      const navigateToOffice = () => {
        const redirectPath = route.query.redirect || '/office';
        router.push(redirectPath);
      };

      return {
        navigateToOffice
      };
    }
  };
</script>



