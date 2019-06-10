import { REGISTER_FORM, SEND_API } from './constants';

export function handleChange(key, value) {
    return {
        type: REGISTER_FORM,
        key,
        value
    };
}

export function registerUser() {
    return {
        type: SEND_API,
    }
}

export function success(message) {
    return {
        type: 'success',
        message
    }
}

export function error(message) {
    return {
        type: 'error',
        message
    }
}