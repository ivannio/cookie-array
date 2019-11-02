import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllSnackPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snackPositions.json?orderBy="machineId"&equalTo="${machineId}"`)
    .then((response) => {
      const themSnackPositions = response.data;
      const SnackPositions = [];
      Object.keys(themSnackPositions).forEach((fbId) => {
        themSnackPositions[fbId].id = fbId;
        SnackPositions.push(themSnackPositions[fbId]);
      });
      resolve(SnackPositions);
    })
    .catch((error) => reject(error));
});

export default { getAllSnackPositionsByMachineId };
