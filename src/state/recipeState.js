import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getRecipe, saveRecipe, updateRecipe } from "../api";
import useUserStore from "./userState";

const useRecipeStore = create(
  persist(
    (set, get) => ({
      currentRecipe: undefined,
      previousRecipe: undefined,
      error: undefined,
      recipeBook: [],
      setCurrentRecipe: (rec) => set({currentRecipe: rec}),
      addToRecipeBook: async () => {
        let recBook = get().recipeBook
        if (recBook.filter(e => e.title === get().currentRecipe.title).length < 1) {
          recBook.push(get().currentRecipe)
          saveRecipe(get().currentRecipe)
          set({ recipeBook: recBook })
          let user = useUserStore.getState().currentUser
          user.recipe_book = get().recipeBook
          await updateRecipe(user)
        }else{
          set({ error: "Recipe already exists in recipe book."})
        }
      },
      loading: false,
      setLoading: (loading) => set({ loading }),
      clearRecipe: () => set({ currentRecipe: undefined, loading: false, error: undefined }),
      setRecipeBook: (recBook) => set({recipeBook: recBook}),
      getRecipe: async (food) => {
        let currentRec = {};
        set({error: undefined})
        set({ loading: true, error: undefined, previousRecipe: get().currentRecipe });
        const recBook = get().recipeBook
        if (recBook.filter(e => e.title.toLowerCase() === food.toLowerCase()).length < 1) {
          currentRec.title = food.charAt(0).toUpperCase() + food.slice(1);
          const {recipe, img, error} = await getRecipe(currentRec.title);
          if(recipe?.title){
            set({ loading: false, error: undefined, currentRecipe: recipe });
            return
          }
          if (error) {
            set({ loading: false, error });
            return;
          }
          currentRec.img = img
          const parts = recipe.split(/\n[0-9]+\./);
          const ingList = parts[0]
            .replace("Steps:", "")
            .replace("Ingredients:", "")
            .split("\n-");
          ingList.shift();
          if (ingList.length) {
            currentRec.ingredients = ingList;
          }
          parts.shift();
          currentRec.instructions = parts;
          set({ loading: false, error: undefined, currentRecipe: currentRec });
        }else{
          set({ loading: false, error: undefined, currentRecipe: recBook.filter(e => e.title.toLowerCase() === food.toLowerCase())[0]});
        }
      },
    }),
    {
      name: "chefai-recipes-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useRecipeStore;
