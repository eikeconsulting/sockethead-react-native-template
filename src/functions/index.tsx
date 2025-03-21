import { DATE_TIME_FORMARTS } from "@app/constants";
import { Strings } from "@app/strings";
import moment from "moment";

export const DateTime = ({ dateTime = null, format = DATE_TIME_FORMARTS.ddmmyyyy }) => moment(dateTime).format(format);

export const ValidateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const ValidatePassword = (password: string, label = "Password") => {
    if (password == "") {
        return label + Strings.isRequired;
    }
    if (!/(?=.*[a-z])/.test(password)) {
        return Strings.lowerCaseValidation;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
        return Strings.uppercaseValidation;
    }
    if (!/(?=.*\d)/.test(password)) {
        return Strings.eightCharatersValidation;
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
        return Strings.specialCharacterValidation;
    }
    if (!/^[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        return Strings.eightCharatersValidation;
    }
    return Strings.passwordIsValid;
};
