

// 더미 데이터
const dummyData = [
  {
    "name": "Sunset Beach Resort",
    "price": 150,
    "isAvailable": true,
    "availableGuests": 4,
    "petFriendly": true,
    "locationCountry": "USA",
    "imageUrl": "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    "description": "A beautiful resort by the beach with stunning sunset views."
  },
  {
    "name": "Mountain View Cabin",
    "price": 120,
    "isAvailable": false,
    "availableGuests": 2,
    "petFriendly": false,
    "locationCountry": "Canada",
    "imageUrl": "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
    "description": "Cozy cabin with a breathtaking view of the mountains."
  },
  {
    "name": "City Center Hotel",
    "price": 200,
    "isAvailable": true,
    "availableGuests": 3,
    "petFriendly": true,
    "locationCountry": "USA",
    "imageUrl": "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    "description": "Modern hotel located in the heart of the city."
  },
  {
    "name": "Lakeside Inn",
    "price": 100,
    "isAvailable": true,
    "availableGuests": 2,
    "petFriendly": false,
    "locationCountry": "Germany",
    "imageUrl": "https://images.pexels.com/photos/261392/pexels-photo-261392.jpeg",
    "description": "Charming inn by the lake with peaceful surroundings."
  },
  {
    "name": "Desert Oasis",
    "price": 180,
    "isAvailable": false,
    "availableGuests": 5,
    "petFriendly": true,
    "locationCountry": "USA",
    "imageUrl": "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg",
    "description": "Luxurious oasis in the desert with a refreshing pool."
  },
  {
    "name": "Forest Retreat",
    "price": 130,
    "isAvailable": true,
    "availableGuests": 4,
    "petFriendly": false,
    "locationCountry": "Germany",
    "imageUrl": "https://images.pexels.com/photos/261001/pexels-photo-261001.jpeg",
    "description": "Tranquil retreat in the heart of the forest."
  },
  {
    "name": "Oceanfront Condo",
    "price": 220,
    "isAvailable": true,
    "availableGuests": 3,
    "petFriendly": true,
    "locationCountry": "Mexico",
    "imageUrl": "https://images.pexels.com/photos/261412/pexels-photo-261412.jpeg",
    "description": "Stylish condo with direct access to the ocean."
  },
  {
    "name": "Countryside B&B",
    "price": 90,
    "isAvailable": false,
    "availableGuests": 2,
    "petFriendly": false,
    "locationCountry": "Mexico",
    "imageUrl": "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg",
    "description": "Charming bed and breakfast in the French countryside."
  },
  {
    "name": "Island Villa",
    "price": 250,
    "isAvailable": true,
    "availableGuests": 6,
    "petFriendly": true,
    "locationCountry": "Mexico",
    "imageUrl": "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
    "description": "Spacious villa on a picturesque Greek island."
  },
  {
    "name": "Ski Resort",
    "price": 190,
    "isAvailable": true,
    "availableGuests": 5,
    "petFriendly": false,
    "locationCountry": "Japan",
    "imageUrl": "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    "description": "Popular resort with excellent ski facilities."
  },
  {
    "name": "Urban Loft",
    "price": 170,
    "isAvailable": true,
    "availableGuests": 4,
    "petFriendly": true,
    "locationCountry": "Japan",
    "imageUrl": "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    "description": "Chic loft in the heart of a bustling city."
  },
  {
    "name": "Rustic Ranch",
    "price": 110,
    "isAvailable": false,
    "availableGuests": 3,
    "petFriendly": false,
    "locationCountry": "Japan",
    "imageUrl": "https://images.pexels.com/photos/2887791/pexels-photo-2887791.jpeg",
    "description": "Experience ranch life in this rustic accommodation."
  },
  {
    "name": "Seaside Cottage",
    "price": 160,
    "isAvailable": true,
    "availableGuests": 2,
    "petFriendly": true,
    "locationCountry": "Italy",
    "imageUrl": "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
    "description": "Quaint cottage by the sea with stunning views."
  },
  {
    "name": "Cliffside Apartment",
    "price": 210,
    "isAvailable": false,
    "availableGuests": 4,
    "petFriendly": false,
    "locationCountry": "Italy",
    "imageUrl": "https://images.pexels.com/photos/208717/pexels-photo-208717.jpeg",
    "description": "Modern apartment perched on a cliff with ocean views."
  },
  {
    "name": "Historic Manor",
    "price": 300,
    "isAvailable": true,
    "availableGuests": 8,
    "petFriendly": true,
    "locationCountry": "Italy",
    "imageUrl": "https://images.pexels.com/photos/1580411/pexels-photo-1580411.jpeg",
    "description": "Stay in a grand historic manor with luxurious amenities."
  },
  {
    "name": "Jungle Bungalow",
    "price": 140,
    "isAvailable": true,
    "availableGuests": 3,
    "petFriendly": true,
    "locationCountry": "Brazil",
    "imageUrl": "https://images.pexels.com/photos/210557/pexels-photo-210557.jpeg",
    "description": "Unique bungalow nestled in the lush jungle."
  },
  {
    "name": "Eco Lodge",
    "price": 125,
    "isAvailable": false,
    "availableGuests": 2,
    "petFriendly": false,
    "locationCountry": "Brazil",
    "imageUrl": "https://images.pexels.com/photos/2412600/pexels-photo-2412600.jpeg",
    "description": "Sustainable eco lodge surrounded by nature."
  },
  {
    "name": "City Penthouse",
    "price": 400,
    "isAvailable": true,
    "availableGuests": 6,
    "petFriendly": true,
    "locationCountry": "UK",
    "imageUrl": "https://images.pexels.com/photos/1428343/pexels-photo-1428343.jpeg",
    "description": "Luxurious penthouse with panoramic city views."
  },
  {
    "name": "Beachfront Villa",
    "price": 500,
    "isAvailable": false,
    "availableGuests": 10,
    "petFriendly": true,
    "locationCountry": "South Korea",
    "imageUrl": "https://images.pexels.com/photos/218363/pexels-photo-218363.jpeg",
    "description": "Exclusive villa right on the beach in the Maldives."
  },
  {
    "name": "Downtown Studio",
    "price": 85,
    "isAvailable": true,
    "availableGuests": 1,
    "petFriendly": false,
    "locationCountry": "South Korea",
    "imageUrl": "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    "description": "Compact studio in the heart of downtown Seoul."
  }
];

export default dummyData;
