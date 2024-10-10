// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FoodItemsTable = () => {
//     const [foodItems, setFoodItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchFoodItems = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/foodItems');
//             console.log('API response:', response.data); // Log the response data
//             setFoodItems(response.data);
//         } catch (error) {
//             console.error('Error fetching food items:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchFoodItems();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (foodItems.length === 0) {
//         return <div>No food items available.</div>;
//     }

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Ingredients</th>
//                     <th>Diet</th>
//                     <th>Prep Time</th>
//                     <th>Cook Time</th>
//                     <th>Flavor Profile</th>
//                     <th>Course</th>
//                     <th>State</th>
//                     <th>Region</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {foodItems.map(item => (
//                     <tr key={item._id.$oid}> {/* Access the $oid property for the key */}
//                         <td>{item.name}</td>
//                         <td>{item.ingredients}</td>
//                         <td>{item.diet}</td>
//                         <td>{item.prep_time}</td>
//                         <td>{item.cook_time}</td>
//                         <td>{item.flavor_profile}</td>
//                         <td>{item.course}</td>
//                         <td>{item.state}</td>
//                         <td>{item.region}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default FoodItemsTable;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodItemsTable = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [searchParams, setSearchParams] = useState({
        name: '',
        diet: '',
        region: '',
        course: ''
    });

    // Fetch food items from the backend
    const fetchFoodItems = async () => {
        try {
            // Send a GET request to fetch food items
            const response = await axios.get('http://localhost:5000/api/foodItems');
            setFoodItems(response.data);
            console.log(response.data);
            
        } catch (err) {
            console.error('Error fetching food items:', err);
        }
    };

    // Fetch food items based on search parameters
    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/foodItems/search', {
                params: searchParams
            });
            setFoodItems(response.data);
        } catch (err) {
            console.error('Error searching food items:', err);
        }
    };

    useEffect(() => {
        fetchFoodItems();
    }, []);

    return (
        <div>
            <h1>Food Items</h1>

            {/* Search Filters */}
            <div>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchParams.name}
                    onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Search by diet"
                    value={searchParams.diet}
                    onChange={(e) => setSearchParams({ ...searchParams, diet: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Search by region"
                    value={searchParams.region}
                    onChange={(e) => setSearchParams({ ...searchParams, region: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Search by course"
                    value={searchParams.course}
                    onChange={(e) => setSearchParams({ ...searchParams, course: e.target.value })}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {/* Display Food Items */}
            {foodItems.length === 0 ? (
                <p>No food items available.</p>
            ) : (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Ingredients</th>
                            <th>Diet</th>
                            <th>Prep Time</th>
                            <th>Cook Time</th>
                            <th>Flavor Profile</th>
                            <th>Course</th>
                            <th>State</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodItems.map((item) => (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.ingredients}</td>
                                <td>{item.diet}</td>
                                <td>{item.prep_time}</td>
                                <td>{item.cook_time}</td>
                                <td>{item.flavor_profile}</td>
                                <td>{item.course}</td>
                                <td>{item.state}</td>
                                <td>{item.region}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FoodItemsTable;
