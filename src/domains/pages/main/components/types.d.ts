export type Step1PropsT = {
    token: string;
    handleChangeToken: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type Step2PropsT = {
    token: string;
    translateText: string;
    locale: string;
    provider: string;
    locales: string[];
    handleChangeTranslateText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeLocale: (event: any) => void;
    setTranslateTask: any;
};
