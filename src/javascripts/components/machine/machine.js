import './machine.scss';
import smush from '../../helpers/data/smush';

const buildTheMachine = () => {
  smush.getCompleteMachine()
    .then((singleMachine) => console.log('1 machine', singleMachine))
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
