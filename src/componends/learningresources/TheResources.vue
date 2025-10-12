<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')"
            :mode="selectedTab === 'stored-resources' ? '' : 'flat'">Stored Rsources</base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="selectedTab === 'add-resource' ? '' : 'flat'">Add
            Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
    components: {
        StoredResources,
        AddResource
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        }
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

    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, url) {
            console.log('In TheResources:' + title + ',' + description + ',' + url);
            const newResource = {
                id: 'r' + (this.storedResources.length + 1),
                title: title,
                description: description,
                url: url
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        deleteResource(resourceId) {
            console.log('delete resouce from The resource: ' + resourceId);
            const resIndex = this.storedResources.findIndex(resource => resource.id === resourceId);

            if (resIndex !== -1) {
                this.storedResources.splice(resIndex, 1);
            }
        }
    }

}
</script>