import { useState } from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { logoGithub } from "ionicons/icons";
import AuthService from "../services/AuthService";

const Login: React.FC = () => {
    const [username, setUsername] = useState("")
    const [token, setToken] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault()

        setErrorMsg("");
        if (username.trim() === "" || token.trim() === "") {
            setErrorMsg("Por favor, ingrese su nombre de usuario y token.");
            return;
        }
        if (AuthService.login(username, token)) {
            window.location.href = "/tab1";
        } else {
            setErrorMsg("Nombre de usuario o token incorrectos");
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Iniciar Sesion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Iniciar Sesion</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div className="login-container">
                    <form className="login-form" onSubmit={handleLogin}>
                        <IonIcon icon={logoGithub} className="login-logo" />

                        <IonInput
                            className="login-field"
                            label="Nombre de Usuario"
                            labelPlacement="floating"
                            fill="outline"
                            type="text"
                            value={username}
                            onIonInput={(e) => setUsername((e.target as HTMLIonInputElement).value as string)}
                        />
                        <IonInput
                            className="login-field"
                            label="Contraseña"
                            labelPlacement="floating"
                            fill="outline"
                            type="password"
                            value={token}
                            onIonInput={(e) => setToken((e.target as HTMLIonInputElement).value as string)}
                        />

                        {errorMsg !== "" && <IonText color="danger"> {errorMsg} </IonText>}

                        <IonButton
                            className="login-button"
                            expand="block"
                            type="submit"
                        >
                            Iniciar Sesion
                        </IonButton>

                    </form>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Login;