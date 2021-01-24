import React from 'react';

// const Card = (props) => {

//     return (

//         <div className= 'bg-light-green tc dib br5 pd3 ma2 grow bw2 shadow-5'>
//             <img alt='Robofriends'
//             src={`https://robohash.org/${props.id}?200*200`}/>
 
//             <div>

//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>

//             </div>
//         </div>

//     );
// }

// export default Card;

// Aliter

//  const Card = (props) => {
//     const {name,id,email}= props;
//       return (
         
//           <div className= 'bg-light-green tc dib br5 pd3 ma2 grow bw2 shadow-5'>
//              <img alt='Robofriends'
//             src={`https://robohash.org/${id}?200*200`}/>
 
//               <div>

//                   <h2>{name}</h2>
//                   <p>{email}</p>

//               </div>
//           </div>

//       );
//   }

//    export default Card;

//    aliter
   const Card = ({name,id,email}) => {
 
      return (
         
          <div className= 'bg-light-green tc dib br5 pd3 ma2 grow bw2 shadow-5'>
             <img alt='Robofriends'
            src={`https://robohash.org/${id}?200*200`}/>
 
              <div>

                  <h2>{name}</h2>
                  <p>{email}</p>

              </div>
          </div>

      );
  }

   export default Card;