





import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import img1 from "../images/img1.jpg";
import "../styles/AboutStyles.css";
const Home = () => {
  return (
    <Layout color={"goldenrod"}>
      <div className="home"  style={{ backgroundImage: `url(${img1})` }}>
            <div className='headerContainer'>
            
            <p >Your favoruite food both vegs <br />
               and non-vegs</p>
            <Link>
            <button> KNOWN  MORE</button>
            </Link>
            
            </div>
            
        </div>
        
    </Layout>
  )
}

export default Home


















// import React from 'react'
// import Layout from '../components/Layout'
// import { Box, Typography } from "@mui/material";



// const About = () => {
//   return (
//     <Layout>
//       <Box
//         sx={{
//           my: 15,
//           textAlign: "center",
//           background:"white",
          
//           p: 2,
//           "& h4": {
//             fontWeight: "bold",
//             my: 2,
//             fontSize: "2rem",
        
//           },
//           "& p": {
//             textAlign: "justify",
//           },
//           "@media (max-width:600px)": {
//             mt: 0,
//             "& h4 ": {
//               fontSize: "1.5rem",
//             },
//           },
//         }}
//       >
//         <Typography variant="h3" color={"red"}>Welcome To My Resturant</Typography>
//         <br />
//         <p>
//             Your favoruite foods are waiting come and eat.... Varities of foods 
//             in out  resturant.....Like chicken, mutton, fishes, curdrice
//         </p>
//         <br />
        
//         <p>
//             Your favoruite foods are waiting come and eat.... Both Veg and Non-veg are 
//              available consectetur adipisicing elit. Fugiat quod, suscipit, aperiam
//             totam autem culpa cum eveniet dolorum quasi est perspiciatis laborum.
//             Nam recusandae nihil quia odio voluptatibus facere omnis facilis rerum?
//             Ab eum beatae nobis reiciendis, qui temporibus aliquid, nesciunt velit 
//             sed quam recusandae necessitatibus,
          
//         </p>
//         <br />
       
//       </Box>
//     </Layout>
//   )
// }

// export default About