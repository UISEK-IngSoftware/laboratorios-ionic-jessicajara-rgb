import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
          <IonCard className="card">
            <img src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="Avatar" className="acrd-avatar" />
          <IonCardHeader>
            <IonCardTitle> Jessica Jara</IonCardTitle>
            <IonCardSubtitle> jessicajara@uisek.edu.ec</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p> Desarrollador web con experiencia en frontend y backend.
            Apasionado por la tecnologia y el código limpio.</p>
          </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
