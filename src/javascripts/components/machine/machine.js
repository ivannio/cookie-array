import utilities from '../../helpers/utilities';
import smush from '../../helpers/data/smush';
import snack from '../Snack/snack';

const buildTheMachine = () => {
  smush.getCompleteMachine()
    .then((positions) => {
      // build a dom string - done
      // h2 that says VENDING MACHINE - done
      // div with an id = snack-section, class=d-flex flex-wrap - done
      // forEach over positions - call a component called snacks - done
      // snacks component should return a bootstrap card - done
      // printToDom('stock', domString) - done
      let domString = '<h2>VENDING MACHINE</h2>';
      domString += '<div id="snack-section" class="d-flex flex-wrap">';
      positions.forEach((position) => {
        domString += snack.makeASnack(position);
      });
      domString += '</div>';
      utilities.printToDom('machine', domString);
    })
    .catch((error) => console.error(error));
};

export default { buildTheMachine };
