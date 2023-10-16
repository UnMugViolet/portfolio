<template>
    <section class="h-screen w-screen overflow-hidden bg-office-pic relative">
        <Header />
        <div>

        </div>
        <Footer />
    </section>

</template>

<script>
import Footer from '../components/Footer/Footer.vue';
import Header from '../components/Header/Header.vue';

export default {
    name: 'Office',
    components: {
        Footer,
        Header,
    }
};
</script>