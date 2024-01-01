export const StaticPath = (url: string) => {
	const staticPath = process.env.STATIC_URL;
    let staticUrl = staticPath + url;
    
	return staticUrl;
};
