import FormComponent from "../components/FormComponent";
import { formFields } from "../constants/formFields";

const Home = () => {
 return (
  <main className="main-layout">
   <section className="main-container">
    <aside className="hero">
     <img src="/public/bg.jpg" alt="" />
     <span className="hero__overlay"></span>
    </aside>
    <div className="form__container">
     <h2 className="main__title">Lean Cadastro</h2>
     <FormComponent formFields={formFields} />
    </div>
   </section>
  </main>
 );
};

export default Home;
