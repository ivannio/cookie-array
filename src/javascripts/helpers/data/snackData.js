import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSnacksByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snacks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const themSnacks = response.data;
      const snacks = [];
      Object.keys(themSnacks).forEach((fbId) => {
        themSnacks[fbId].id = fbId;
        snacks.push(themSnacks[fbId]);
      });
      resolve(snacks);
    })
    .catch((error) => reject(error));
});

export default { getSnacksByUid };
