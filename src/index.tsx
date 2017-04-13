import { App, UserInterface } from 'reactxp'
import * as RX from 'reactxp'

import AwesomeApp from './App'

App.initialize(true, true);
UserInterface.setMainView(<AwesomeApp />);
