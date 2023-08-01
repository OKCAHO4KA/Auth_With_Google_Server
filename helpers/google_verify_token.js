


const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '410184167947-e77fnscpu9db446qma60jdh3qmi80osf.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken  = async( token) => {
 
 
 try{   const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [CLIENT_ID, '410184167947-7e9sqjjmvpd42fckr1e1dh0kd0lu6r5r.apps.googleusercontent.com',
    '410184167947-gfs04j6ksuuvqk5fpf31chvl2kbroutt.apps.googleusercontent.com'
    ]  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
//   const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];

console.log('=================PAYLOAD=================');
console.log(payload);

return {
    name: payload['name'],
    picture: payload['picture'],
    email: payload['email']

}
 }
 catch(e) { return null;}

}
module.exports = {validarGoogleIdToken};