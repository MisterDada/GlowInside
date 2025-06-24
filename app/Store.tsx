import { create } from 'zustand';


const useAuthStore = create((set) => ({
  username: '',
  email: '',
  password: '',
  setUsername: (username: String) => set({ username }),
  setEmail: (email: String) => set({ email }),
  setPassword: (password: String) => set({ password }),
}));

export default useAuthStore;