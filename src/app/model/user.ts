export class User {
    id: number = 0;
    guid: string = '';
    isActive: boolean = false;
    balance: string = '0';
    picture: string = '';
    age: number = 14;
    eyeColor: string = 'brown';
    name: {
        first: string,
        last: string
    } = {
            first: '',
            last: ''
        };
    company: string = '';
    email: string = '';
    phone: string = '';
    adress: string = '';
    about: string = '';
    registered: string = '';
    latitude: string = '';
    longitude: string = '';
    tags: string[] = [];
    range: number[] = [];
    friends: {}[] = [];
    greeting: string = '';
    favoriteFruit: string = '';
}
