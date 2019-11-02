import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMachine = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/machines.json`)
    .then((response) => {
      const themMachines = response.data;
      const machines = [];
      Object.keys(themMachines).forEach((fbId) => {
        themMachines[fbId].id = fbId;
        machines.push(themMachines[fbId]);
      });
      resolve(machines[0]);
    })
    .catch((error) => reject(error));
});

export default { getMachine };
