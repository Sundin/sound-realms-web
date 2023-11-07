import { Auth } from 'aws-amplify';

const helpers = {
  signIn(username, password) {
    console.log('sign in');
    try {
      const user = Auth.signIn(username, password);
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  },
};

export default helpers;
