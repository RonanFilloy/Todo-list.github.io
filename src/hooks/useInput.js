import {useState} from 'react';

function useInput(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleChange = (evt) => {
        setValue(evt.target.value);
    }
    const reset = () => {
        setValue('');
    }
    return [value, handleChange, reset];
}

export default useInput
