const asset = (file) => {
	const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) || '/';
	return `${base}assets/${file}`;
};

export default asset;
