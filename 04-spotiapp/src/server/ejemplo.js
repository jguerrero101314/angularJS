/*----------------- funcion para actualizar token -----------------  */
/* ----------------- datos para el nuevo token ----------------- */
const REFRESH_TOKEN = "REFRESH_TOKEN_FROM_INITIAL_AUTH"
//url del token de la api
const REFRESH_TOKEN_URL = 'https://accounts.spotify.com/api/token'
//la cadena en base64 del usuario que genera el token
var token = "BASE64_ENCODED_USER:ACCESS_TOKEN?"
var access_token = "AUTH_TOKEN_FROM_INITIAL_AUTH"

/**
 * Actualizará el token y del la api en base un callback.
 * @param {Function} cb - callback */

function refreshToken (cb) {
  //se prepera nueva propuesta, Tipo/Nombre y Valor
  const newBody = JSON.stringify({
    grant_type: 'REFRESH_TOKEN',
    REFRESH_TOKEN: REFRESH_TOKEN
});

  // "JSON" con la información para la petición
  var requestParams = {
    'url': REFRESH_TOKEN_URL,
    'method': 'POST',
    'headers': {
      //el token del usuario
      'Authorization':    token,
      //el tipo del contenido que recivirá la api
      'Content-Type':   'application/x-www-form-urlencoded',
      // el tamaño del contenido que va a recibir
      'Content-Length': Buffer.byteLength(newBody)}}

  /** Se encargará de realizar la petición a la api para actualizar el token */
  const REQUEST = request(requestParams, (reject, resolve) => {
    if (resolve) {
      //"JSON" con la información del token
      const body = JSON.stringify(resolve.body)
      //asigna el nuevo token de acceso
      access_token = body.access_token;
      //se guarda en token la base64 del access_token
      token = btoa(access_token)
      //se ejecuta el callback
      cb()
    }

    if (reject) console.warn(reject);
  });

  REQUEST.write(newBody)
}