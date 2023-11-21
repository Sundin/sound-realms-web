import {
  getCurrentUser,
  signIn,
  signUp,
  confirmSignUp,
  resetPassword,
  confirmResetPassword,
  signOut,
} from "@aws-amplify/auth";

const helpers = {
  async signIn(username, password) {
    try {
      await this.handleSignOut();
      await signIn({
        username: username.trim(),
        password: password.trim(),
      });
      const user = await getCurrentUser();
      console.log(user);
      return user;
    } catch (error) {
      console.log("error signing in", error);
      throw error;
    }
  },
  async getCurrentUser() {
    const user = await getCurrentUser();
    console.log(user);
    return user;
  },
  async handleSignUp({ username, password, email }) {
    try {
      const signupResult = await signUp({
        username: username.trim(),
        password: password.trim(),
        attributes: { email: email.trim() },
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: true,
        },
      });
      console.log(signupResult);
      return signupResult.user;
    } catch (error) {
      console.log("error signing up:", error);
      throw error;
    }
  },
  async confirmSignUp({ username, confirmationCode }) {
    try {
      const result = await confirmSignUp({
        username: username.trim(),
        confirmationCode: confirmationCode.trim(),
      });
      console.log(result);
    } catch (error) {
      console.log("error confirming sign up", error);
      throw error;
    }
  },
  async handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  },
  async sendPasswordResetCode(username) {
    try {
      await resetPassword({ username: username.trim() });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async handleConfirmResetPassword({
    username,
    confirmationCode,
    newPassword,
  }) {
    try {
      await confirmResetPassword({
        username: username.trim(),
        confirmationCode: confirmationCode.trim(),
        newPassword: newPassword.trim(),
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default helpers;
