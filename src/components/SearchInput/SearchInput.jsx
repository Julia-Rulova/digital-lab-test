import './SearchInput.css';

import { useEffect, useState } from 'react';

export default function SearchInput({ sortCards }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        sortCards(value);
    }, [value])

    function handleChangeValue(evt) {
        setValue(evt.target.value);
    }

    return (
        <section className='search'>
            <input
                className='search__input'
                type='text'
                placeholder='Введите текст...'
                value={value}
                onChange={handleChangeValue}
                autoFocus={true}
            />
        </section>
    )
}