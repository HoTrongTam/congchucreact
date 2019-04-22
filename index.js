

import App from './App';
import { setCustomText } from './src/utils/custom';

const text = {
  style: {
    fontSize: 15,
    //fontFamily: 'Helvetica'
  }
}
setCustomText(text);
new App({});
