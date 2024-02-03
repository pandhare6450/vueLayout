<template>
  <div>
    <form @submit.prevent="submitForm">
      <div v-for="(field, index) in formFields" :key="index">
        <label :for="field.name">{{ field.label }}</label>
        <input
          v-if="field.type === 'text' || field.type === 'email'"
          :type="field.type"
          :name="field.name"
          v-model="field.value"
          required
        />
        <select
          v-if="field.type === 'select'"
          :name="field.name"
          v-model="field.value"
        >
          <option v-for="option in field.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formFields: [
        { type: 'text', name: 'username', label: 'Username', value: '' },
        { type: 'email', name: 'email', label: 'Email', value: '' },
        {
          type: 'select',
          name: 'country',
          label: 'Country',
          value: '',
          options: [
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            // Add more options as needed
          ],
        },
      ],
    };
  },
  methods: {
    submitForm() {
      // Process form submission logic here
      console.log('Form submitted:', this.formFields);
    },
  },
};
</script>
