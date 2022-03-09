export interface user_details {
    name: string;
    email: string;
    password: string;
    frame_size: string;
    age: string;
    faverateFrames: string;
    orderHistory: string;
}

interface userclass extends user_details {}

class userclass {
    // destruct data
    constructor({name, email, password, frame_size, age, faverateFrames, orderHistory}: user_details) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.frame_size = frame_size;
        this.age = age;
        this.faverateFrames = faverateFrames;
        this.orderHistory = orderHistory;
    }

    toObject(): user_details {
        // destruct all own properties
        // (not methods in prototype)
        return {...this};
    }
}
