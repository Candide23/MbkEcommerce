import { FormControl, ValidationErrors } from "@angular/forms";

export class MbkShopValidators {

    // whitespace validation
    static notOnlyWhitespace(control: FormControl): ValidationErrors {

        // check if string is not empty and does not contain only whitespace
        if((control.value != null) && (control.value.trim().length === 0)) {
            return { 'notOnlyWhitespace': true };
        }
        else {
            // return null if validation passes
            return null;
        }

    }

}
