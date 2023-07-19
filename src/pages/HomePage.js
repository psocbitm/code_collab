import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import {useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('')
  const [username, setUsername] = useState('')
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
   setRoomId(id)
    toast.success("New room created");
  }
  
  const JoinRoom = (e) => {
    e.preventDefault();
    if (!roomId || !username) {
      return toast.error("Please enter valid room id and username");
    }
    navigate(`/editor/${roomId}`, { state: { username } });

    
  }
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      JoinRoom(e);

    }
  }

  return (
   
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          className="homePageLogo"
          src="/code-collab.png"
          alt="code-collab-logo"
        />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
           
            onKeyUp={handleEnter}
          />

          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleEnter}
          />

         
          <button className="btn joinBtn" onClick={JoinRoom}>Join</button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom}
                            href="" className="createNewBtn">new room</a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💖 &nbsp; by &nbsp;
          <a href="https://alisha-singh.framer.ai">BB</a>
        </h4>
      </footer>
    </div>
  );
}



export default HomePage;
// import React, { useState } from "react";
// import { v4 as uuidV4 } from "uuid";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// function HomePage() {
//   const navigate = useNavigate();
//   const [roomId, setRoomId] = useState('');
//   const [username, setUsername] = useState('');

//   const createNewRoom = (e) => {
//     e.preventDefault();
//     const id = uuidV4();
//     setRoomId(id);
//     toast.success("New room created");
//   };
  
//   const joinRoom = (e) => {
//     e.preventDefault();
//     if (!roomId || !username) {
//       return toast.error("Please enter valid room id and username");
//     }
//     // Navigate to the editor page with the roomId and username
//     // navigate(`/editor/${roomId}?username=${username}`);
//     navigate(`/editor/${roomId}`, { state: { username } });
//     console.log("Joining room:", roomId);
//     console.log("Username:", username);
//   };

//   const handleEnter = (e) => {
//     if (e.keyCode === 13) {
//       joinRoom(e);
//     }
//   };

//   return (
//     <div className="homePageWrapper">
//       <div className="formWrapper">
//         <img
//           className="homePageLogo"
//           src="/code-collab.png"
//           alt="code-collab-logo"
//         />
//         <h4 className="mainLabel">Paste invitation ROOM ID</h4>
//         <div className="inputGroup">
//           <input
//             type="text"
//             className="inputBox"
//             placeholder="ROOM ID"
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//             onKeyUp={handleEnter}
//           />

//           <input
//             type="text"
//             className="inputBox"
//             placeholder="USERNAME"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             onKeyUp={handleEnter}
//           />

//           <button className="btn joinBtn" onClick={joinRoom}>Join</button>
//           <span className="createInfo">
//             If you don't have an invite then create &nbsp;
//             <a onClick={createNewRoom} href="/" className="createNewBtn">
//               new room
//             </a>
//           </span>
//         </div>
//       </div>
//       <footer>
//         <h4>
//           Built with 💖 &nbsp; by &nbsp;
//           <a href="https://alisha-singh.framer.ai">BB</a>
//         </h4>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;
