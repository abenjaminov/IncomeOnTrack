import { hash } from 'bcrypt';

(async () => {
    const saltedPassword = await hash('Aa123456', 10);

    console.log(saltedPassword);

    process.exit()
})()
