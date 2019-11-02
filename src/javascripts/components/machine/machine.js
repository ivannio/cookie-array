import './machine.scss';
import smush from '../../helpers/data/smush';
import utils from '../../helpers/utilities';
import snacks from '../snacks/snacks';

const buildTheMachine = () => {
  smush.getCompleteMachine()
    .then((positions) => {
      let domString = `<h2>VENDING MACHINE</h2>'
      <div id="snack-section" class="d-flex flex-wrap>`;
      positions.forEach((position) => {
        domString += snacks.snackBuilder(position);
      });
      domString += '</div>';
      utils.printToDom('stock', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
