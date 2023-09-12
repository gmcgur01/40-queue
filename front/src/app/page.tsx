'use client'
import Image from 'next/image'
import { workerData } from "worker_threads"
const URL = 'http://localhost:3001';
export const socket = io(URL);

/* for logins */
// export const socket = io(URL, {
//   autoConnect: false
// });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Comp 40 Office Hours Queue</h1>
      <div>
        <button onClick={console.log("joined queue.")}>Join Queue</button>
        <button onClick={console.log("left queue.")}>Leave Queue</button>
        <button onClick={console.log("refreshed.")}>Refresh page</button>
      </div>
    </main>
  )
}


