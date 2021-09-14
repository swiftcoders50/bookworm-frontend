import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
// firebase info
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
const app = initializeApp(firebaseConfig);
import {
	getAuth,
	signOut,
	updateProfile,
	onAuthStateChanged,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth();

// auth context
const AuthContext = createContext();

// we will can call it from any components and get values
export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [currentUser, setCurrentUser] = useState();

	// sign up user method
	const signup = async (name, email, password) => {
		await createUserWithEmailAndPassword(auth, email, password);
		await updateProfile(auth.currentUser, {
			displayName: name,
		});
	};

	console.log(currentUser);

	// login user method
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// logout user method
	const logout = () => {
		return signOut(auth);
	};

	// sent password reset email
	const passwordResetEmail = (email) => {
		return sendPasswordResetEmail(auth, email);
	};

	// get user information after login
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(true);
		});
		return unsubscribe;
	});

	const value = {
		signup,
		login,
		logout,
		currentUser,
		passwordResetEmail,
	};

	return (
		<AuthContext.Provider value={value}>
			{loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
