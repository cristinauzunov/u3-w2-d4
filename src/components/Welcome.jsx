import { Alert, Container } from "react-bootstrap";

function Welcome() {
  return (
    <section className="welcome-section">
      <Container>
        <div className="welcome-content">
          <h1 className="welcome-title">
            Benvenuto in
            <br />
          </h1>
          <p className="welcome-subtitle">
            La tua libreria personale, curata con amore per i lettori veri.
          </p>
          <Alert className="welcome-alert" dismissible>
            <Alert.Heading> Novità in arrivo!</Alert.Heading>
            <p className="mb-0">
              Iscriviti alla newsletter per non perdere nessuna uscita!
            </p>
          </Alert>
        </div>
      </Container>
    </section>
  );
}

export default Welcome;
