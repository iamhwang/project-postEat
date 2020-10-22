/* eslint-disable react/prop-types */
import React from 'react';

import { TextField, Button } from '@material-ui/core';
import useStyles from './css';

export default function AuthPage({
  fields, onChange, onClick, onSubmit, onGoogle, LoginErrorMessage,
}) {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  const cssStyle = useStyles();
  const calendar = '../images/calendar.png';
  const logo = '../images/posteat.png';

  return (
    <div className={cssStyle.backgroundLogin}>
      <div className={cssStyle.windowLogin}>
        <div className={cssStyle.windowleft}>
          <img src={calendar} width="500px" alt="Calendar" />
        </div>
        <div className={cssStyle.windowRight}>
          <img src={logo} width="500px" alt="PostEat Logo" />
          <TextField
            className={cssStyle.textfieldLogin}
            name="email"
            type="text"
            label="이메일"
            variant="outlined"
            value={email}
            onChange={handleChange}
          />
          <TextField
            className={cssStyle.textfieldLogin}
            name="password"
            type="password"
            label="비밀번호"
            autoComplete="current-password"
            variant="outlined"
            value={password}
            onChange={handleChange}
          />
          <Button
            className={cssStyle.buttonLogin}
            type="button"
            color="primary"
            variant="contained"
            onClick={onClick}
          >
            로그인
          </Button>
          <Button
            className={cssStyle.buttonGoogleIn}
            type="button"
            color="primary"
            variant="contained"
            onClick={onGoogle}
          >
            구글로 시작하기
          </Button>
          <Button
            className={cssStyle.buttonSignIn}
            type="button"
            color="primary"
            variant="contained"
            onClick={onSubmit}
          >
            이메일로 시작하기
          </Button>
          <p className={cssStyle.errorMessage}>
            {LoginErrorMessage}
          </p>
          <footer>
            &copy;
            Post Eat @iamhwang
          </footer>
        </div>
      </div>
    </div>
  );
}
