const ListView = ({ phones, setPickedPhone, setEditting }) => {
  console.log(phones);
  return (
    <div className="list-view">
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {phones.length > 0 ? (
            phones.map((p) => (
              <tr
                key={p.id}
                onClick={() => {
                  setEditting(true);
                  setPickedPhone(p);
                }}
              >
                <td>{p.model}</td>
                <td>{p.brand}</td>
                <td>{p.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No Countries</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
