import { createContext } from 'react';
import moment from 'moment';

export const TimeContext = createContext(moment())