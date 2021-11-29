import { useState, useEffect } from "react";
import initializeAuth from "./Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider
} from "firebase/auth";
import { useHistory } from "react-router";

initializeAuth();

const FirebaseAuth = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [quantity, setQuantity] = useState(1);


  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const auth = getAuth();
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoggedIn(true);
        setName(name);
        setEmail(email);
      }
    });
  }, [loggedIn]);

// increase quantity 
const increase = () => {
  setQuantity(quantity+1)
};

// decrease quantity 
const decrease = () => {
  if(quantity>1){
      setQuantity(quantity-1)
  }
};



  //    function for getting values from input field
  const getName = (e) => {
    setName(e.target.value);
  };

  // function for getting email from user
  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  //   function for getting password from user
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  //   registration for users
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setEmail(email);
        setName(name);
        setLoggedIn(true);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    history.push("/login");
  };

  //   login for users
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // const user = result.user;
        setLoggedIn(true);
        setUser(result.user);
        setEmail(result.user.email);
        console.log("successful");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log("failed");
      });
    history.push("/");
  };

//   google sign in 
const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const userProfile = result.user;
    setUser(result.user)
    setLoggedIn(true)
    setName(result.user.displayName)
    setEmail(result.user.email)
    history.push('/')
  }).catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // const email = error.email;
    // const credential = GoogleAuthProvider.credentialFromError(error);
  });
}


// github sign in 
const githubSignIn = () => {
    signInWithPopup(auth, githubProvider)
  .then((result) => {
    // const credential = GithubAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // const userProfile = result.user;
    setUser(result.user)
    setName(result.user.displayName)
    setEmail(result.user.email)
    setLoggedIn(true)
    history.push("/")
  }).catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // const email = error.email;
    // const credential = GithubAuthProvider.credentialFromError(error);
  });
}




  //   sign out
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setLoggedIn(false);
        setName('')
        setEmail('')
        setPassword('')
      })
      .catch((error) => {
        // An error happened.
      });
      history.push("/")
  };

  return {
    name,
    email,
    password,
    getName,
    getEmail,
    getPassword,
    register,
    login,
    loggedIn,
    user,
    logout,
    googleSignIn,
    githubSignIn,
    quantity,
    increase,
    decrease,
  };
};

export default FirebaseAuth;
