<script setup lang="ts">
import { reactive } from "vue";

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
      class="flex flex-col space-y-4 max-w-lg mx-auto"
    >
      <div class="form-group">
        <label for="name">Name</label>
        <VField
          name="name"
          type="text"
          class="form-control"
          id="name"
          placeholder="Name"
          rules="required|alpha_spaces"
          v-model="form.name"
        />
        <VErrorMessage class="error" name="name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <VField
          name="email"
          type="text"
          class="form-control"
          id="email"
          placeholder="Email"
          rules="required|email"
          v-model="form.email"
        />
        <VErrorMessage class="error" name="email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <VField
          name="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          rules="required|min:8|max:64"
          v-model="form.password"
        />
        <VErrorMessage class="error" name="password" />
      </div>
      <div class="form-group">
        <label for="password_confirm">Confirm Password</label>
        <VField
          name="password_confirmation"
          type="password"
          class="form-control"
          id="password_confirm"
          placeholder="Confirm Password"
          rules="required|confirmed:@password"
          v-model="form.passwordConfirmation"
        />
        <VErrorMessage class="error" name="password_confirmation" />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <VField
          name="username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
          rules="required|alpha_dash|min:3|max:32"
          v-model="form.username"
        />
        <VErrorMessage class="error" name="username" />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <VField
          name="age"
          type="text"
          class="form-control"
          id="age"
          rules="required|numeric"
          placeholder="Age"
        />
        <VErrorMessage class="error" name="age" />
      </div>
      <div class="form-group">
        <label for="address">Address</label>
        <VField
          as="textarea"
          name="address"
          class="form-control"
          id="address"
          placeholder="Address"
          rules="address"
          v-model="form.address"
        />
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
      <button type="submit" class="btn btn-primary">Submit</button>
    </VForm>
  </div>
</template>

<style scoped>
.error {
  @apply text-red-700;
}
</style>
