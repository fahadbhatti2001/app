import React, { useEffect, useState } from 'react';
import { UseUserAuth, Header,  } from '@/Components';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../FirebaseConfig';
import { collection, doc, getDocs } from 'firebase/firestore';
import Camera from "@/Assets/images/Camera.svg"

export const Dashboard = () => {

    const { logOut, user } = UseUserAuth();

    const [ users, setUsers ] = useState([])
    const userCollect = collection(db, "User")

    console.log(users)
    
    useEffect(() => {

        const getUsers = async () => {
            
            const data = await getDocs(userCollect)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

        };
 
        getUsers()

    }, [])

    return (
        <>
            <Header position="static"/>
            
            <div className="h-[90vh] px-20">

                <div className="grid grid-cols-12 w-full mb-2 gap-2">
                    <div className="col-span-7 bg-white rounded-md shadow">
                        <div className="h-[8vh] px-4 border-b flex items-center">
                        <h1 className="font-PoppinsRegular text-base">
                            Registed Students
                        </h1>
                        </div>
                        <div className="h-[37vh] overflow-auto w-full cst-scrollbar">
                            
                        {
                            users.map((e, i) => (
                                    <div key={i} className="grid grid-cols-12 place-items-center gap-2 p-4 border-t">
                                        <div className="col-span-2">
                                            <img src={e.image} className="object-cover w-10 h-10 rounded-full border-2 border-primary-0" />
                                        </div>
                                        <h1 className="col-span-4 font-PoppinsRegular w-full">
                                            {e.firstname} {e.lastname}
                                        </h1>
                                        <h1 className="col-span-6 font-PoppinsRegular w-full">
                                            {e.email}
                                        </h1>
                                    </div>  
                            ))
                        }
                        </div>
                    </div>
                    <div className="col-span-5 bg-white rounded-md shadow">
                        <div className="h-[8vh] px-4 border-b flex items-center">
                            <h1 className="font-PoppinsRegular text-base">
                                Register Students
                            </h1>
                        </div>
                        <form className="h-[37vh] flex flex-col justify-between overflow-auto w-full cst-scrollbar p-4">
                            <div className="flex gap-4">
                                <input className="font-PoppinsRegular outline-none bg-zinc-100 w-full rounded p-2" placeholder="First Name" type="text" />
                                <input className="font-PoppinsRegular outline-none bg-zinc-100 w-full rounded p-2" placeholder="Last Name" type="text" />
                            </div>
                            <div className="flex gap-4">
                                <input className="font-PoppinsRegular outline-none bg-zinc-100 w-full rounded p-2" placeholder="Email" type="email" />
                                <label htmlFor="image" className="font-PoppinsRegular outline-none bg-zinc-100 rounded p-2 px-4 flex justify-center">
                                    <img className="w-5" src={Camera}/>
                                </label>
                                <input id="image" type="file" />
                            </div>
                            <div className="flex gap-4">
                                <input className="font-PoppinsRegular outline-none bg-zinc-100 w-full rounded p-2" placeholder="User ID" type="text" />
                                <input className="font-PoppinsRegular outline-none bg-zinc-100 w-full rounded p-2" placeholder="Password" type="password" />
                            </div>
                            <div className="">
                                <input className="font-PoppinsMedium bg-primary-2 text-white w-full rounded p-2 text-center" defaultValue="Register" type="text" />
                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </>
    );
};