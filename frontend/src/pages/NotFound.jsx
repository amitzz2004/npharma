import Button from "../components/common/Button";

const NotFound = () => {
  return (
    <section className="section" style={{ textAlign: "center", padding: "120px 0" }}>
      <div className="container">
        <h1 style={{ fontSize: "5rem", color: "var(--color-primary)", marginBottom: 10 }}>404</h1>
        <h2 style={{ marginBottom: 14 }}>Page Not Found</h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: 30 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button to="/" variant="primary">Back to Home</Button>
      </div>
    </section>
  );
};

export default NotFound;
