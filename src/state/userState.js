import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { logIn, signUp } from "../api";

// interface User {

// }

const useUserStore = create(
  persist(
    (set, get) => ({
      currentUser: undefined,
      error: undefined,
      loggedIn: false,
      loading: false,
      addRecipeBook: (recipeBook) => {
        let user = get().currentUser
        user.recipe_book = recipeBook
      },
      setLoading: (loading) => set({ loading }),
      logOut: () => set({ currentUser: undefined, loggedIn: false }),
      logIn: async (user) => {
        set({loading: true});
        const currentUser = await logIn(user);
        if(!currentUser.error){
            set({ currentUser, loggedIn: true, loading: false, error: undefined });
        }else{
            set({error: currentUser.error, loading: false})
        }
      },
      signUp: async (user) => {
        set({loading: true});
        const currentUser = await signUp(user);
        if(!currentUser.error){
            set({ currentUser, loggedIn: true, loading: false, error: undefined });
        }else{
            set({error: currentUser.error, loading: false})
        }
      },
    }),
    {
      name: "user-session",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserStore;
