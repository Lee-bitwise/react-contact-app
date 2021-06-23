import {LoginForm} from "./LoginForm"
import styled from "styled-components";

const LoginPage = (props) => {
    return (
        <Wrapper>
            <div className="form_wrapper shadow">
                <LoginForm />
                <div>
                    <p>Don't have an account? <a href="/register">Register</a>.</p>
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    background-color: lightgrey;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export default LoginPage;