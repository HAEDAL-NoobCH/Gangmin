import { useState } from 'react';

const SayName = () => {
    const [name, setName] = useState('');

    const onClickEnter = () => setName('Gangmin');

    const onClickLeave = () => setName('');
    return (
        <div>
            <button onClick={onClickEnter}>등장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{name}</h1>
        </div>
    );
};

export default SayName;
