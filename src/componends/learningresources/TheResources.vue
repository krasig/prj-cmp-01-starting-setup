<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="selectedTab==='stored-resources'?'':'flat'">Stored Rsources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="selectedTab==='add-resource'?'':'flat'">Add Resource</base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        StoredResources,
        AddResource
    },  
    data() {
        return {
            selectedTab: 'stored-resources',
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
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab;
        }
    }

}
</script>