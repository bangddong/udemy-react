export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITAL INVESTMENT</label>
          <input type="number"></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number"></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number"></input>
        </p>
        <p>
          <label>DUREATION</label>
          <input type="number"></input>
        </p>
      </div>
    </section>
  );
}
