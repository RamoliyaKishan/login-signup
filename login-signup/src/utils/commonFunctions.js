const getToken = () => {
	return localStorage.getItem('token');
};

const removeToken = () => {
	return localStorage.removeItem('token');
};

const isAccessible = () => {
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

export {
	getToken,
	removeToken,
	isAccessible,
	getAccess,
	setAccess,
	removeAccess,
};
