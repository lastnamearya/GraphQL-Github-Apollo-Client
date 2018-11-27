import 'dotenv/config';

const userCredentials = { firstname: 'Jigyasu' };
const userDetails = { nationality: 'India' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
