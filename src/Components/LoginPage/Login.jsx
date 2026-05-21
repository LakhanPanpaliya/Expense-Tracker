import LoginFooter from "./LoginFooter/LoginFooter";
import LoginForm from "./LoginForm/LoginForm";
import LoginHeader from "./LoginHeader/LoginHeader";

 
function Login({user}){
    return (
        <>
            <LoginHeader/>
            <LoginForm userData = {user}/>
            <LoginFooter/>
        </>
    );
};

export default Login;
