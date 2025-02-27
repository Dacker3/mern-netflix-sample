import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import SignupPage from "./pages/SignupPage.jsx"
import WatchPage from "./pages/WatchPage";

import Footer from "./components/Footer.jsx"
import { Toaster } from "react-hot-toast"
import { useEffect } from "react";
import { useAuthStore } from "./store/authUser";
import { Loader } from "lucide-react";
import { Navigate } from "react-router-dom";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();
  console.log("auth user is here: ", user);

	useEffect(() => {
		authCheck();
	}, [authCheck]);

	if (isCheckingAuth) {
		return (
			<div className='h-screen'>
				<div className='flex justify-center items-center bg-black h-full'>
					<Loader className='animate-spin text-red-600 size-10' />
				</div>
			</div>
		);
	}
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
		<Route path='/signup' element={!user ? <SignupPage /> : <Navigate to={"/"} />} />
		<Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />

      </Routes>
      <Footer/>
      <Toaster/>
    </>
  )
}

export default App
