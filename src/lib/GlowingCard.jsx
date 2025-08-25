// export default function GlowingCard() {
//   return (
//     <>
//       <style jsx>{`
//         @property --a {
//           syntax: '<angle>';
//           initial-value: 0deg;
//           inherits: false;
//         }

//         @keyframes a {
//           to {
//             --a: 1turn;
//           }
//         }

//         .card {
//           position: relative;
//           overflow: hidden;
//           width: min(12.5em, 80vmin);
//           aspect-ratio: 1;
//           border-radius: 0.5em;
//           display: grid;
//           place-self: center;
//           place-content: center;
//           padding: 0.5em;
//           color: #ededed;
//           font: clamp(1em, 2vw + 2vh, 2em) sans-serif;
//           text-align: center;
//           text-transform: uppercase;
//           text-wrap: balance;
//         }

//         .glow {
//           content: '';
//           position: absolute;
//           z-index: -1;
//           inset: -1em;
//           border: solid 1.25em;

//           /* Use your accent color only */
//           border-image: conic-gradient(
//               from var(--a),
//               #a855f7 0%,
//               #a855f7 25%,
//               transparent 50%,
//               #a855f7 75%,
//               #a855f7 100%
//             )
//             1;

//           filter: blur(0.75em);
//           animation: a 3s linear infinite;
//           pointer-events: none;
//         }
//       `}</style>
//     </>
//   );
// }