import { translateData } from '../constants';
import store from '../store';


export const t = (str: string) => {
    return translateData[str][store.getState().lang];
}

