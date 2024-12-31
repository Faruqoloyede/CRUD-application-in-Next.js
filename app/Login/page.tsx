import Authform from '../../components/Authform'

const Signin = () => {
  return <Authform type='signin' />
}

export default Signin

// "use client";

// import { useState } from "react";
// import { account } from "../appwrite";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const LoginPage = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       await account.createEmailPasswordSession(email, password);
//       alert("Login successful!");
//       router.push("/")
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     handleLogin();
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow">
//       <h2 className="text-center text-2xl font-bold mb-4">Login</h2>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border border-gray-300 p-2 rounded"
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded mt-4"
//         >
//           Login
//         </button>
//         <p>on't have an account? <Link href='/Signup'>regidter</Link></p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
