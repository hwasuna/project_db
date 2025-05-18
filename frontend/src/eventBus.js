// eventBus.js
import { reactive } from 'vue';

export const authState = reactive({
  isLoggedIn: false,
});

export function loginUser() {
  authState.isLoggedIn = true;
}

export function logoutUser() {
  authState.isLoggedIn = false;
}