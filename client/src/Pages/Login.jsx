import Form from "../Components/Form";
import Header from "../Components/Header";
import { useAuth } from "../Context/AuthContext.jsx"; // Import AuthContext

function Login() {
  const { login } = useAuth(); // Use login function from AuthContext

  return (
    <div className="h-[100vh] bg-[#1a202c] flex flex-col">
      <Header />
      <main className="flex flex-auto justify-center items-center align-middle">
        <Form login={login} /> {/* Pass login function to Form */}
      </main>
    </div>
  );
}

export default Login;
