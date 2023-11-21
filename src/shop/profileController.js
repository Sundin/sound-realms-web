// Weird linter bug (https://stackoverflow.com/a/71793890)
// eslint-disable-next-line import/no-unresolved
//import { Auth } from 'aws-amplify';
import { getCurrentUser, signIn, signUp, confirmSignUp, autoSignIn, signOut } from '@aws-amplify/auth';

const helpers = {
  async signIn(username, password) {
    try {
      await this.handleSignOut();
      await signIn({username, password});
      const user = await getCurrentUser();
      console.log(user);
      return user;
    } catch (error) {
      console.log('error signing in', error);
      throw error;
    }
  },
  async handleSignUp({ username, password, email }) {
    try {
      const signupResult = await signUp({
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
      const result = await confirmSignUp({
        username,
        confirmationCode,
    });
      console.log(result);
    } catch (error) {
      console.log('error confirming sign up', error);
      throw error;
    }
  },
  async handleAutoSignIn() {
    try {
      await this.handleSignOut();
      const signInOutput = await autoSignIn();
      console.log("AUTO SIGN IN");
      console.log(signInOutput);
      // handle sign-in steps
    } catch (error) {
      console.log(error);
    }
  },
  async handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  },
};

export default helpers;
