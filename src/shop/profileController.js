// Weird linter bug (https://stackoverflow.com/a/71793890)
// eslint-disable-next-line import/no-unresolved
import { Auth } from 'aws-amplify';

const helpers = {
  async signIn(username, password) {
    try {
      const user = Auth.signIn(username, password);
      console.log(user);
      return user;
    } catch (error) {
      console.log('error signing in', error);
      throw error;
    }
  },
};

export default helpers;
