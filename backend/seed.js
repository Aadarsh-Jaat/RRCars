//seed.js - Run this file with Node.js to populate your database
const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected for seeding"))
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
    process.exit(1);
  });

// Car Model
const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  transmission: { type: String, default: "Automatic" },
  seats: { type: Number, default: 5 },
  fuelType: { type: String, default: "Petrol" },
  available: { type: Boolean, default: true },
  image: { type: String },
  category: { type: String, default: "Standard" },
  description: { type: String },
  features: [{ type: String }],
  licensePlate: { type: String, unique: true, sparse: true },
  phone: { type: String }, // Added phone number field
  location: {
    type: String,
    enum: ["PANIPAT", "ROHTAK", "KARNAL"],
    required: true,
  },
});

const Car = mongoose.model("Car", carSchema);

// Sample car data
const cars = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2023,
    price: 50,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://c4.wallpaperflare.com/wallpaper/126/745/144/white-background-toyota-toyota-camry-wallpaper-preview.jpg",
    category: "Sedan",
    description:
      "Comfortable mid-size sedan with excellent fuel economy and reliability.",
    features: [
      "Bluetooth",
      "Backup Camera",
      "Lane Departure Warning",
      "Adaptive Cruise Control",
    ],
    licensePlate: "CAM-2023",
    phone: "+91 9876543210",
    location: "PANIPAT",
  },
  {
    make: "Honda",
    model: "Accord",
    year: 2022,
    price: 2300,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://di-uploads-pod14.dealerinspire.com/hondaeastcincy/uploads/2023/02/2302-Honda-Accord-EX-L-Hybrid-Trim.jpg",
    category: "Sedan",
    description: "Sporty sedan with excellent handling and spacious interior.",
    features: ["Apple CarPlay", "Android Auto", "Heated Seats", "Sunroof"],
    licensePlate: "ACC-2022",
    phone: "+91 9876543211",
    location: "ROHTAK",
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 7500,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Electric",
    available: true,
    image:
      "https://png.pngtree.com/background/20240507/original/pngtree-d-render-of-an-electric-sports-sedan-car-with-premium-features-picture-image_8837272.jpg",
    category: "Electric",
    description:
      "All-electric sedan with cutting-edge technology and impressive range.",
    features: [
      "Autopilot",
      "Touchscreen Display",
      "Over-the-air Updates",
      "Supercharger Access",
    ],
    licensePlate: "TSL-2023",
    phone: "+91 9876543212",
    location: "KARNAL",
  },
  {
    make: "BMW",
    model: "3 Series",
    year: 2022,
    price: 8800,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://autonetmagz.com/wp-content/uploads/2018/10/bmw-3-series-g20-2019.jpg",
    category: "Luxury",
    description:
      "Luxury compact executive car with dynamic handling and premium interior.",
    features: [
      "Leather Seats",
      "Navigation System",
      "Premium Sound System",
      "Parking Assistant",
    ],
    licensePlate: "BMW-2022",
    phone: "+91 9876543213",
    location: "PANIPAT",
  },
  {
    make: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 7000,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fmercedes-benz%2Fc-class%2Fmercedes-benz-c-class-obsidian-black.jpg%3Fv%3D1652343520&w=640&q=75",
    category: "Luxury",
    description:
      "Elegant luxury sedan with advanced safety features and refined ride quality.",
    features: [
      "MBUX Infotainment",
      "Burmester Sound System",
      "Driver Assistance Package",
      "Heated Steering Wheel",
    ],
    licensePlate: "MBZ-2023",
    phone: "+91 9876543214",
    location: "ROHTAK",
  },
  {
    make: "Audi",
    model: "A4",
    year: 2022,
    price: 6000,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://storage.googleapis.com/cdn.callacar.co.za/vehicles/new/640/129840/2/129840-2.jpg?107",
    category: "Luxury",
    description:
      "Premium compact executive car with Quattro all-wheel drive and sophisticated technology.",
    features: [
      "Virtual Cockpit",
      "WiFi Hotspot",
      "Bang & Olufsen Audio",
      "Ambient Lighting",
    ],
    licensePlate: "AUD-2022",
    phone: "+91 9876543215",
    location: "PANIPAT",
  },
  {
    make: "Toyota",
    model: "RAV4",
    year: 2023,
    price: 9750,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://d25hqhdfvc6x6o.cloudfront.net/?url=https%3A%2F%2Fd25hqhdfvc6x6o.cloudfront.net%2F%3Furl%3Dhttps%253A%252F%252Fimages.dealer.com%252Fddc%252Fvehicles%252F2025%252FToyota%252FRAV4%252FSUV%252Ftrim_Limited_65651f%252Fcolor%252FMagnetic%252520Gray%252520Metallic-1G3-77%25252C77%25252C77-640-en_US.jpg%26size%3D400&size=800",
    category: "SUV",
    description:
      "Compact SUV offering excellent fuel efficiency and versatile cargo space.",
    features: [
      "All-Wheel Drive",
      "Apple CarPlay",
      "Android Auto",
      "Toyota Safety Sense",
    ],
    licensePlate: "RAV-2023",
    phone: "+91 9876543216",
    location: "PANIPAT",
  },
  {
    make: "Jeep",
    model: "Wrangler",
    year: 2022,
    price: 15000,
    transmission: "Manual",
    seats: 4,
    fuelType: "Petrol",
    available: true,
    image:
      "https://d25hqhdfvc6x6o.cloudfront.net/?url=https%3A%2F%2Fd25hqhdfvc6x6o.cloudfront.net%2F%3Furl%3Dhttps%253A%252F%252Fpictures.dealer.com%252Fz%252Fzeiglercdjdownersgrovecllc%252F0570%252F53d62cb42f1f9224977b0da1ae608a55x.jpg%26size%3D400&size=800",
    category: "SUV",
    description:
      "Iconic off-road SUV with removable top and doors for the ultimate adventure.",
    features: [
      "4x4 Capability",
      "Removable Doors",
      "Washable Interior",
      "Trail Rated",
    ],
    licensePlate: "JEP-2022",
    phone: "+91 9876543217",
    location: "PANIPAT",
  },
  {
    make: "Ford",
    model: "F-150",
    year: 2023,
    price: 7000,
    transmission: "Automatic",
    seats: 6,
    fuelType: "Petrol",
    available: true,
    image:
      "https://thumbs.dreamstime.com/b/experience-ultimate-heavy-duty-truck-capability-ford-f-super-duty-robust-workhorse-boasts-potent-engine-350367019.jpg",
    category: "Truck",
    description:
      "Full-size pickup truck with impressive towing capacity and spacious cabin.",
    features: [
      "Pro Power Onboard",
      "Trailer Backup Assist",
      "SYNC 4",
      "Tailgate Work Surface",
    ],
    licensePlate: "F150-2023",
    phone: "+91 9876543218",
    location: "ROHTAK",
  },
  {
    make: "Chevrolet",
    model: "Corvette",
    year: 2022,
    price: 12000,
    transmission: "Automatic",
    seats: 2,
    fuelType: "Petrol",
    available: true,
    image:
      "https://di-uploads-pod43.dealerinspire.com/dieffenbachgmsuperstore/uploads/2025/01/2025-chevy-corvette-z06-torch-red.webp",
    category: "Sports",
    description:
      "Mid-engine American sports car with exhilarating performance and distinctive styling.",
    features: [
      "Performance Data Recorder",
      "Bose Premium Audio",
      "Head-Up Display",
      "Magnetic Ride Control",
    ],
    licensePlate: "VETTE-22",
    phone: "+91 9876543219",
    location: "KARNAL",
  },
  {
    make: "Porsche",
    model: "911",
    year: 2023,
    price: 13500,
    transmission: "Automatic",
    seats: 4,
    fuelType: "Petrol",
    available: true,
    image:
      "https://di-shared-assets.dealerinspire.com/legacy/rackspace/ldm-images/2018-Porsche-911-Racing-Yellow.jpg",
    category: "Sports",
    description:
      "Legendary sports car offering precision handling and timeless design.",
    features: [
      "Sport Chrono Package",
      "Porsche Active Suspension Management",
      "Leather Interior",
      "BOSE Surround Sound",
    ],
    licensePlate: "911-2023",
    phone: "+91 9876543220",
    location: "PANIPAT",
  },
  {
    make: "Volkswagen",
    model: "Golf",
    year: 2022,
    price: 4000,
    transmission: "Manual",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image: "https://img.autotrader.co.za/35476896/Crop800x600",
    category: "Hatchback",
    description:
      "Compact hatchback with sporty handling and practical interior space.",
    features: [
      "Digital Cockpit",
      "Panoramic Sunroof",
      "Fender Premium Audio",
      "Adaptive Cruise Control",
    ],
    licensePlate: "GOLF-22",
    phone: "+91 9876543221",
    location: "ROHTAK",
  },
  {
    make: "Hyundai",
    model: "Creta",
    year: 2024,
    price: 3800,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Diesel",
    available: true,
    image:
      "https://w7.pngwing.com/pngs/755/262/png-transparent-hyundai-motor-company-car-hyundai-creta-hyundai-accent-hyundai-compact-car-car-color-thumbnail.png",
    category: "SUV",
    description:
      "Popular compact SUV with premium features and comfortable ride quality. Available in both petrol and diesel variants with excellent mileage.",
    features: [
      "Panoramic Sunroof",
      "Ventilated Seats",
      "10.25-inch Touchscreen",
      "BlueLink Connected Car Tech",
      "ADAS Features",
    ],
    licensePlate: "CRT-124",
    phone: "+91 9876543222",
    location: "KARNAL",
  },
  {
    make: "Maruti Suzuki",
    model: "Brezza",
    year: 2023,
    price: 32000,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://w7.pngwing.com/pngs/294/368/png-transparent-car-maruti-suzuki-vitara-baleno-colorful-light-fog-compact-car-car-vehicle-thumbnail.png",
    category: "Compact SUV",
    description:
      "Reliable compact SUV with good fuel efficiency and practical features. Comes with a strong service network across India.",
    features: [
      "SmartPlay Studio",
      "Cruise Control",
      "Auto Headlamps",
      "Rain Sensing Wipers",
      "360-degree Camera",
    ],
    licensePlate: "BRZ-233",
    phone: "+91 9876543223",
    location: "PANIPAT",
  },
  {
    make: "Tata",
    model: "Nexon",
    year: 2024,
    price: 800,
    transmission: "Manual",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://w7.pngwing.com/pngs/491/46/png-transparent-tata-motors-maruti-suzuki-dzire-car-tata-nexon-xza-petrol-car-compact-car-car-vehicle-thumbnail.png",
    category: "Compact SUV",
    description:
      "Stylish compact SUV with 5-star safety rating and modern design. Available in petrol, diesel, and electric variants.",
    features: [
      "5-Star NCAP Rating",
      "Electronic Stability Program",
      "iRA Connected Car Tech",
      "Air Purifier",
      "Wireless Charging",
    ],
    licensePlate: "NXN-224",
    phone: "+91 9876543224",
    location: "ROHTAK",
  },
  {
    make: "Mahindra",
    model: "XUV700",
    year: 2023,
    price: 4200,
    transmission: "Automatic",
    seats: 7,
    fuelType: "Diesel",
    available: true,
    image: "https://images.91wheels.com/assets/b_images/main/models/profile/profile1661242118.jpg",
    category: "SUV",
    description:
      "Premium mid-size SUV with powerful performance and advanced technology features. Offers both 5 and 7 seater configurations.",
    features: [
      "AdrenoX Connected Tech",
      "Dual 10.25-inch Screens",
      "Level 2 ADAS",
      "Panoramic Sunroof",
      "Alexa Built-in",
    ],
    licensePlate: "XUV-700",
    phone: "+91 9876543225",
    location: "KARNAL",
  },
  {
    make: "Kia",
    model: "Seltos",
    year: 2024,
    price: 3600,
    transmission: "iMT",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image: "https://imgd-ct.aeplcdn.com/664x415/n/3f5l3cb_1726643.jpg?q=80",
    category: "SUV",
    description:
      "Feature-rich compact SUV with premium interiors and multiple powertrain options. Strong competitor in the mid-size segment.",
    features: [
      "UVO Connect",
      "Bose Premium Sound",
      "Ventilated Seats",
      "360-degree Camera",
      "Blind-Spot Monitor",
    ],
    licensePlate: "SLT-324",
    phone: "+91 9876543226",
    location: "PANIPAT",
  },
  {
    make: "Honda",
    model: "City",
    year: 2023,
    price: 3300,
    transmission: "CVT",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image: "https://imgd-ct.aeplcdn.com/1056x660/n/yb6i64a_1529419.jpg?q=80",
    category: "Sedan",
    description:
      "Refined mid-size sedan with spacious interiors and reliable performance. Available in petrol and Petrol options.",
    features: [
      "8-inch Touchscreen",
      "Honda Sensing",
      "Lane Watch Camera",
      "Paddle Shifters",
      "Connected Car Features",
    ],
    licensePlate: "CTY-523",
    phone: "+91 9876543227",
    location: "ROHTAK",
  },
  {
    make: "Hyundai",
    model: "Verna",
    year: 2024,
    price: 3500,
    transmission: "DCT",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image: "https://stimg.cardekho.com/images/car-images/930x620/Hyundai/Verna/9744/1694603528467/225_abyss-black_08080c.jpg?tr=w-898",
    category: "Sedan",
    description:
      "Stylish mid-size sedan with futuristic design and segment-leading features. Known for its responsive turbo engine options.",
    features: [
      "ADAS Suite",
      "Dual-Zone Climate Control",
      "Ventilated Seats",
      "Digital Cluster",
      "8-Speaker Bose System",
    ],
    licensePlate: "VRN-224",
    phone: "+91 9876543228",
    location: "KARNAL",
  },
  {
    make: "Toyota",
    model: "Innova Crysta",
    year: 2023,
    price: 4500,
    transmission: "Automatic",
    seats: 7,
    fuelType: "Diesel",
    available: true,
    image: "https://gaadiwaadi.com/wp-content/uploads/2015/11/2016-Toyota-Innova-in-black-colour.jpg",
    category: "MPV",
    description:
      "Premium MPV with excellent comfort and reliability. Perfect for family travel with spacious cabin and practical features.",
    features: [
      "Captain Seats",
      "LED Headlamps",
      "7-inch Infotainment",
      "Cruise Control",
      "7 Airbags",
    ],
    licensePlate: "INN-723",
    phone: "+91 9876543229",
    location: "PANIPAT",
  },
  {
    make: "Maruti Suzuki",
    model: "Grand Vitara",
    year: 2024,
    price: 3700,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Petrol",
    available: true,
    image:
      "https://images.91wheels.com/assets/uploads/swatchs/Grand_Vitara_GrandeurGrey1664195307.jpg?w=600&q=60?w=1920&q=60",
    category: "SUV",
    description:
      "Fuel-efficient mid-size SUV with strong Petrol technology. Offers excellent mileage with premium features.",
    features: [
      "Strong Petrol System",
      "Panoramic Sunroof",
      "Heads-up Display",
      "Wireless Charger",
      "AllGrip 4x4 (Select Variants)",
    ],
    licensePlate: "GRV-124",
    phone: "+91 9876543230",
    location: "ROHTAK",
  },
  {
    make: "Tata",
    model: "Harrier",
    year: 2023,
    price: 4000,
    transmission: "Automatic",
    seats: 5,
    fuelType: "Diesel",
    available: true,
    image: "https://th.bing.com/th/id/R.c0618ffb1202a3b1221f7b909b86d969?rik=s2uBNM08O5u5IQ&riu=http%3a%2f%2fwww.sagmart.com%2fcar-images%2ftata-harrier%2ftata-harrier-ariel-silver-650x400.jpg&ehk=vLkmlMJub%2fDe288Rp0Hc%2bF60lgPCzJPO4cjxWYOhHuw%3d&risl=&pid=ImgRaw&r=0",
    category: "SUV",
    description:
      "Premium mid-size SUV with striking design and OMEGARC architecture. Offers spacious cabin with powerful diesel engine.",
    features: [
      "Panoramic Sunroof",
      "JBL Audio System",
      "ADAS Features",
      "10.25-inch Infotainment",
      "Air Purifier",
    ],
    licensePlate: "HRC-523",
    phone: "+91 9876543231",
    location: "ROHTAK",
  },
];

// Seed function
const seedDB = async () => {
  try {
    // Delete all existing cars
    await Car.deleteMany({});
    console.log("Deleted all existing cars");

    // Insert new cars
    await Car.insertMany(cars);
    console.log(`Successfully seeded database with ${cars.length} cars`);

    // Disconnect from MongoDB
    mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error seeding database:", error);
    mongoose.disconnect();
  }
};

// Run the seed function
seedDB();