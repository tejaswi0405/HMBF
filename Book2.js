import React, { useState } from 'react'

export default function Book2() {
    const [name, setName]= useState('');
  return (
    <div>
        <form>
            <div className="name">
                Name: <input type="text" id="name" onChange={(e)=>setName(e.target.value)}></input>
            </div>
        </form>
    </div>
  )
}
