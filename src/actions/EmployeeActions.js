import { 
    EMPLYEE_UPDATE 
} from './types';

export const EmployeeUpdate = ({ prop, value }) => {
    return {
        key: EMPLYEE_UPDATE,
        payload: { prop, value }
    };
};
