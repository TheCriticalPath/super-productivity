import { WORKLOG_DATE_STR_FORMAT } from '../../../app.constants';
import * as moment from 'moment-mini';

export const getTodayStr = () => moment().format(WORKLOG_DATE_STR_FORMAT);
