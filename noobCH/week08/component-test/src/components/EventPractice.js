import { useState } from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    const onChangeUsername = (e) => setUsername(e.target.value);
    const onCHangeMessage = (e) => setMessage(e.target.value);

    const onClickHandler = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    };
    return (
        <div>
            <input type="text" name="username" value={username} onChange={onChangeUsername} />
            <input type="text" name="username" value={message} onChange={onCHangeMessage} />
            <button onClick={onClickHandler}>확인</button>
        </div>
    );
};

export default EventPractice;
