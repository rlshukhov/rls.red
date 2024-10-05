class Language {

    public readonly RU: string = 'ru';
    public readonly EN: string = 'en';
    
    public currentLanguage(): string {
        const languageCode = navigator.language ? navigator.language.toLowerCase().substring(0, 2) : 'en';
        return languageCode === 'ru' ? this.RU : this.EN;
    }
}

export default new Language();