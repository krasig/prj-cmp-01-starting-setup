<template>
    <the-header title="RememberMe"></the-header>

    <the-resources></the-resources>
   


</template>
<script>
// import StoredResources from './componends/learningresources/StoredResources.vue';
import TheHeader from './componends/layouts/TheHeader.vue';
import TheResources from './componends/learningresources/TheResources.vue';
export default {
    components: {
        // StoredResources,
        TheHeader,
        TheResources
    },
    data() {
        return {
            
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>