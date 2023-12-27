import { RecoilState, atom } from "recoil"; 
interface order{
  name: string,
  prize:number
  }
export const userState = atom({
    key: 'username', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
export const emailstate = atom({
    key: 'email', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
export const imagestate = atom({
    key: 'image', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
  export const orderstate:RecoilState<order[]> = atom({
    key:'orders',
    default: [] as order[],
  })