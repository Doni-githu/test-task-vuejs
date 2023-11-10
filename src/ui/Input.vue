<template>
    <div class="form-floating mb-3">
        <input :type="type" :value="modelValue" @input="onChangeInput" class="form-control" id="floatingInput">
        <label :for="placeholder">{{ placeholder }}</label>
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