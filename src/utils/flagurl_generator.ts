

class FlagUrlGenerator {
    private readonly BASE_URL;

    constructor() {
        this.BASE_URL = 'https://countryflagsapi.com/png/'
    }

    generate_flag_url(flag: string):string {
        const urlflag = `${this.BASE_URL}${flag}`;
        return urlflag;
     
    }

}

export default FlagUrlGenerator;