export const handleMovieLinks = async (
    title,
    setLoading,
    setResults,
    setImdbResults,
    setImdbError,
    endpoints,
    keys
) => {
    const endpointWiki = endpoints.WIKIPEDIA(title);
    const endpointGoogle = endpoints.GOOGLE(
        keys.GOOGLE_APP_ID,
        keys.GOOGLE_SE_ID,
        title
    );
    setImdbError('');
    const responseWiki = await fetch(endpointWiki);
    if (!responseWiki.ok) {
        console.log(responseWiki.statusText);
    }
    const json = await responseWiki.json();
    setResults(json.query.search);
    const responseGoogle = await fetch(endpointGoogle);
    if (!responseGoogle.ok) {
        setImdbError(
            'Could not fetch imdb link. Please review the google api keys in apiKeys file!'
        );
    }
    const googleJson = await responseGoogle.json();
    setLoading(false);
    setImdbResults(googleJson.items);
};
