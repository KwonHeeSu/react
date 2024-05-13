import React, { useState } from 'react';
import './LoginForm.css'

function LoginForm() {
    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        // 서버로 전송될 데이터
        const data = {
            userID: userID,
            userPW: userPW
        };

        try {
            const response = await fetch('/DayBridge/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('로그인 성공: ', response);
                window.location.href = "/DayBridge/form";
            } else {
                console.error('로그인 실패: ', response.statusText);
                alert('아이디 혹은 비밀번호를 다시 확인하세요.');
            }
        } catch (error) {
            console.error('로그인 중 에러:', error)
            alert('오류 발생');
        }
    };

    return (
        <div>
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <label className="label" htmlFor="userID">아이디: </label>
                    <input
                        type="text"
                        id="userID"
                        name="userID"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        required
                    />
                </div>
                <div className="container">
                    <label className="label" htmlFor="userPW">비밀번호: </label>
                    <input
                        type="password"
                        id="userPW"
                        name="userPW"
                        value={userPW}
                        onChange={(e) => setUserPW(e.target.value)}
                        required
                    />
                </div>
                <div className="container">
                    <button className="sign_in" type="submit">로그인</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;