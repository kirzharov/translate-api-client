import { ApiService } from '../api';

import { TRANSLATE_API_ENDPOINT } from '../configs/env';

export const api = new ApiService({
    endPoint: TRANSLATE_API_ENDPOINT,
});

export const translate = (translateTask: TranslateTaskT) => api.getTtranslation(translateTask);
