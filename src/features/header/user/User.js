function User() {
  return (
    <figure className="user" data-testid="user">
      <img src={process.env.PUBLIC_URL + '/img/Deia.jpg'} alt="Deia" />
    </figure>
  );
}

export default User;
