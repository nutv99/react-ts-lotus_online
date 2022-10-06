
import * as React from 'react';
import { useState } from 'react';
import create from 'zustand';

type State = {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
};

// const counterStore = (set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }); 

const useStore = create<State>((set) => ({
  firstName: 'React',
  lastName: 'Tracked',
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName }),
}));

// export const  useCounterStore = create(counterStore);
export default  useStore ;
