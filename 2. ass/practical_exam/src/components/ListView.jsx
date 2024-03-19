const ListView = ({ countries, deleteCountry, setPickedCountry}) => {
  return (
    <div className="list-view">
      <table>
        <thead>
          <tr>
            <th>Country Code</th>
            <th>Country Name</th>
            <th>Capital City</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {countries.length > 0 ? (
            countries.map((c) => (
              <tr key={c.id}>
                <td>{c.code}</td>
                <td>{c.name}</td>
                <td>{c.capital}</td>
                <td className="link-button">
                  <a href="#" onClick={() => {setPickedCountry(c)}}>Modify </a>|
                  <a href="#" onClick={() => {deleteCountry(c.id)}}> Delete</a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No Countries</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ListView;
