<script setup lang="ts">
import { reactive } from "vue";
import FormError from "./utils/FormError.vue";

const form = reactive({
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  username: "",
  age: 0,
  address: "",
  agree: false,
});

const handleSubmit = () => {
  console.log(form);
};
</script>

<template>
  <div class="flex flex-col space-y-2 md:space-y-4 container mx-auto">
    <h1 class="text-center text-2xl font-bold">Registration Form</h1>
    <VForm
      @submit="handleSubmit"
      class="form-wrapper"
      v-slot="{ meta, isSubmitting }"
    >
      <div class="form-group">
        <label for="name">Name</label>
        <VField
          name="name"
          rules="required|alpha_spaces"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            type="text"
            class="form-control"
            :class="{ 'error-border': !meta.valid && meta.touched }"
            id="name"
            placeholder="Name"
            v-model="form.name"
          />
        </VField>
        <VErrorMessage class="error" name="name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <VField name="email" rules="required|email" v-slot="{ field, meta }">
          <input
            type="text"
            v-bind="field"
            class="form-control"
            :class="{ 'error-border': !meta.valid && meta.touched }"
            id="email"
            placeholder="Email"
            v-model="form.email"
          />
        </VField>
        <VErrorMessage class="error" name="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <VField
          name="password"
          rules="required|min:8|max:64"
          v-slot="{ field, meta, errors }"
        >
          <input
            type="password"
            v-bind="field"
            class="form-control"
            :class="{ 'error-border': !meta.valid && meta.touched }"
            id="password"
            placeholder="Password"
            v-model="form.password"
          />
          <FormError :errors="errors" />
        </VField>
      </div>
      <div class="form-group">
        <label for="password_confirm">Confirm Password</label>
        <VField
          name="password_confirmation"
          rules="required|confirmed:@password"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            type="password"
            class="form-control"
            :class="{ 'error-border': !meta.valid && meta.touched }"
            id="password_confirm"
            placeholder="Confirm Password"
            v-model="form.passwordConfirmation"
          />
        </VField>
        <VErrorMessage class="error" name="password_confirmation" />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <VField
          name="username"
          rules="required|alpha_dash|min:3|max:32"
          v-slot="{ field, meta }"
        >
          <input
            v-bind="field"
            type="text"
            class="form-control"
            :class="{ 'error-border': !meta.valid && meta.touched }"
            id="username"
            placeholder="Username"
            v-model="form.username"
          />
        </VField>
        <VErrorMessage class="error" name="username" />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <VField name="age" rules="required|numeric" v-slot="{ field, meta }">
          <input
            type="text"
            v-bind="field"
            class="form-control"
            :class="{ 'error-border': !meta.valid && meta.touched }"
            id="age"
            placeholder="Age"
          />
        </VField>
        <VErrorMessage class="error" name="age" />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <VField
          rules="required|address"
          name="address"
          v-slot="{ field, meta }"
        >
          <textarea
            v-bind="field"
            id="address"
            class="form-control"
            :class="{ 'error-border': !meta.valid && meta.touched }"
          ></textarea>
        </VField>
        <VErrorMessage class="error" name="address" />
      </div>
      <div class="flex flex-col space-y-2">
        <label for="agree" class="flex space-x-2 items-center">
          <VField
            type="checkbox"
            class="text-blue-700 rounded-md p-2 focus:ring-2 focus:ring-blue-700"
            name="terms"
            id="agree"
            rules="required"
            :value="true"
            v-model="form.agree"
          />
          <span class="text-gray-500"
            >I agree to the terms and conditions.</span
          >
        </label>
        <VErrorMessage class="error" name="terms" />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        :class="{
          'opacity-50': meta.touched && !meta.valid,
          'cursor-not-allowed': isSubmitting || !meta.valid,
        }"
      >
        Submit
      </button>
    </VForm>
  </div>
</template>

<style scoped>
.error {
  @apply text-red-700;
}

.error-border {
  @apply border-none ring-2 ring-red-500 focus:ring-red-600;
}
</style>
