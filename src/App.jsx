import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState([]);
  const downloadJson = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(user));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "users.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState("6");
  const [nat, setNat] = useState("all");
  const [male, setMale] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 12;

  async function fetchData(nat, number, male) {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?password=upper,lower,16&results=${number}&nat=${nat}&gender=${male}&inc=gender,picture,name,location,email,phone,login`
      );
      //setUser(response.data.results);
      const modifiedData = response.data.results.map(user => ({
        uuid: user.login.uuid,
        avatar: user.picture.large,
        fullName: `${user.name.first} ${user.name.last}`,
        address: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`,
        country: user.location.country,
        email: user.email,
        phone: user.phone,
        username: user.login.username,
        password: user.login.password,
      }));
      setUser(modifiedData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setUser([]);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchData(nat, number, male);
  }, [nat, number, male]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="col-span-12 md:col-span-4">
          <label
            htmlFor="user_number"
            className="block text-sm font-semibold mb-1"
          >
            Number Of Users :
          </label>
          <input
            id="user_number"
            onChange={e =>
              e.target.value.length > 0
                ? setNumber(e.target.value)
                : setNumber("6")
            }
            value={number}
            type="text"
            placeholder="Number of Users"
            maxLength="2"
            className="w-full h-[50px] rounded-md px-2 border border-slate-400"
          />
        </div>
        <div className="col-span-12 md:col-span-4">
          <label
            htmlFor="nationalities"
            className="block text-sm font-semibold mb-1"
          >
            Nationalities :
          </label>
          <select
            onChange={e => setNat(e.target.value)}
            id="nationalities"
            className="w-full h-[50px] rounded-md px-2 border border-slate-400"
          >
            <option value="all">All</option>
            <option value="au">Australia</option>
            <option value="br">Brazil</option>
            <option value="ca">Canada</option>
            <option value="ch">Switzerland</option>
            <option value="de">Germany</option>
            <option value="dk">Denmark</option>
            <option value="es">Spain</option>
            <option value="fi">Finland</option>
            <option value="fr">France</option>
            <option value="gb">United Kingdom</option>
            <option value="ie">Ireland</option>
            <option value="in">India</option>
            <option value="ir">Iran</option>
            <option value="mx">Mexico</option>
            <option value="nl">Netherlands</option>
            <option value="no">Norway</option>
            <option value="nz">New Zealand</option>
            <option value="rs">Serbia</option>
            <option value="tr">Türkiye</option>
            <option value="ua">Ukraine</option>
            <option value="us">United States</option>
          </select>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label htmlFor="gender" className="block text-sm font-semibold mb-1">
            Gender :
          </label>
          <select
            id="gender"
            onChange={e => setMale(e.target.value)}
            className="w-full h-[50px] rounded-md px-2 border border-slate-400"
          >
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-between">
        {user.length > 0 && (
          <div className="flex gap-2 mb-5">
            <button
              onClick={downloadJson}
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-blue-500 text-white"
            >
              Download User JSON
            </button>
          </div>
        )}
        {user.length > usersPerPage && (
          <div className="flex gap-1 justify-end mb-5">
            {[...Array(Math.ceil(user.length / usersPerPage)).keys()].map(
              number => (
                <button
                  key={number}
                  onClick={() => paginate(number + 1)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    currentPage === number + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {number + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
      {loading && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Loading...</h2>
        </div>
      )}
      <div className="grid grid-cols-12 gap-6 mb-5">
        {currentUsers.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
      {user.length > usersPerPage && (
        <div className="flex gap-1 justify-end">
          {[...Array(Math.ceil(user.length / usersPerPage)).keys()].map(
            number => (
              <button
                key={number}
                onClick={() => paginate(number + 1)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                  currentPage === number + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {number + 1}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default App;
