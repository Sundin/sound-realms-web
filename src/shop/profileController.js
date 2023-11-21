// Weird linter bug (https://stackoverflow.com/a/71793890)
// eslint-disable-next-line import/no-unresolved
import { Auth } from 'aws-amplify';
//import { signUp } from '@aws-amplify/auth';

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
  async handleSignUp({ username, password, email }) {
    try {
      const signupResult = await Auth.signUp({
        username,
        password,
        attributes: { email },
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: true,
        }
      });
      console.log(signupResult);
      return signupResult.user;
    } catch (error) {
      console.log('error signing up:', error);
      throw error;
    }
  },
  async confirmSignUp({username, confirmationCode}) {
    try {
      const result = await Auth.confirmSignUp(
        username,
        confirmationCode,
      );
      console.log(result);
    } catch (error) {
      console.log('error confirming sign up', error);
      throw error;
    }
  },
  async handleAutoSignIn() {
    try {
      const signInOutput = await Auth.autoSignIn();
      console.log("AUTO SIGN IN");
      console.log(signInOutput);
      // handle sign-in steps
    } catch (error) {
      console.log(error);
    }
  },
};

export default helpers;
