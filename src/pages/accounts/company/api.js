
import { ref } from "vue";

export default function useUser() {
    const user = ref({});
    async function getUser(original=false,data={}) {
      if (original) {
        user.value = data
        return
      }
      user.value = {  name:'Tim',  surname:'Herald',  email:'abc@example.com',  timezone:'Asia/Kolkata'  }
    }
    const updateUser = async (data) => {
      console.log({user});
      user.value = data
      console.log({user});
    };

    return {
        getUser,
        updateUser,
        user
    };
}
