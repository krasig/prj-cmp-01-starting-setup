<template>
    <the-header title="RememberMe"></the-header>

    <stored-resources :resources="storedResources"></stored-resources>


</template>
<script>
import StoredResources from './componends/learningresources/StoredResources.vue';
import TheHeader from './componends/layouts/TheHeader.vue';
export default {
    components: {
        StoredResources,
        TheHeader
    },
    data() {
        return {
            storedResources: [{
                id: 'r1',
                title: 'The First Resource',
                description: 'This is the first resource',
                url: 'https://www.google.com'
            }, {
                id: 'r2',
                title: 'The Second Resource',
                description: 'This is the second resource',
                url: 'https://www.google.com'
            }, {
                id: 'r3',
                title: 'The Third Resource',
                description: 'This is the third resource',
                url: 'https://www.google.com'
            },
            ]
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