import { useState } from 'react';
import { useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');

    const onChangeName = (e) => setName(e.target.value);

    useEffect(() => {
        console.log('랜더링 완료');
    });
    return (
        <div>
            <input value={name} onChange={onChangeName} />
            <input />

            <h1>{name}</h1>
        </div>
    );
};

export default Info;
