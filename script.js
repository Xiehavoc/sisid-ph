const schoolsData = [
  // LUZON (14 Schools)
  {
    id: 1,
    name: "Agos Freediving",
    region: "Luzon",
    location: "Mabini, Batangas",
    desc: "Specializes in certified instructors and safety-first guided exploration in Anilao.",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://www.klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Introductory Freedive Course",
        level: "Beginner",
        price: 2500,
        desc: "Basic equalization, breath-hold theory, and shallow water sessions.",
      },
      {
        name: "Molchanovs Wave 1 Certification",
        level: "Advanced",
        price: 6500,
        desc: "Comprehensive open water certification up to 20 meters.",
      },
    ],
    accommodations: [
      {
        name: "Standard Beachfront Room",
        price: 1500,
        desc: "Air-conditioned room with direct view of Anilao coast.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "Diver Dormitory Bed",
        price: 600,
        desc: "Budget-friendly shared bunk space with locker.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+63 917 555 0192", email: "hello@agosfreedive.ph" },
  },
  {
    id: 2,
    name: "AguaSegura Freediving",
    region: "Luzon",
    location: "Bagalangit, Mabini, Batangas",
    desc: "Expert coaching and safety supervision with beachfront access.",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    klookUrl: "",
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Fun Dive & Discovery Package",
        level: "Beginner",
        price: 1399,
        desc: "Guided house reef dive with professional safety divers.",
      },
      {
        name: "Wave 1 Full Course",
        level: "Advanced",
        price: 6200,
        desc: "Full certification package including gear rental.",
      },
    ],
    accommodations: [
      {
        name: "Seaview Private Villa",
        price: 2500,
        desc: "Spacious private room overlooking the marine sanctuary.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+63 918 444 8821", email: "stay@aguasegura.ph" },
  },
  {
    id: 3,
    name: "Alab Freedivers",
    region: "Luzon",
    location: "Bagalangit, Mabini, Batangas",
    desc: "Safe, fun, and life-changing freediving with certified instructors.",
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://www.klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Discover Freediving",
        level: "Beginner",
        price: 1500,
        desc: "First breath-hold experience in Anilao marine park.",
      },
      {
        name: "Advanced Line Training",
        level: "Advanced",
        price: 3000,
        desc: "Depth progression and deep equalization techniques.",
      },
    ],
    accommodations: [
      {
        name: "Standard Beachfront Room",
        price: 1500,
        desc: "Comfortable stay right beside the dive shop.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+63 919 333 7744", email: "info@alabfreedivers.ph" },
  },
  {
    id: 4,
    name: "Apnea Academy PH",
    region: "Luzon",
    location: "Anilao, Batangas",
    desc: "International standard breath-hold training and certification.",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Standard Course",
        level: "Beginner",
        price: 3500,
        desc: "Full training.",
      },
    ],
    accommodations: [
      {
        name: "Standard Room",
        price: 1500,
        desc: "Cozy stay.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639171112233", email: "info@apnea.ph" },
  },
  {
    id: 5,
    name: "Depth Hunter Freediving",
    region: "Luzon",
    location: "Mabini, Batangas",
    desc: "Advanced line training and deep water coaching sessions.",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Deep Line Session",
        level: "Advanced",
        price: 2800,
        desc: "Line coaching.",
      },
    ],
    accommodations: [
      {
        name: "Diver Lodge",
        price: 1200,
        desc: "Simple lodge.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639172223344", email: "depth@hunter.ph" },
  },
  {
    id: 6,
    name: "Freedive HQ",
    region: "Luzon",
    location: "Anilao, Batangas",
    desc: "Premier resort-based training facility with top-tier gear rentals.",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Resort Intro Dive",
        level: "Beginner",
        price: 3200,
        desc: "Intro dive.",
      },
    ],
    accommodations: [
      {
        name: "Resort Suite",
        price: 2800,
        desc: "Luxury resort room.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639173334455", email: "hq@freedive.ph" },
  },
  {
    id: 7,
    name: "Secret Spot Freediving",
    region: "Luzon",
    location: "Mabini, Batangas",
    desc: "Discover hidden marine sanctuaries and pristine coral reefs.",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Sanctuary Tour",
        level: "Beginner",
        price: 2200,
        desc: "Reef tour.",
      },
    ],
    accommodations: [
      {
        name: "Cottage",
        price: 1500,
        desc: "Beach cottage.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639174445566", email: "secret@spot.ph" },
  },
  {
    id: 8,
    name: "Blue Water Freediving",
    region: "Luzon",
    location: "Anilao, Batangas",
    desc: "Focused on buoyancy control, relaxation, and technique.",
    price: 2600,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Buoyancy Clinic",
        level: "Advanced",
        price: 2600,
        desc: "Buoyancy mastery.",
      },
    ],
    accommodations: [
      {
        name: "Standard Room",
        price: 1500,
        desc: "Standard stay.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639175556677", email: "blue@water.ph" },
  },
  {
    id: 9,
    name: "Neptune Freediving",
    region: "Luzon",
    location: "Subic Bay, Zambales",
    desc: "Wreck diving and open water training in calm bays.",
    price: 2900,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Wreck Apnea",
        level: "Advanced",
        price: 2900,
        desc: "Wreck exploration.",
      },
    ],
    accommodations: [
      {
        name: "Subic Hotel Room",
        price: 2000,
        desc: "Hotel stay.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639176667788", email: "neptune@subic.ph" },
  },
  {
    id: 10,
    name: "Sabang Freedivers",
    region: "Luzon",
    location: "Puerto Galera, Oriental Mindoro",
    desc: "Island vibes and vibrant coral drop-offs.",
    price: 2700,
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Coral Drop Dive",
        level: "Beginner",
        price: 2700,
        desc: "Drop-off tour.",
      },
    ],
    accommodations: [
      {
        name: "Island Inn",
        price: 1400,
        desc: "Cozy inn.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639177778899", email: "sabang@freedive.ph" },
  },
  {
    id: 11,
    name: "Subic Freedive Club",
    region: "Luzon",
    location: "Subic, Zambales",
    desc: "Beginner-friendly intro courses and structured line diving.",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Club Intro",
        level: "Beginner",
        price: 2400,
        desc: "Intro course.",
      },
    ],
    accommodations: [
      {
        name: "Club Lodge",
        price: 1200,
        desc: "Lodge room.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639178889900", email: "subic@club.ph" },
  },
  {
    id: 12,
    name: "La Union Freedivers",
    region: "Luzon",
    location: "San Fernando, La Union",
    desc: "Surf town freediving and coastal breath-hold workshops.",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Surf Town Apnea",
        level: "Beginner",
        price: 2500,
        desc: "Coastal workshop.",
      },
    ],
    accommodations: [
      {
        name: "Surf Hostel",
        price: 1000,
        desc: "Hostel bed.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639179990011", email: "elyu@freedive.ph" },
  },
  {
    id: 13,
    name: "Coron Island Freedive",
    region: "Luzon",
    location: "Coron, Palawan",
    desc: "Explore breathtaking freshwater lakes and WWII shipwrecks.",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Kayangan Lake Dive",
        level: "Advanced",
        price: 3800,
        desc: "Famous lake dive.",
      },
    ],
    accommodations: [
      {
        name: "Coron Resort Room",
        price: 2200,
        desc: "Resort room.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639170001122", email: "coron@apnea.ph" },
  },
  {
    id: 14,
    name: "El Nido Apnea",
    region: "Luzon",
    location: "El Nido, Palawan",
    desc: "Limestone cliffs and crystal clear turquoise lagoons.",
    price: 3600,
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Lagoon Exploration",
        level: "Beginner",
        price: 3600,
        desc: "Lagoon tour.",
      },
    ],
    accommodations: [
      {
        name: "Island Bungalow",
        price: 2500,
        desc: "Bungalow.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639171234567", email: "elnido@apnea.ph" },
  },

  // VISAYAS (12 Schools)
  {
    id: 15,
    name: "Freediving Panglao",
    region: "Visayas",
    location: "Panglao, Bohol",
    desc: "World-class training in crystal clear Visayan waters.",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://www.klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Panglao Discovery Freedive",
        level: "Beginner",
        price: 3500,
        desc: "Explore Balicasag island reefs with expert safety.",
      },
      {
        name: "AIDA 2 Freediver Course",
        level: "Advanced",
        price: 11500,
        desc: "Internationally recognized 3-day certification.",
      },
    ],
    accommodations: [
      {
        name: "Alona Beach Resort Room",
        price: 2200,
        desc: "Steps away from world-famous Alona beach.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+63 938 111 2233", email: "dive@freedivingpanglao.ph" },
  },
  {
    id: 16,
    name: "Panglao Elite Apnea",
    region: "Visayas",
    location: "Panglao, Bohol",
    desc: "Deep coaching and professional instructor certifications.",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Elite Training",
        level: "Advanced",
        price: 4000,
        desc: "Deep coaching.",
      },
    ],
    accommodations: [
      {
        name: "Elite Villa",
        price: 3000,
        desc: "Villa room.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639382223344", email: "elite@panglao.ph" },
  },
  {
    id: 17,
    name: "Cebu Freediving Center",
    region: "Visayas",
    location: "Moalboal, Cebu",
    desc: "Swim with millions of sardines and vibrant sea turtles.",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Sardine Run Freedive",
        level: "Beginner",
        price: 2800,
        desc: "Sardine run experience.",
      },
    ],
    accommodations: [
      {
        name: "Panagsama Room",
        price: 1500,
        desc: "Coastal room.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639383334455", email: "cebu@freedive.ph" },
  },
  {
    id: 18,
    name: "Moalboal Apnea",
    region: "Visayas",
    location: "Moalboal, Cebu",
    desc: "Steep wall dives and relaxed community sessions.",
    price: 2600,
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Wall Dive Intro",
        level: "Beginner",
        price: 2600,
        desc: "Wall dive.",
      },
    ],
    accommodations: [
      {
        name: "Standard Room",
        price: 1300,
        desc: "Standard stay.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639384445566", email: "moalboal@apnea.ph" },
  },
  {
    id: 19,
    name: "Dumaguete Freedivers",
    region: "Visayas",
    location: "Dumaguete, Negros Oriental",
    desc: "Marine sanctuary exploration and turtle-watching dives.",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Turtle Sanctuary Dive",
        level: "Beginner",
        price: 2500,
        desc: "Sanctuary tour.",
      },
    ],
    accommodations: [
      {
        name: "City Lodge",
        price: 1200,
        desc: "Lodge room.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639385556677", email: "dumaguete@freedive.ph" },
  },
  {
    id: 20,
    name: "Siquijor Mystic Freedive",
    region: "Visayas",
    location: "Siquijor",
    desc: "Mystical marine landscapes and uncrowded reef diving.",
    price: 2700,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Mystic Reef Dive",
        level: "Beginner",
        price: 2700,
        desc: "Reef dive.",
      },
    ],
    accommodations: [
      {
        name: "Island Resort",
        price: 1800,
        desc: "Resort room.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639386667788", email: "siquijor@mystic.ph" },
  },
  {
    id: 21,
    name: "Boracay Blue Apnea",
    region: "Visayas",
    location: "Boracay Island, Aklan",
    desc: "White sand beaches paired with expert breath-hold coaching.",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "White Beach Intro",
        level: "Beginner",
        price: 3200,
        desc: "Beach intro.",
      },
    ],
    accommodations: [
      {
        name: "Station 2 Hotel",
        price: 2500,
        desc: "Hotel room.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639387778899", email: "boracay@apnea.ph" },
  },
  {
    id: 22,
    name: "Bohol Deep Divers",
    region: "Visayas",
    location: "Anda, Bohol",
    desc: "Off-the-beaten-path wall diving and cavern exploration.",
    price: 3000,
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Anda Wall Dive",
        level: "Advanced",
        price: 3000,
        desc: "Wall dive.",
      },
    ],
    accommodations: [
      {
        name: "Cliffside Cottage",
        price: 2000,
        desc: "Cottage.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639388889900", email: "anda@bohol.ph" },
  },
  {
    id: 23,
    name: "South Cebu Apnea",
    region: "Visayas",
    location: "Oslob, Cebu",
    desc: "Whale shark interaction protocols and deep water training.",
    price: 3400,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Whale Shark Apnea",
        level: "Beginner",
        price: 3400,
        desc: "Whale shark session.",
      },
    ],
    accommodations: [
      {
        name: "Oslob Inn",
        price: 1400,
        desc: "Inn room.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639389990011", email: "oslob@apnea.ph" },
  },
  {
    id: 24,
    name: "Northern Cebu Freedive",
    region: "Visayas",
    location: "Daanbantayan, Cebu",
    desc: "Thresher shark encounters and deep blue drops.",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Thresher Shark Encounter",
        level: "Advanced",
        price: 3500,
        desc: "Shark dive.",
      },
    ],
    accommodations: [
      {
        name: "Malapascua Resort",
        price: 2000,
        desc: "Resort stay.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639380001122", email: "malapascua@freedive.ph" },
  },
  {
    id: 25,
    name: "Negros Island Apnea",
    region: "Visayas",
    location: "Zamboanguita, Negros Oriental",
    desc: "Apo Island protected marine sanctuary diving.",
    price: 2900,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Apo Island Tour",
        level: "Beginner",
        price: 2900,
        desc: "Sanctuary tour.",
      },
    ],
    accommodations: [
      {
        name: "Sanctuary Lodge",
        price: 1500,
        desc: "Lodge room.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639381234567", email: "negros@apnea.ph" },
  },
  {
    id: 26,
    name: "Leyte Gulf Freedivers",
    region: "Visayas",
    location: "Tacloban, Leyte",
    desc: "Emerging pristine reef exploration across Eastern Visayas.",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Leyte Gulf Intro",
        level: "Beginner",
        price: 2400,
        desc: "Gulf intro.",
      },
    ],
    accommodations: [
      {
        name: "Tacloban Hotel",
        price: 1300,
        desc: "Standard room.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639382345678", email: "leyte@freedive.ph" },
  },

  // MINDANAO (6 Schools)
  {
    id: 27,
    name: "Ocean BX Freediving",
    region: "Mindanao",
    location: "Mati, Davao Oriental",
    desc: "Molchanovs certified training center in Pujada Bay.",
    price: 3550,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://www.klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Pujada Bay Discovery",
        level: "Beginner",
        price: 3550,
        desc: "Scenic bay dive with expert safety briefings.",
      },
      {
        name: "Molchanovs Lap 1 / Wave 1",
        level: "Advanced",
        price: 6800,
        desc: "Certified professional training module.",
      },
    ],
    accommodations: [
      {
        name: "Dahican Beach Eco-Cabana",
        price: 1800,
        desc: "Eco-friendly cabana right by Dahican surf and dive waves.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+63 912 333 4455", email: "dive@oceanbx.ph" },
  },
  {
    id: 28,
    name: "Siargao Blue Apnea",
    region: "Mindanao",
    location: "General Luna, Siargao",
    desc: "Surf and freedive synergy in world-famous tropical waters.",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    klookAvailable: true,
    klookUrl: "https://klook.com",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Siargao Lagoon Apnea",
        level: "Beginner",
        price: 3500,
        desc: "Lagoon dive.",
      },
    ],
    accommodations: [
      {
        name: "Cloud 9 Resort Room",
        price: 2400,
        desc: "Resort room.",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639124445566", email: "siargao@blueapnea.ph" },
  },
  {
    id: 29,
    name: "Camiguin Island Freedive",
    region: "Mindanao",
    location: "Mambajao, Camiguin",
    desc: "Volcanic island drop-offs and sunken cemetery dives.",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Sunken Cemetery Dive",
        level: "Beginner",
        price: 2800,
        desc: "Cemetery dive.",
      },
    ],
    accommodations: [
      {
        name: "Volcano View Inn",
        price: 1500,
        desc: "Inn room.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639125556677", email: "camiguin@freedive.ph" },
  },
  {
    id: 30,
    name: "Davao Gulf Apnea",
    region: "Mindanao",
    location: "Davao City",
    desc: "Accessible weekend workshops and professional line sessions.",
    price: 2600,
    image:
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Weekend Workshop",
        level: "Beginner",
        price: 2600,
        desc: "Weekend class.",
      },
    ],
    accommodations: [
      {
        name: "City Hotel Room",
        price: 1600,
        desc: "Hotel stay.",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639126667788", email: "davao@apnea.ph" },
  },
  {
    id: 31,
    name: "Samal Island Freedivers",
    region: "Mindanao",
    location: "Garden City of Samal",
    desc: "Coral garden exploration and relaxed introductory breath-hold.",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Coral Garden Tour",
        level: "Beginner",
        price: 2500,
        desc: "Coral tour.",
      },
    ],
    accommodations: [
      {
        name: "Samal Beach Resort",
        price: 2000,
        desc: "Resort stay.",
        image:
          "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=400&q=80",
      },
    ],
    contact: { phone: "+639127778899", email: "samal@freedive.ph" },
  },
  {
    id: 32,
    name: "Surigao Marine Apnea",
    region: "Mindanao",
    location: "Surigao City",
    desc: "Untouched island archipelagos and deep blue exploration.",
    price: 2700,
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
    klookAvailable: false,
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80",
    ],
    courses: [
      {
        name: "Archipelago Explorer",
        level: "Beginner",
        price: 2700,
        desc: "Island tour.",
      },
    ],
    accommodations: [],
    contact: { phone: "+639128889900", email: "surigao@apnea.ph" },
  },
];

let selectedRegion = "All";

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("pageLoader");
    if (loader) loader.classList.add("hidden");
  }, 450);
});

function toggleMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) navLinks.classList.toggle("mobile-open");
}

function closeMobileMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) navLinks.classList.remove("mobile-open");
}

function switchPage(pageId, preselectedSchoolId = null) {
  const loader = document.getElementById("pageLoader");
  if (loader) loader.classList.remove("hidden");

  setTimeout(() => {
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document
      .querySelectorAll(".nav-links button")
      .forEach((b) => b.classList.remove("active"));

    const targetPage = document.getElementById("page-" + pageId);
    if (targetPage) targetPage.classList.add("active");

    const navBtn = document.querySelector(`[data-page="${pageId}"]`);
    if (navBtn) navBtn.classList.add("active");

    if (pageId === "booking") {
      populateBookingSchools(preselectedSchoolId);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    if (loader) loader.classList.add("hidden");
  }, 350);
}

function setRegion(region, element) {
  selectedRegion = region;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  if (element) element.classList.add("active");
  renderSchools();
}

function filterByRegion(region) {
  selectedRegion = region;
  document.querySelectorAll(".filter-btn").forEach((b) => {
    if (
      b.textContent.includes(region) ||
      (region === "Klook" && b.classList.contains("klook-filter-btn"))
    ) {
      b.classList.add("active");
    } else {
      b.classList.remove("active");
    }
  });
  renderSchools();
}

function renderSchools() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const grid = document.getElementById("schoolsGrid");
  grid.innerHTML = "";

  const filtered = schoolsData.filter((school) => {
    let matchesRegion = true;
    if (selectedRegion === "Klook") {
      matchesRegion = school.klookAvailable === true;
    } else if (selectedRegion !== "All") {
      matchesRegion = school.region === selectedRegion;
    }

    const matchesSearch =
      school.name.toLowerCase().includes(query) ||
      school.location.toLowerCase().includes(query);
    return matchesRegion && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<p style="color: #94A3B8; grid-column: 1/-1; text-align: center; padding: 40px;">No schools found matching your search or filter.</p>';
    return;
  }

  filtered.forEach((school, index) => {
    const klookBadgeHtml = school.klookAvailable
      ? '<span class="klook-badge">✨ Klook Available</span>'
      : "";

    const card = document.createElement("div");
    card.className = "school-card";
    card.style.animationDelay = `${index * 0.04}s`;
    card.innerHTML = `
            <div class="card-img" style="background-image: url('${school.image}')">
                <span class="region-badge">${school.region}</span>
                ${klookBadgeHtml}
            </div>
            <div class="card-body">
                <div>
                    <h3>${school.name}</h3>
                    <p class="location">📍 ${school.location}</p>
                    <p class="desc">${school.desc}</p>
                </div>
                <div class="card-footer">
                    <span class="price">From ₱${school.price.toLocaleString()}</span>
                    <button class="view-btn" onclick="openSchoolDetail(${school.id})">View School</button>
                </div>
            </div>
        `;
    grid.appendChild(card);
  });
}

function openSchoolDetail(schoolId) {
  const school = schoolsData.find((s) => s.id === schoolId);
  if (!school) return;

  const detailContainer = document.getElementById("schoolDetailContent");

  let coursesHtml = school.courses
    .map(
      (c) => `
        <div style="background: rgba(10, 25, 47, 0.6); padding: 15px; border-radius: 10px; border: 1px solid var(--border-blue); margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; flex-wrap: wrap; gap: 5px;">
                <h4 style="color: white; font-size: 1rem;">${c.name} (${c.level})</h4>
                <span style="color: var(--cyan); font-weight: bold;">₱${c.price.toLocaleString()}</span>
            </div>
            <p style="font-size: 0.85rem; color: #94A3B8; margin: 0;">${c.desc}</p>
        </div>
    `,
    )
    .join("");

  let accomHtml =
    school.accommodations && school.accommodations.length > 0
      ? school.accommodations
          .map(
            (a) => `
        <div style="background: rgba(10, 25, 47, 0.6); padding: 15px; border-radius: 10px; border: 1px solid var(--border-blue); margin-bottom: 15px; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
            <img src="${a.image}" alt="${a.name}" style="width: 90px; height: 70px; object-fit: cover; border-radius: 8px; border: 1px solid var(--border-blue);">
            <div style="flex: 1; min-width: 200px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px; flex-wrap: wrap;">
                    <h4 style="color: white; font-size: 1rem;">🏨 ${a.name}</h4>
                    <span style="color: var(--cyan); font-weight: bold;">₱${a.price.toLocaleString()} / night</span>
                </div>
                <p style="font-size: 0.85rem; color: #94A3B8; margin: 0;">${a.desc}</p>
            </div>
        </div>
    `,
          )
          .join("")
      : '<p style="color: #94A3B8; font-size: 0.9rem;">No on-site accommodation offered by this school.</p>';

  let galleryHtml = school.gallery
    .map(
      (imgUrl) => `
        <div style="height: 140px; border-radius: 10px; background-image: url('${imgUrl}'); background-size: cover; background-position: center; border: 1px solid var(--border-blue);"></div>
    `,
    )
    .join("");

  let bookingOptionsHtml = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 30px;">
            <div style="background: rgba(15, 42, 74, 0.8); padding: 25px; border-radius: 16px; border: 1px solid var(--border-blue); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <h3 style="color: var(--cyan); margin-bottom: 10px; font-size: 1.2rem;">Option A: Book via Website</h3>
                    <p style="font-size: 0.88rem; color: #CBD5E1; margin-bottom: 20px;">Use our multi-step booking engine to select your course, stay, schedule, and pay via GCash, Maya, or Bank Transfer.</p>
                </div>
                <button class="cta-btn" onclick="startBookingForSchool(${school.id})">Book Through Website →</button>
            </div>
    `;

  if (school.klookAvailable) {
    bookingOptionsHtml += `
            <div style="background: rgba(255, 51, 102, 0.08); padding: 25px; border-radius: 16px; border: 1px solid rgba(255, 51, 102, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
                        <h3 style="color: var(--klook-pink); font-size: 1.2rem;">Option B: Book via Klook</h3>
                        <span class="klook-badge" style="position: static;">Available on Klook</span>
                    </div>
                    <p style="font-size: 0.88rem; color: #CBD5E1; margin-bottom: 20px;">Scan the sample QR code below or click the button to finalize your reservation directly on Klook.</p>
                    
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; background: white; padding: 12px; border-radius: 12px; width: fit-content;">
                        <div style="width: 75px; height: 75px; background: #0A192F; display: grid; grid-template-columns: repeat(5, 1fr); gap: 3px; padding: 4px;">
                            <div style="background: var(--klook-pink);"></div><div style="background: var(--klook-pink);"></div><div style="background: var(--klook-pink);"></div><div style="background: #0a192f;"></div><div style="background: var(--klook-pink);"></div>
                            <div style="background: var(--klook-pink);"></div><div style="background: #0a192f;"></div><div style="background: var(--klook-pink);"></div><div style="background: var(--klook-pink);"></div><div style="background: #0a192f;"></div>
                            <div style="background: var(--klook-pink);"></div><div style="background: var(--klook-pink);"></div><div style="background: #0a192f;"></div><div style="background: var(--klook-pink);"></div><div style="background: var(--klook-pink);"></div>
                            <div style="background: #0a192f;"></div><div style="background: var(--klook-pink);"></div><div style="background: var(--klook-pink);"></div><div style="background: #0a192f;"></div><div style="background: var(--klook-pink);"></div>
                            <div style="background: var(--klook-pink);"></div><div style="background: #0a192f;"></div><div style="background: var(--klook-pink);"></div><div style="background: var(--klook-pink);"></div><div style="background: var(--klook-pink);"></div>
                        </div>
                        <div style="text-align: left;">
                            <p style="font-size: 0.75rem; color: #0A192F; font-weight: bold; margin: 0;">Scan to Book on Klook</p>
                            <p style="font-size: 0.65rem; color: #64748B; margin: 0;">Instant mobile voucher</p>
                        </div>
                    </div>
                </div>
                <a href="${school.klookUrl}" target="_blank" class="cta-btn" style="background: var(--klook-pink); color: white; text-align: center; text-decoration: none;">Book Through Klook →</a>
            </div>
        `;
  }

  bookingOptionsHtml += `</div>`;

  detailContainer.innerHTML = `
        <button class="secondary-btn" onclick="switchPage('schools')" style="margin-bottom: 20px; padding: 8px 18px; font-size: 0.85rem;">← Back to Directory</button>
        <div class="content-box" style="max-width: 900px; margin: 0 auto;">
            <div style="height: 250px; border-radius: 14px; background-image: url('${school.image}'); background-size: cover; background-position: center; margin-bottom: 20px; position: relative;">
                <span class="region-badge" style="top: 20px; left: 20px; font-size: 0.85rem; padding: 6px 16px;">${school.region}</span>
                ${school.klookAvailable ? '<span class="klook-badge" style="top: 20px; right: 20px; font-size: 0.85rem; padding: 6px 14px;">✨ Klook Partner</span>' : ""}
            </div>
            <h2 style="text-align: left; margin-bottom: 5px;">${school.name}</h2>
            <p style="color: var(--cyan); font-size: 0.95rem; margin-bottom: 20px;">📍 ${school.location}</p>
            <p style="margin-bottom: 25px;">${school.desc}</p>

            <h3 style="color: white; margin-bottom: 15px; font-size: 1.2rem;">School Photo Gallery</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px; margin-bottom: 30px;">
                ${galleryHtml}
            </div>

            <h3 style="color: white; margin-bottom: 15px; font-size: 1.2rem;">Available Courses & Packages</h3>
            <div style="margin-bottom: 25px;">
                ${coursesHtml}
            </div>

            <h3 style="color: white; margin-bottom: 15px; font-size: 1.2rem;">Accommodation Options</h3>
            <div style="margin-bottom: 25px;">
                ${accomHtml}
            </div>

            <div style="background: rgba(15, 42, 74, 0.5); padding: 20px; border-radius: 12px; border: 1px solid var(--border-blue); margin-bottom: 25px;">
                <h4 style="color: white; margin-bottom: 10px; font-size: 1rem;">School Contact Details</h4>
                <p style="font-size: 0.85rem; margin: 4px 0;">📞 Phone: ${school.contact.phone}</p>
                <p style="font-size: 0.85rem; margin: 4px 0;">✉️ Email: ${school.contact.email}</p>
            </div>

            <h3 style="color: white; margin-bottom: 10px; font-size: 1.3rem;">Choose Your Booking Method</h3>
            <p style="font-size: 0.9rem; color: #94A3B8; margin-bottom: 10px;">Select whether you prefer booking directly through our website or externally through Klook.</p>
            
            ${bookingOptionsHtml}
        </div>
    `;

  switchPage("school-detail");
}

function toggleFaq(element) {
  element.classList.toggle("open");
  const icon = element.querySelector(".faq-icon");
  icon.textContent = element.classList.contains("open") ? "-" : "+";
}

function populateBookingSchools(preselectedSchoolId = null) {
  const select = document.getElementById("bookSchoolSelect");
  select.innerHTML = '<option value="">-- Choose School --</option>';
  schoolsData.forEach((s) => {
    select.innerHTML += `<option value="${s.id}">${s.name} (${s.location})</option>`;
  });

  if (preselectedSchoolId) {
    select.value = preselectedSchoolId;
    updateCoursesDropdown();
  } else {
    select.value = "";
    document.getElementById("bookCourseSelect").innerHTML =
      '<option value="">-- Choose Course --</option>';
    document.getElementById("courseInfoBox").style.display = "none";
  }
}

function startBookingForSchool(schoolId) {
  switchPage("booking", schoolId);
}

function updateCoursesDropdown() {
  const schoolId = document.getElementById("bookSchoolSelect").value;
  const courseSelect = document.getElementById("bookCourseSelect");
  courseSelect.innerHTML = '<option value="">-- Choose Course --</option>';

  if (!schoolId) return;

  const school = schoolsData.find((s) => s.id == schoolId);
  if (school && school.courses) {
    school.courses.forEach((c, idx) => {
      courseSelect.innerHTML += `<option value="${idx}">${c.name} - ₱${c.price.toLocaleString()} (${c.level})</option>`;
    });
  }
  updateCourseDetails();
  updateAccommodationsDropdown();
}

function updateAccommodationsDropdown() {
  const schoolId = document.getElementById("bookSchoolSelect").value;
  const roomSelect = document.getElementById("accomRoomSelect");
  roomSelect.innerHTML = "";

  if (!schoolId) return;
  const school = schoolsData.find((s) => s.id == schoolId);

  if (school && school.accommodations && school.accommodations.length > 0) {
    school.accommodations.forEach((acc, idx) => {
      roomSelect.innerHTML += `<option value="${idx}" data-price="${acc.price}">${acc.name} - ₱${acc.price.toLocaleString()} / night</option>`;
    });
  }
}

function updateCourseDetails() {
  const schoolId = document.getElementById("bookSchoolSelect").value;
  const courseIdx = document.getElementById("bookCourseSelect").value;
  const box = document.getElementById("courseInfoBox");

  if (schoolId === "" || courseIdx === "") {
    box.style.display = "none";
    return;
  }

  const school = schoolsData.find((s) => s.id == schoolId);
  const course = school.courses[courseIdx];

  box.style.display = "block";
  box.innerHTML = `<strong>Level:</strong> ${course.level} | <strong>Price:</strong> ₱${course.price.toLocaleString()} <br><em>${course.desc}</em>`;
}

function calculateNights() {
  const checkInVal = document.getElementById("checkInDate").value;
  const checkOutVal = document.getElementById("checkOutDate").value;

  if (!checkInVal || !checkOutVal) return 1;

  const checkIn = new Date(checkInVal);
  const checkOut = new Date(checkOutVal);
  const timeDiff = checkOut.getTime() - checkIn.getTime();
  const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return nights > 0 ? nights : 1;
}

function validateStep2() {
  const accomChoice = document.getElementById("accomChoice").value;
  const nextBtn = document.getElementById("step2NextBtn");

  if (accomChoice === "no") {
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
    return true;
  }

  const roomSelect = document.getElementById("accomRoomSelect").value;
  const checkIn = document.getElementById("checkInDate").value;
  const checkOut = document.getElementById("checkOutDate").value;

  const isValid =
    roomSelect !== "" &&
    checkIn !== "" &&
    checkOut !== "" &&
    new Date(checkOut) > new Date(checkIn);

  if (isValid) {
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
  } else {
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.5";
    nextBtn.style.cursor = "not-allowed";
  }

  return isValid;
}

function toggleAccomFields() {
  const val = document.getElementById("accomChoice").value;
  const container = document.getElementById("accomFieldsContainer");
  const checkIn = document.getElementById("checkInDate");
  const checkOut = document.getElementById("checkOutDate");

  container.style.display = val === "yes" ? "block" : "none";

  if (val === "yes") {
    checkIn.setAttribute("required", "required");
    checkOut.setAttribute("required", "required");
  } else {
    checkIn.removeAttribute("required");
    checkOut.removeAttribute("required");
    checkIn.value = "";
    checkOut.value = "";
  }

  validateStep2();
}

function proceedFromStep1() {
  const schoolId = document.getElementById("bookSchoolSelect").value;
  const courseIdx = document.getElementById("bookCourseSelect").value;

  if (!schoolId || courseIdx === "") {
    alert("Please select both a school and a course before proceeding.");
    return;
  }

  const school = schoolsData.find((s) => s.id == schoolId);

  if (school.accommodations && school.accommodations.length > 0) {
    document.getElementById("accomChoice").value = "no";
    toggleAccomFields();
    nextWizardStep(2);
  } else {
    document.getElementById("accomChoice").value = "no";
    toggleAccomFields();
    nextWizardStep(3);
  }
}

function proceedFromStep2() {
  const accomChoice = document.getElementById("accomChoice").value;

  if (accomChoice === "yes") {
    const checkIn = document.getElementById("checkInDate").value;
    const checkOut = document.getElementById("checkOutDate").value;

    if (!checkIn || !checkOut) {
      alert("Please select both Check-in and Check-out dates.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check-out date must be after Check-in date.");
      return;
    }
  }

  nextWizardStep(3);
}

function goBackFromStep(stepNum) {
  if (stepNum === 3) {
    const schoolId = document.getElementById("bookSchoolSelect").value;
    const school = schoolsData.find((s) => s.id == schoolId);
    if (school && school.accommodations && school.accommodations.length > 0) {
      nextWizardStep(2);
    } else {
      nextWizardStep(1);
    }
  } else {
    nextWizardStep(stepNum - 1);
  }
}

function nextWizardStep(stepNum) {
  document
    .querySelectorAll(".wizard-step")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".step-indicator")
    .forEach((i) => i.classList.remove("active"));

  document.getElementById("wstep-" + stepNum).classList.add("active");
  document.getElementById("ind-" + stepNum).classList.add("active");

  window.scrollTo({ top: 100, behavior: "smooth" });
}

function selectPaymentMethod(methodName, element) {
  document
    .querySelectorAll(".payment-card")
    .forEach((c) => c.classList.remove("active"));
  element.classList.add("active");
  element.querySelector("input").checked = true;

  const instrBox = document.getElementById("paymentInstructionsBox");
  if (methodName === "GCash") {
    instrBox.innerHTML =
      "<strong>GCash Instructions:</strong> Send payment to 0917-555-SISID (Sisid PH Partners). Provide reference number below.";
  } else if (methodName === "Maya") {
    instrBox.innerHTML =
      "<strong>Maya Instructions:</strong> Transfer to Maya Account 0918-987-6543 (Sisid PH). Provide reference number below.";
  } else {
    instrBox.innerHTML =
      "<strong>Bank Transfer Instructions:</strong> BPI Account # 1234-5678-90 (Sisid PH Inc.). Upload reference below.";
  }
}

function prepareSummary() {
  const schoolId = document.getElementById("bookSchoolSelect").value;
  const courseIdx = document.getElementById("bookCourseSelect").value;
  const school = schoolsData.find((s) => s.id == schoolId);
  const course = school.courses[courseIdx];
  const participants =
    parseInt(document.getElementById("bookParticipants").value) || 1;
  const accomChoice = document.getElementById("accomChoice").value;
  const diveDate = document.getElementById("diveDate").value;
  const custName = document.getElementById("custName").value;
  const custEmail = document.getElementById("custEmail").value;
  const payMethod = document.querySelector(
    'input[name="payMethod"]:checked',
  ).value;
  const payRef = document.getElementById("payRefNumber").value;

  const courseSubtotal = course.price * participants;
  let accomText = "No accommodation included";
  let accomTotal = 0;

  if (accomChoice === "yes") {
    const roomSelect = document.getElementById("accomRoomSelect");
    const selectedOpt = roomSelect.options[roomSelect.selectedIndex];
    if (selectedOpt) {
      const pricePerNight =
        parseInt(selectedOpt.getAttribute("data-price")) || 0;
      const nights = calculateNights();
      accomTotal = pricePerNight * nights;
      accomText = `${selectedOpt.text.split(" - ")[0]} (₱${pricePerNight.toLocaleString()}/night × ${nights} night${nights > 1 ? "s" : ""})`;
    }
  }

  const totalEst = courseSubtotal + accomTotal;

  const summaryBox = document.getElementById("summaryContent");
  summaryBox.innerHTML = `
        <p><strong>School:</strong> ${school.name} (${school.location})</p>
        <p><strong>Course:</strong> ${course.name} (${course.level}) x ${participants} participant(s) — ₱${courseSubtotal.toLocaleString()}</p>
        <p><strong>Accommodation:</strong> ${accomText} — ₱${accomTotal.toLocaleString()}</p>
        <p><strong>Preferred Date:</strong> ${diveDate || "Not specified"}</p>
        <p><strong>Customer:</strong> ${custName} (${custEmail})</p>
        <p><strong>Payment Method:</strong> ${payMethod} (Ref: ${payRef})</p>
        <hr style="border-color: var(--border-blue); margin: 10px 0;">
        <p style="font-size: 1.05rem; color: var(--cyan);"><strong>Total Estimated Amount: ₱${totalEst.toLocaleString()}</strong></p>
        <p style="font-size: 0.75rem; color: #94A3B8; margin-top: 5px;">Status: Pending manual confirmation by school.</p>
    `;
}

function submitFinalBooking(e) {
  e.preventDefault();

  const schoolId = document.getElementById("bookSchoolSelect").value;
  const courseIdx = document.getElementById("bookCourseSelect").value;
  const school = schoolsData.find((s) => s.id == schoolId);
  const course = school.courses[courseIdx];
  const participants =
    parseInt(document.getElementById("bookParticipants").value) || 1;
  const custName = document.getElementById("custName").value;
  const custEmail = document.getElementById("custEmail").value;
  const accomChoice = document.getElementById("accomChoice").value;

  const courseSubtotal = course.price * participants;
  let accomTotal = 0;

  if (accomChoice === "yes") {
    const roomSelect = document.getElementById("accomRoomSelect");
    const selectedOpt = roomSelect.options[roomSelect.selectedIndex];
    if (selectedOpt) {
      const pricePerNight =
        parseInt(selectedOpt.getAttribute("data-price")) || 0;
      const nights = calculateNights();
      accomTotal = pricePerNight * nights;
    }
  }
  const totalEst = courseSubtotal + accomTotal;

  const randomNum = Math.floor(100000 + Math.random() * 900000);
  const refNumber = `SISID REF - ${randomNum}`;

  document.getElementById("modalRefNumber").textContent = refNumber;

  const templateParams = {
    to_name: custName,
    to_email: custEmail,
    ref_number: refNumber,
    school_name: school.name,
    total_amount: totalEst.toLocaleString(),
  };

  emailjs.send("service_b87krnw", "template_jhuf24o", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Booking registered, but email confirmation failed to dispatch.");
    },
  );

  document.getElementById("successModal").style.display = "flex";
  document.getElementById("bookingForm").reset();
  nextWizardStep(1);
}

function closeSuccessModal() {
  document.getElementById("successModal").style.display = "none";
  switchPage("home");
}

function handleContact(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  e.target.reset();
}

renderSchools();
