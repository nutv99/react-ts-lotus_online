import * as React from 'react';
import { useState } from 'react';
import create from 'zustand';
import useStore from '../service/store';

type State = {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
};

// type State = {
//   firstName: string;
//   lastName: string;
//   setFirstName: (firstName: string) => void;
//   setLastName: (lastName: string) => void;
// };

// const useStore = create<State>((set) => ({
//   firstName: 'React',
//   lastName: 'Tracked',
//   setFirstName: (firstName) => set({ firstName }),
//   setLastName: (lastName) => set({ lastName }),
// }));

// const EditPerson = () => {
//   const firstName = useStore((state) => state.firstName);
//   const lastName = useStore((state) => state.lastName);
//   const setFirstName = useStore((state) => state.setFirstName);
//   const setLastName = useStore((state) => state.setLastName);
//   return (
//     <div>
//       <div>
//         First Name:
//         <input
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </div>
//       <div>
//         Last Name:
//         <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       </div>
//     </div>
//   );
// };

// const ShowPerson = () => {
//   const [onlyFirstName, setOnlyFirstName] = useState(false);
//   const firstName = useStore((state) => state.firstName);
//   const lastName = useStore((state) => (onlyFirstName ? null : state.lastName));
//   return (
//     <div>
//       <button type="button" onClick={() => setOnlyFirstName((s) => !s)}>
//         {onlyFirstName ? 'Showing only first name' : 'Showing full name'}
//       </button>
//       {onlyFirstName ? (
//         <div>First Name: {firstName}</div>
//       ) : (
//         <div>
//           Full Name: {firstName} {lastName}
//         </div>
//       )}
//     </div>
//   );
// };

function App999() {
  // const firstName = useStore.useStore((state) => state.firstName);

  //const firstName = useStore.useStore((state) => state.firstName);

  // const firstName = useStore((state) => state.firstName);
  // const lastName = useStore((state) => state.lastName);
  // const setFirstName = useStore((state) => state.setFirstName);
  // const setLastName = useStore((state) => state.setLastName);
  return (
    <div>
      aaaaa
      {/* <EditPerson />
      <ShowPerson /> */}
    </div>
  );
}

export default App999;
