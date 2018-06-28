import {
    EMPLOYEE_UPDATE
} from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        key: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};
