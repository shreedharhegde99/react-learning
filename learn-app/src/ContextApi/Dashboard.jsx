import React from "react";
import { AuthContext } from "./ContextProvider";

export default function Dashboard() {


  return (
    <AuthContext.Consumer>
      {
        ({ email,logout }) => {
          const name  = email.split("@")
          return (
            <div>
              Welcome {name[0]}   !

              <button onClick={logout}>Log Out</button>
            </div>
          )
        }
      }
    </AuthContext.Consumer>
  );
}