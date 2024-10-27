import { LoginForm } from "./components/LoginForm";
import { ModalContainer } from "./components/ModalContainer";

export default function Home() {
    return (
        <ModalContainer>
            <LoginForm />
        </ModalContainer>
    );
}
