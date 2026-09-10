export const usePasswordValidator = (password: string) => {
    const errors:string[] = [];

    if(password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }

    if(!password.match(/[A-Z]/)) {
        errors.push('Password must contain at least one uppercase letter');
    }

    if(!password.match(/[a-z]/)) {
        errors.push('Password must contain at least one lowercase letter');
    }
    if(!password.match(/[0-9]/)) {
        errors.push('Password must contain at least one number');
    }
    const isValid = errors.length === 0;

    return {isValid, errors};
}
    