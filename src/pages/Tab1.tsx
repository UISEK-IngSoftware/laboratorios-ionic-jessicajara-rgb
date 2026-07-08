import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Tab1.css';
import RepoItem from "../components/RepoItem";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          <RepoItem
            name="Repositorio 1"
            description="This is a description for Repo 5."
            language="JavaScript"
            avatarUrl="https://avatars.githubusercontent.com/u/1?v=4"
          />

          <RepoItem
            name="Repositorio 2"
            description="This is a description for Repo 5."
            language="JavaScript"
            avatarUrl="https://avatars.githubusercontent.com/u/1?v=4"
          />
          <RepoItem
            name="Repositorio 3"
            description="This is a description for Repo 5."
            language="Python"
            avatarUrl="https://avatars.githubusercontent.com/u/1?v=4"

          />
          <RepoItem
            name="Repositorio 4"
            description="This is a description for Repo 5."
            language="Java"
            avatarUrl="https://avatars.githubusercontent.com/u/1?v=4"
          />
          <RepoItem
            name="Repositorio 5"
            description="This is a description for Repo 5."
            language="TypeScript"
            avatarUrl="https://avatars.githubusercontent.com/u/1?v=4"
          />

        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
