// import { createContext, useState } from "react";

// interface ContextType {
//   user: string;
//   setUser: React.Dispatch<React.SetStateAction<string>>;
// }

// export const Context = createContext<ContextType>({
//   user: "",
//   setUser: () => {},
// });

// export const ContextProvider = ({ children }) => {
//   const [user, setUser] = useState(false);

//   return (
//     <Context.Provider
//       value={{
//         user,
//         setUser,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };
