# Movie explorer

## Dev notes
1. There is a bug between apollo client and React 18, which sometimes makes useQuery hook get stuck on `loading: true`. I did not want to downgrade versions, because it would trigger a downgrade chain.
2. If the bug shows up (spinner is stuck), `React.StrictMode` should be deleted in `main.js`, save, then put it back. I am not sure what triggers the bug.

## Api keys
For testing the requests, swap the example text with the google api keys in `apiKeys.js`
