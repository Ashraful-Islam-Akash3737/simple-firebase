/**
 * 1.console.firebase.google.com
 * 2.create project (skip google analytics)
 * 3.register app (create config)
 * 4.install firebase: npm install firebase
 * 5.add config file to your project.
 * 6. DANGER: do not publish or make firebase config to public by pushing those to github
 * 7.Visit: firebase.google.com > go to docs > build > web > get started
 * 8. export app from firebase.config.js file: export default app
 * 9. Login.jsx: import  {getAuth} from "firebase/auth"
 * 10. create: const auth = getAuth(app)
 * 11.import googleAuthProvider and create a new provider
 * 12. use signInWithPopUp and pass (auth , provider)
 * 13.activate (your current project > build > authentication > Sign-in method) signIn method (google, facebook, github etc)
 * 
 * 
 */