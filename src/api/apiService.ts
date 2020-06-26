import { toJSON } from './utils';

import { METHODS } from './constants';

export class ApiService {
    private _endPoint?: string;

    constructor({ endPoint }: ApiT) {
        this._endPoint = endPoint;

        Object.assign(this, { endPoint });
    }

    _checkStatus(response: any) {
        if (response.status !== 200) {
            console.log(`${response.status}: ${response.statusText}`);
        }
        return response;
    }

    _load({
        query,
        method = null,
        body = null,
        headers = new Headers({
            'x-user-agent': 'Intento.Web.Axios/1.1.0',
        }),
    }: LoadT) {
        return fetch(`${this._endPoint}?${query}`, {
            method,
            body,
            headers,
        })
            .then(this._checkStatus)
            .then(toJSON)
            .catch(err => {
                console.log(err);
            });
    }

    getTtranslation({ token, translateText, locale, provider }: TranslateTaskT) {
        return this._load({
            query: `apikey=${token}`,
            body: JSON.stringify({
                context: {
                    text: translateText,
                    to: locale,
                },
                service: {
                    provider,
                },
            }),
            method: METHODS.POST,
        });
    }
}
