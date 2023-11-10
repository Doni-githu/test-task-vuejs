<template>
    <div class="form-input">
        <input :type="type" :placeholder="placeholder" :value="modelValue" @input="onChangeInput">
    </div>
</template>
<script>
export default {
    name: 'Input',
    props: {
        type: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true
        },
        modelValue: [Number, String]
    },
    methods: {
        onChangeInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style scoped>
.form-input input {
    border-radius: 8px;
    padding: 10px 12px;
    border:1px solid black; 
}

.form-input input:focus {
    outline: none;
}
</style>