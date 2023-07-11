import { useState } from 'react';

export const useForm = ( initialValue = {}) => {

    const [simpleForm, setSimpleForm] = useState( initialValue );

    const onInputChange = (e) => {
        const { name, value }= e.target;

        setSimpleForm({
            ...simpleForm,
            [name]: value
        })
    }


    const onResetForm = () => {
        setSimpleForm( initialValue );
    }

  return {
    ...simpleForm,
    onInputChange,
    onResetForm
  }
}
