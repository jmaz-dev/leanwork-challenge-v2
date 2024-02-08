import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { storageKey } from "../constants/store";

const Profile = () => {
 const { data, deleteData } = useLocalStorage(storageKey);
 const navigate = useNavigate();
 const [welcome, setWelcome] = useState(true);
 const [sidenav, setSidenav] = useState(false);

 useEffect(() => {
  if (!data) {
   navigate("/");
  }
 }, [navigate, data]);

 return (
  <main className="main-layout hero__overlay profile">
   <section>
    <nav>
     <button onClick={() => setSidenav(!sidenav)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height={40}>
       <path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z" />
      </svg>
     </button>
    </nav>
    {sidenav && (
     <aside className="sidenav">
      <header>
       <img src="/logo.jpg" height={70} width={70} alt="logo" />
       <button onClick={() => setSidenav(!sidenav)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" height={40}>
         <path d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z" />
        </svg>
       </button>
      </header>
      <ul>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 448 512">
         <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
        </svg>
        {data?.username}
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512">
         <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 .3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 .4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
        </svg>
        {data?.email}
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 576 512">
         <path d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z" />
        </svg>
        {data?.cpf}
       </li>
       <li>
        <svg xmlns="http://www.w3.org/2000/svg" height={20} viewBox="0 0 512 512">
         <path d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z" />
        </svg>
        {data?.tel}
       </li>
      </ul>
      <div>
       <button
        className="btn__danger"
        onClick={() => {
         deleteData();
         navigate("/");
        }}
       >
        Sair
       </button>
      </div>
     </aside>
    )}
    {welcome && (
     <>
      <div className="container__welcome">
       <img src="/logo.jpg" height={100} width={100} alt="logo" />
       <h3>
        Bem vindo {data?.username.split(" ")[0]}!!{" "}
        <img src="/party-hat-icon.svg" height={25} width={25} alt="festa-icon" />
       </h3>
       <button type="button" className="btn-primary" onClick={() => setWelcome(!welcome)}>
        Conitnuar
       </button>
      </div>
      <span className="overlay__profile"></span>
     </>
    )}
   </section>
  </main>
 );
};

export default Profile;
