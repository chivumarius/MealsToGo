# Setting up Full Build
  1. Go to functions folder
  2. Run yarn
  3. Login to firebase firebase login
  4. Set the correct project name in firebase.json
  5. Set your firebase config in App.js
  6. Run firebase functions:config:set stripe.key=<your key> 7 In the firebase folder run firebase functions:config:get > .runtimeconfig.json
  7. Run yarn serve in the firebase folder
  8. Run the Expo app
  9. Make sure env.js is set to mock mode unless you have google keys.
