import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/positions.json?orderBy="machineId"&equalTo="${machineId}"`)
    .then((response) => {
      const themPositions = response.data;
      const positions = [];
      Object.keys(themPositions).forEach((fbId) => {
        themPositions[fbId].id = fbId;
        positions.push(themPositions[fbId]);
      });
      resolve(positions);
    })
    .catch((error) => reject(error));
});

export default { getAllPositionsByMachineId };
