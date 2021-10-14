import React, { createContext, useContext, useEffect, useState } from "react";

// admin context
const AdminContext = createContext();

// we will can call it from any components and get values
export const useAdmin = () => {
	return useContext(AdminContext);
};

const AdminProvider = ({ children }) => {
	const [admin, setAdmin] = useState({ isAdmin: false });

	const value = {
		admin,
		setAdmin,
	};

	return (
		<AdminContext.Provider value={value}>{children}</AdminContext.Provider>
	);
};

export default AdminProvider;
