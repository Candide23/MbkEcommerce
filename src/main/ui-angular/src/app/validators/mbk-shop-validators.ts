import { FormControl, ValidationErrors } from "@angular/forms";

export class MbkShopValidators {

    // whitespce validation
    static notOnlyWhitespace(control: FormControl): ValidationErrors {

        // check if string only contains whitespce

        if((control.value != null) && (control.value.trim().length === 0)) {
            return { 'notOnlyWhitespace': true };
        }
        else {
            // vaid, retrun null
            return null;
        }      

    }

}
