export const StaticPath = (url: string) => {
	const staticPath = process.env.DUMMY_JSON_URI;
    let staticUrl = staticPath + url;
    
	return staticUrl;
};
