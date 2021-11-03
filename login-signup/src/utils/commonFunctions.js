const getToken = () => {
	return localStorage.getItem('token');
};

const isAccessible = (path) => {
	if (getToken()) return true;
	return false;
};

const getAccess = () => {
	return localStorage.getItem('access');
};

const setAccess = () => {
	return localStorage.setItem('access', 'true');
};

const removeAccess = () => {
	return localStorage.removeItem('access');
};

export { getToken, isAccessible, getAccess, setAccess, removeAccess };
