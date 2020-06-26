const err = (errMsg: string) => {
    throw new Error(errMsg);
};

export const TRANSLATE_API_ENDPOINT =
    process.env.REACT_APP_TRANSLATE_API_ENDPOINT || err('REACT_APP_TRANSLATE_API_ENDPOINT is required env var.');
