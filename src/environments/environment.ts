// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BACKEND_URL: 'http://localhost:3000/article',
  firebaseConfig: {
    apiKey: "AIzaSyD0JKIbHRKkN2KXcD-iI9ASZ94ICQL_u18",
    authDomain: "myblog-cb01a.firebaseapp.com",
    projectId: "myblog-cb01a",
    storageBucket: "myblog-cb01a.appspot.com",
    messagingSenderId: "946324371769",
    appId: "1:946324371769:web:c89071afc603c7638ed0e8"
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
