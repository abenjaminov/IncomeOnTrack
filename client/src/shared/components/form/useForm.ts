import React from "react"

type FormField = {
    key: string;
    value: any;
}

type FormFieldDictionary = { [key: string] : FormField};

export const useForm = () => {

    const [formFields, setFormFields] = React.useState<FormFieldDictionary>({})

    const setValue = React.useCallback((key:string, value: any) => {
        const newFormFields = {...formFields};

        newFormFields[key].value = value;

        setFormFields(newFormFields);
    },[formFields]);

    const getValue = React.useCallback((key: string) => {
        const result = formFields[key]?.value;

        return result;
    },[formFields]);

    const register = React.useCallback((key:string, initialValue: any) => {
        setFormFields(previousFormFields => {
            const newFormFields = {...previousFormFields};

            if(!newFormFields[key]) {
                newFormFields[key] = {
                    key,
                    value: initialValue
                }
            }

            return newFormFields;
        })
    },[formFields])

    return {
        fields: formFields,
        context : {
            setValue,
            register,
            getValue
        }
    }
}