function Welcome({ name }) {
  return (
    <section>
      <h2 className="user-name">
        Hello, <span className="user-first-name">{name}</span> 🎉🔥
      </h2>
    </section>
  );
}

export default Welcome;
