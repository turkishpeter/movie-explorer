export const handleMovieLinks = async (
    title,
    setLoading,
    setResults,
    setImdbResults,
    endpoints,
    keys
) => {
    const endpointWiki = endpoints.WIKIPEDIA(title);
    const endpointGoogle = endpoints.GOOGLE(
        keys.GOOGLE_APP_ID,
        keys.GOOGLE_SE_ID,
        title
    );
    const responseWiki = await fetch(endpointWiki);
    if (!responseWiki.ok) {
        console.log(responseWiki.statusText);
    }
    const json = await responseWiki.json();
    setResults(json.query.search);
    const responseGoogle = await fetch(endpointGoogle);
    if (!responseWiki.ok) {
        console.log(responseGoogle.statusText);
    }
    const googleJson = await responseGoogle.json();
    setLoading(false);
    setImdbResults(googleJson.items);
};
