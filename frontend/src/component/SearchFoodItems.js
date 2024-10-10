// // // src/SearchComponent.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const SearchFoodItems = () => {
// //     const [query, setQuery] = useState({
// //         name: '',
// //         ingredients: '',
// //         diet: '',
// //         prep_time: '',
// //         cook_time: '',
// //         flavor_profile: '',
// //         course: '',
// //         state: '',
// //         region: ''
// //     });
    
// //     const [results, setResults] = useState([]);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setQuery({
// //             ...query,
// //             [name]: value
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await axios.get('http://localhost:5000/api/`foodItems', { params: query });
// //             setResults(response.data);
// //         } catch (error) {
// //             console.error('Error fetching data', error);
// //         }
// //     };

// //     return (
// //         <div>
// //             <h1>Indian Food Recommendation</h1>
// //             <form onSubmit={handleSubmit}>
// //                 <input type="text" name="name" placeholder="Name" onChange={handleChange} />
// //                 <input type="text" name="ingredients" placeholder="Ingredients" onChange={handleChange} />
// //                 <input type="text" name="diet" placeholder="Diet" onChange={handleChange} />
// //                 <input type="number" name="prep_time" placeholder="Prep Time (min)" onChange={handleChange} />
// //                 <input type="number" name="cook_time" placeholder="Cook Time (min)" onChange={handleChange} />
// //                 <input type="text" name="flavor_profile" placeholder="Flavor Profile" onChange={handleChange} />
// //                 <input type="text" name="course" placeholder="Course" onChange={handleChange} />
// //                 <input type="text" name="state" placeholder="State" onChange={handleChange} />
// //                 <input type="text" name="region" placeholder="Region" onChange={handleChange} />
// //                 <button type="submit">Search</button>
// //             </form>

// //             <div>
// //                 <h2>Results:</h2>
// //                 <ul>
// //                     {results.map((item) => (
// //                         <li key={item._id}>
// //                             <h3>{item.name}</h3>
// //                             <p>Ingredients: {item.ingredients}</p>
// //                             <p>Diet: {item.diet}</p>
// //                             <p>Prep Time: {item.prep_time} min</p>
// //                             <p>Cook Time: {item.cook_time} min</p>
// //                             <p>Flavor Profile: {item.flavor_profile}</p>
// //                             <p>Course: {item.course}</p>
// //                             <p>State: {item.state}</p>
// //                             <p>Region: {item.region}</p>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SearchFoodItems;



// // src/component/SearchFoodItems.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchFoodItems = () => {
//     const [query, setQuery] = useState({
//         name: '',
//         ingredients: '',
//         diet: '',
//         prep_time: '',
//         cook_time: '',
//         flavor_profile: '',
//         course: '',
//         state: '',
//         region: ''
//     });

//     const [results, setResults] = useState([]);

//     // Update query state when form fields change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setQuery({
//             ...query,
//             [name]: value
//         });
//     };

//     // Handle form submission and API call
//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Filter out empty fields from the query
//         const filteredQuery = Object.fromEntries(
//             Object.entries(query).filter(([key, value]) => value !== '')
//         );

//         try {
//             // Corrected API request URL
//             const response = await axios.get('http://localhost:5000/api/foodItems/search', { params: filteredQuery });
//             setResults(response.data);
//         } catch (error) {
//             console.error('Error fetching data', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Indian Food Recommendation</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//                 <input type="text" name="ingredients" placeholder="Ingredients" onChange={handleChange} />
//                 <input type="text" name="diet" placeholder="Diet" onChange={handleChange} />
//                 <input type="number" name="prep_time" placeholder="Prep Time (min)" onChange={handleChange} />
//                 <input type="number" name="cook_time" placeholder="Cook Time (min)" onChange={handleChange} />
//                 <input type="text" name="flavor_profile" placeholder="Flavor Profile" onChange={handleChange} />
//                 <input type="text" name="course" placeholder="Course" onChange={handleChange} />
//                 <input type="text" name="state" placeholder="State" onChange={handleChange} />
//                 <input type="text" name="region" placeholder="Region" onChange={handleChange} />
//                 <button type="submit">Search</button>
//             </form>

//             <div>
//                 <h2>Results:</h2>
//                 <ul>
//                     {results.map((item) => (
//                         <li key={item._id}>
//                             <h3>{item.name}</h3>
//                             <p>Ingredients: {item.ingredients}</p>
//                             <p>Diet: {item.diet}</p>
//                             <p>Prep Time: {item.prep_time} min</p>
//                             <p>Cook Time: {item.cook_time} min</p>
//                             <p>Flavor Profile: {item.flavor_profile}</p>
//                             <p>Course: {item.course}</p>
//                             <p>State: {item.state}</p>
//                             <p>Region: {item.region}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SearchFoodItems;


import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [name, setName] = useState('');
  const [diet, setDiet] = useState('');
  const [region, setRegion] = useState('');
  const [course, setCourse] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/api/foodItems/search', {
        params: { name, diet, region, course }
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Diet" value={diet} onChange={(e) => setDiet(e.target.value)} />
        <input type="text" placeholder="Region" value={region} onChange={(e) => setRegion(e.target.value)} />
        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <p>Ingredients: {item.ingredients}</p>
            <p>Diet: {item.diet}</p>
            <p>Prep Time: {item.prep_time} mins</p>
            <p>Cook Time: {item.cook_time} mins</p>
            <p>Flavor Profile: {item.flavor_profile}</p>
            <p>Course: {item.course}</p>
            <p>State: {item.state}</p>
            <p>Region: {item.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
