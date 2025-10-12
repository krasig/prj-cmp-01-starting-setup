<template>
    <base-dialog v-if="inputIsInvalid" tile="Invalid input" @close="confirmError">
        <template #default>
            <p>Some of values are invalid!</p>
            <p>Please enter valid data in all fields!</p>
        </template>   
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>

        </template>
</base-dialog>
    <base-card>
        <form @submit.prevent="addData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" type="text" rows="3" ref="descInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="text" ref="urlInput" />
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>
<script>

export default {

    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        addData() {
            console.log('Submitted:' + this.$refs.titleInput.value + ',' + this.$refs.descInput.value + ',' + this.$refs.urlInput.value);
            if (this.$refs.titleInput.value.trim() === '' ||
                this.$refs.descInput.value.trim() === '' ||
                this.$refs.urlInput.value.trim() === '') {
                this.inputIsInvalid = true;
                return;
            }
            this.addResource(this.$refs.titleInput.value, this.$refs.descInput.value, this.$refs.urlInput.value);
        },
        confirmError() {
            this.inputIsInvalid = false;
        }

    }
}
</script>
<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>