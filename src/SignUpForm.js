import React, { useState } from 'react';
import './SignUpForm.css'

function SignUpForm() {
    const [userID, setUserID] = useState('');
    const [userPW, setUserPW] = useState('');
    const [pwCheck, setPwCheck] = useState('');
    const [email, setEmail] = useState('');
    const [nickName, setNickName] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault(); // 기본 제출 동작 방지

        // 필수 입력 필드 확인
        const requiredFields = [userID, userPW, pwCheck, email, nickName, name];
        const isEmpty = requiredFields.some(field => field.trim() === '');
        if (isEmpty) {
            alert('모든 필수 입력 항목을 작성해주세요.');
            return;
        }

        // 서버로 전송될 데이터
        const data = {
            userID: userID,
            userPW: userPW,
            pwCheck: pwCheck,
            email: email,
            nickName: nickName,
            name: name
        };

        try {
            const response = await fetch('/DayBridge/signUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('회원가입 성공: ', response);
                // 성공 시 리다이렉트 또는 다른 작업 수행
            } else {
                console.error('회원가입 실패: ', response.statusText);
                alert('회원가입에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.error('회원가입 중 에러:', error)
            alert('오류 발생');
        }
    };

    const handleIDCheck = () => {
        // 아이디 중복 확인 로직
        // 여기에 필요한 fetch 요청 등을 작성
    };

    const handleNickNameCheck = () => {
        // 닉네임 중복 확인 로직
        // 여기에 필요한 fetch 요청 등을 작성
    };

    return (
        <div>
            <br></br>
            <h1>회원가입</h1>
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={handleSignUp}>
                <div className="container">
                    <div className="inner-container">
                        <b className="name">아이디</b>
                        <input
                            className="text"
                            type="text"
                            value={userID}
                            onChange={(e) => setUserID(e.target.value)}
                            placeholder="아이디 입력"
                        />
                        <input
                            className="check-button"
                            type="button"
                            onClick={handleIDCheck}
                            value="중복확인"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="inner-container">
                        <b className="name">비밀번호</b>
                        <input
                            className="text"
                            type="password"
                            value={userPW}
                            onChange={(e) => setUserPW(e.target.value)}
                            placeholder="비밀번호 입력"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="inner-container">
                        <b className="name">비밀번호 확인</b>
                        <input
                            className="text"
                            type="password"
                            value={pwCheck}
                            onChange={(e) => setPwCheck(e.target.value)}
                            placeholder="비밀번호 입력"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="inner-container">
                        <b className="name">이메일</b>
                        <input
                            className="text"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email 입력"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="inner-container">
                        <b className="name">닉네임</b>
                        <input
                            className="text"
                            type="text"
                            value={nickName}
                            onChange={(e) => setNickName(e.target.value)}
                            placeholder="닉네임 입력"
                        />
                        <input
                            className="check-button"
                            type="button"
                            onClick={handleNickNameCheck}
                            value="중복확인"
                        />
                    </div>
                </div>
                <div className="container">
                    <div className="inner-container">
                        <b className="name">이름</b>
                        <input
                            className="text"
                            type="text"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="이름 입력"/>
                    </div>
                </div>
                <div>
                    <button className="sign_up" type="submit">회원가입</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
