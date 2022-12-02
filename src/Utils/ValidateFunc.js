const email = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(regex);
};

const vnphone = (phoneNumber) => {
    const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return phoneNumber.match(regex);
};

const password = (password) => {
    const regex = /(?=.*[a-z])(?=.*[A-Z])((?=.*\d|[A-Za-z\d#$@!%&*?]))((?=.*[#$@!%&*?])|[A-Za-z\d#$@!%&*?]){8,30}/;
    return password.match(regex);
};

const notEmpty = (value) => {
if (value.length > 0) {
    return true;
}
return false;
}

const minLength = (value, number) => {
    if (value && value.length >= number) {
        return true;
    }
    return false;
}

const maxLength = (value, number) => {
    if (value && value.length <= number) {
        return true;
    }
    return false;
}

const isNumber = (value) => {
    const regex = /^\d+$/;
    return value.match(regex)
}
export const ValidateFunc = {
    email,
    vnphone,
    password,
    notEmpty,
    minLength,
    maxLength,
    isNumber
};