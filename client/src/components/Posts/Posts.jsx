import React from 'react'
import { useState,useRef } from 'react'
import axios from 'axios'

const Posts = () => {
    const[name,setName]=useState();
    const[task,setTask]=useState();
    const[email,setEmail]=useState();
    const[doubt,setDoubt]=useState();
    const[status,setStatus]=useState();
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post("https://mern-stack-seven-gray.vercel.app/create",{name,task,email,doubt,status})
        .then(result=>{
            if(result.status===200){
                console.log('user created');
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
  return (
    <>
        <div className="">
            <div className="lg:w-1/2 border-2 mt-16 mx-auto">
                <form onSubmit={(e)=>handleSubmit(e)} >
                    <div className="">
                        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' className='border-b-2 mt-5 mx-10' />
                    </div>
                    <div className="">
                        <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder='Given Task' className='border-b-2 mt-5 mx-10'/>
                    </div>
                    <div className="">
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your mail' className='border-b-2 mt-5 mx-10' />
                    </div>
                    <div className="">
                        <input type="text" onChange={(e)=>setDoubt(e.target.value)} placeholder='Is there any doubts' className='border-b-2 mt-5 mx-10' />
                    </div>
                    <div className="">
                        <input type="text" onChange={(e)=>setStatus(e.target.value)} placeholder='Task completed or not' className='border-b-2 mt-5 mx-10' />
                    </div>
                    <div className="">
                        <button type="submit" className='my-5 bg-slate-500 mx-10 px-10'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Posts