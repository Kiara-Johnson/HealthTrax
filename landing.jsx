 import React from 'react';
  function Landing() {
  return (
  <>
  <header>
   <h1>Health Trax Symptom Logger</h1>
 </header>
 <main>
   <div class="log">
   {/* landing.html log button goes to log view and auto adds time and date and takes you to the symptom log area. */}
       <button id="logSymptom">Log Symptom</button>
   </div>
 </main>
</>
);
}
export default Landing;


// original html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Homepage</title>
// </head>
// <body>
//     <header>
//         <!-- header for all pages possibly -->
//         <h1>Health Trax Symptom Logger</h1>
//         <!-- possibly add a logo -->
//       </header>
//       <main>
//         <div class="log">
//             <button id="logSymptom">Log Symptom</button>
//         </div>
//       </main>
// </body>
// </html>