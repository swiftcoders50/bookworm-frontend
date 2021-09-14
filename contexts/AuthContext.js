import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
// firebase info
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
const app = initializeApp(firebaseConfig);
import {
	getAuth,
	signOut,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth();

const AuthContext = createContext();

// we will can call it from any components and get values
export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [currentUser, setCurrentUser] = useState();

	// sign up user method
	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// login user method
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// logout user method
	const logout = () => {
		return auth.signOut();
	};

	// sent password reset email
	const passwordResetEmail = (email) => {
		return auth.sendPasswordResetEmail(email);
	};

	// update email
	function updateEmail(email) {
		return currentUser.updateEmail(email);
	}

	// update password
	function updatePassword(password) {
		return currentUser.updatePassword(password);
	}

	// get user information after login
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(true);
		});
		return unsubscribe;
	});

	const value = {
		currentUser,
		signup,
		login,
		logout,
		passwordResetEmail,
		updatePassword,
		updateEmail,
	};

	return (
		<AuthContext.Provider value={value}>
			{loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
