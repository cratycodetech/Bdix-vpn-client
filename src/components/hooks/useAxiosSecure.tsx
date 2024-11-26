// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '@/pages/redux/hook';
// import { logout, useCurrentUser } from '@/pages/redux/features/auth/authSlice';

// const axiosSecure = axios.create({
//   baseURL: 'http://localhost:7000',
// });

// const useAxiosSecure = () => {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const currentUser = useAppSelector(useCurrentUser);

//   useEffect(() => {
//     const setToken = async () => {
//       if (currentUser) {
//         const { data } = await axios.post('http://localhost:7000/jwt', {
//           email: currentUser.email
//         });
//         localStorage.setItem('access-token', data.token);
//       } else {
//         localStorage.removeItem('access-token');
//       }
//     };

//     setToken();

//     axiosSecure.interceptors.request.use((config: any) => {
//       const token = localStorage.getItem('access-token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });

//     axiosSecure.interceptors.response.use(
//       (response: any) => response,
//       async (error: any) => {
//         if (error.response && (error.response.status === 401 || error.response.status === 403)) {
//           dispatch(logout());
//           navigate('/login');
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [navigate, dispatch, currentUser]);

//   return [axiosSecure];
// };

// export default useAxiosSecure;
