// import React from 'react';

// const SearchResultPage = ({ results }) => {
//   return (
//     <div className="search-result-page">
//       <h3 className="search-results-heading">Search Results</h3>
//       <div className="results-container">
//         {results.map(item => {
//         console.log("Image path:", item.image);
//           return (
//             <div key={item.id} className="result-card">
//               <div className="card-content">
//                 <h6 className="item-name">{item.name}</h6>
//                 <img src={item.image} alt={item.name} className="item-image" />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default SearchResultPage;


import React from 'react';

const SearchResultPage = ({ results }) => {
  return (
    <div className="search-result-page">
      <h3 className="search-results-heading">Search Results</h3>
      <div className="results-container">
        {results.map(item => {
          console.log("Image path:", item.image);
          return (
            <div key={item.id} className="result-card">
              <div className="card-content">
                <h6 className="item-name">{item.name}</h6>
                <img src={item.image} alt={item.name} className="item-image" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultPage;

