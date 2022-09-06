import styles from 'styles/main/LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.login_body}>
            <div className={styles.max_screen}>
                <p>화면을 500px 이하로 줄여주세요.</p>
            </div>

            <div id='login_page'>
                <header className={styles.logo_header}>
                    <img src='logo.png' alt='카카오톡로고' className={styles.logo} />
                </header>
                <section className={styles.login_form} id='login_form'>
                    <form name='loginform' action='friend.html' method='post'>
                        <input
                            type='text'
                            className={styles.id_pw}
                            name='id'
                            alt='ID입력'
                            placeholder='계정'
                            required
                        />
                        <input
                            type='password'
                            className={styles.id_pw}
                            name='pwd'
                            alt='비밀번호입력'
                            placeholder='비밀번호'
                            required
                        />
                        <input
                            type='submit'
                            className={styles.loginbutton}
                            value='로그인'
                            alt='로그인버튼'
                        />
                        <label>
                            <input
                                type='checkbox'
                                name='auto_login'
                                id='auto-login'
                                value='auto_yes'
                                alt='자동로그인'
                            />
                            자동로그인
                        </label>
                    </form>
                </section>
            </div>
        </div>
    );
};
export default LoginPage;
