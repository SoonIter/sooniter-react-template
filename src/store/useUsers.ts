import { defineModel, useModel } from 'foca';

export interface UserItem {
  id: number;
  name: string;
  age: number;
}

const initialState: UserItem[] = [];

const userModel = defineModel('users', {
  initialState,
  actions: {
    addUser(state, user: UserItem) {
      state.push(user);
    },
  },
});
const useUsersModel = () => useModel(userModel);
export default useUsersModel;
export { useUsersModel, userModel };
