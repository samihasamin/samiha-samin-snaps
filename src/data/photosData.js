const photosData = [
  {
    id: "6be619d5-de2c-4f62-ac1b-bd2e36d71ab9",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-00.png",
    photoDescription:
      "Looking up to the Manhattan Bridge, in New York City, New York.",
    photographer: "Greg Hooper",
    likes: 910,
    timestamp: 1722956264000,
    tags: ["New York", "Bridge", "Skyline", "Cars"],
    comments: [
      {
        name: "Felix Brewer",
        comment:
          "What a great angle! It really gives a new perspective on this location.",
        id: "f3aa5dd5-4c75-4a74-a410-c59d56d04697",
        timestamp: 1724612264000,
      },
    ],
  },
  {
    id: "8f86c7f4-bd18-4e4a-9328-a54a189dd5ba",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-01.png",
    photoDescription:
      "Saint Louis Art Museum, a white concrete building, under white sky during daytime.",
    photographer: "Charlene Thomas",
    likes: 800,
    timestamp: 1722956264000,
    tags: ["Missouri", "Buildings", "Trees"],
    comments: [
      {
        name: "Glen Sims",
        comment: "The photographer did a great job with this one.",
        id: "d37b5527-fa5e-42c2-9ca4-31a67542541d",
        timestamp: 1724785064000,
      },
    ],
  },
  {
    id: "c8ffcfd1-1ff1-4114-bbf1-a023c4a24f9d",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-02.png",
    photoDescription:
      "Aerial view of city buildings in New York City, New York.",
    photographer: "Malik Johnson",
    likes: 1685,
    timestamp: 1722956264000,
    tags: ["New York", "Buildings", "Skyline"],
    comments: [
      {
        name: "Alex Mitchell",
        comment: "The color palette in this photo is absolutely mesmerizing.",
        id: "aac99546-2b08-4527-afaf-e000442868ee",
        timestamp: 1724785064000,
      },
      {
        name: "Elena Rossi",
        comment: "Stunning shot! The colors and lighting are perfect.",
        id: "08160c97-5536-4053-be2f-039cb7373552",
        timestamp: 1724957864000,
      },
      {
        name: "Casey Schmidt",
        comment: "This picture perfectly captures the essence of the city.",
        id: "efbf1aa1-0244-4570-a677-72d7691b008c",
        timestamp: 1725130664000,
      },
    ],
  },
  {
    id: "8cbf5a70-6cb8-4cce-a4c2-4cde4f84c513",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-03.png",
    photoDescription:
      "A bare tree in front of the Nancy and Rich Kinder Building at the Museum of Fine Arts Houston.",
    photographer: "Elena Rossi",
    likes: 2362,
    timestamp: 1722956264000,
    tags: ["Texas", "Buildings", "Skyline"],
    comments: [
      {
        name: "Terry Wong",
        comment:
          "Great angle! It really emphasizes the subject's presence in the frame.",
        id: "2e4718f5-0603-4377-b30b-b6d9e290aa74",
        timestamp: 1724957864000,
      },
      {
        name: "Jordan Brown",
        comment: "The photographer did a great job with this one.",
        id: "f508fb8f-dba0-417b-845d-f0801795a14a",
        timestamp: 1725130664000,
      },
      {
        name: "Annie Lopez",
        comment: "The framing in this shot is spot on. Great work!",
        id: "5b321591-89f1-4545-aa13-147e9f62f89b",
        timestamp: 1725476264000,
      },
    ],
  },
  {
    id: "37c67839-4608-4994-8ab6-ef9ad609df70",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-04.png",
    photoDescription:
      "A view of the Crystal Bridges Museum of American Art from across the water.",
    photographer: "Amara Okoye",
    likes: 2667,
    timestamp: 1722854264143,
    tags: ["Arizona", "Museum", "Buildings"],
    comments: [
      {
        name: "Casey Schmidt",
        comment:
          "The perspective here is unique and adds a lot of interest to the photo.",
        id: "ffe8efba-435f-4304-afb7-67229606accc",
        timestamp: 1724612264000,
      },
    ],
  },
  {
    id: "9d8e239c-3953-4822-83f2-ccdd98b8c5e6",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-05.png",
    photoDescription:
      "A train traveling through Chicago, Illinois next to tall buildings.",
    photographer: "Ali Novak-Greene",
    likes: 1048,
    timestamp: 1722954264143,
    tags: ["Illinois", "Subway", "Buildings", "Bridge"],
    comments: [
      {
        name: "Amara Okoye",
        comment:
          "I hope to capture photos like you one day! You always manage to capture the city with such great visual depth.",
        id: "922f13d0-2488-4feb-ab80-101a7db0f9c8",
        timestamp: 1724612264000,
      },
      {
        name: "Elena Rossi",
        comment:
          "I love the details captured here, especially the architecture.",
        id: "0a6cab8b-de86-43cf-bd55-0fd9ce2d3edb",
        timestamp: 1724785064000,
      },
      {
        name: "Casey Schmidt",
        comment: "The mood and atmosphere in this shot are beautiful.",
        id: "280be87a-837a-4d92-8800-6fe51f596ef6",
        timestamp: 1724957864000,
      },
    ],
  },
  {
    id: "238117b8-6c3b-4f0d-b1c3-97e232980e62",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-06.png",
    photoDescription:
      "Green trees beside the brown building of Ringling Museum in Sarasota, Florida during daytime.",
    photographer: "Sofia Alvarez",
    likes: 2600,
    timestamp: 1722854264143,
    tags: ["Florida", "Buildings"],
    comments: [
      {
        name: "Greg Hooper",
        comment:
          "The use of negative space here is very effective and impactful.",
        id: "d8508408-ae73-4a28-8050-6d344d497e24",
        timestamp: 1724612264000,
      },
      {
        name: "Elena Rossi",
        comment: "Great snap.",
        id: "d81998cb-5b0c-4626-aaee-068e60a3011f",
        timestamp: 1725130664000,
      },
    ],
  },
  {
    id: "89eff543-8ecf-4a64-abbc-495b6443be6f",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-07.png",
    photoDescription:
      "A view of the front of the Smithsonian Castle when arriving from The National Mall.",
    photographer: "Dariya Menon",
    likes: 1225,
    timestamp: 1722531200000,
    tags: ["Washington", "Cathedral"],
    comments: [],
  },
  {
    id: "7cf76704-9508-4632-8077-caec02d1929e",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-08.png",
    photoDescription:
      "White concrete building nested in the Bayou Ben Collection and Gardens, a facility of the Museum of Fine Arts.",
    photographer: "Nico Pascucci",
    likes: 360,
    timestamp: 1722797864000,
    tags: ["Texas", "House", "Trees"],
    comments: [
      {
        name: "Jordan Brown",
        comment:
          "Amazing shot! The play of light and shadow is beautifully balanced.",
        id: "c6c9fc57-d2a8-4e02-b6e4-f39c7befff0c",
        timestamp: 1724785064000,
      },
    ],
  },
  {
    id: "beffcc61-7d93-47f7-9938-5f0df5ef3bea",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-09.png",
    photoDescription:
      "A group of people walking across Brooklyn Bridge in Brooklyn, New York.",
    photographer: "Wei Zhang",
    likes: 1192,
    timestamp: 1722625064000,
    tags: ["New York", "Bridge", "Skyline"],
    comments: [
      {
        name: "Charlene Thomas",
        comment: "The small details really make this composition.",
        id: "a449a5bc-4f85-44c1-a84b-39e9d3359302",
        timestamp: 1724957864000,
      },
    ],
  },
  {
    id: "c27d7e20-b5d1-44fa-854d-9ba5bc2c9fbf",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-10.png",
    photoDescription:
      "A worm's-view of a brown brick building in Williamsburg, New York.",
    photographer: "Greg Hooper",
    likes: 1594,
    timestamp: 1722625064000,
    tags: ["New York", "Buildings"],
    comments: [
      {
        name: "Terry Wong",
        comment:
          "Love the candid feel of this photo. It tells a compelling story.",
        id: "b4b9cabf-4d3f-4f0e-8aa1-4e68c1bf67ad",
        timestamp: 1724785064000,
      },
      {
        name: "Ash Tanaka",
        comment: "Beautiful.",
        id: "4731eeb7-64c7-4d56-933f-e3c17be293a8",
        timestamp: 1725130664000,
      },
    ],
  },
  {
    id: "d82abf42-e5dd-4726-a4fd-3eb13ce72c53",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-11.png",
    photoDescription:
      "Looking out to the courtyard from the column-filled terrace at Ringling Museum in Sarasota, Florida.",
    photographer: "Sofia Alvarez",
    likes: 28,
    timestamp: 1722452264000,
    tags: ["Florida", "Courtyard", "Columns"],
    comments: [
      {
        name: "Ingrid Smith",
        comment:
          "Love the composition! The use of natural light here is stunning.",
        id: "cbd4f2cb-cf7d-4caa-92e7-035e38753ffa",
        timestamp: 1724612264000,
      },
    ],
  },
  {
    id: "f31d524c-7ce8-446b-a4db-107cb089e4b4",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-12.png",
    photoDescription:
      "An old, run down, building sitting in the middle of a field.",
    photographer: "Maxime Deserres",
    likes: 1594,
    timestamp: 1722452264000,
    tags: ["Oregon", "Buildings"],
    comments: [
      {
        name: "Terry Wong",
        comment: "Very moody, love how the tone contributes to the feeling.",
        id: "080ebf0b-ff4b-4d06-a54c-3f411f0b4f8f",
        timestamp: 1724957864000,
      },
    ],
  },
  {
    id: "c432adb0-df2d-4f6b-83d0-bfda8d99fca5",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-13.png",
    photoDescription:
      "A yellow cab among a city of bricks in New York City, New York.",
    photographer: "Val Cohen",
    likes: 964,
    timestamp: 1722452264000,
    tags: ["New York", "Taxi", "Buildings", "Cars"],
    comments: [
      {
        name: "Terry Wong",
        comment:
          "Such a well-timed capture! The movement is perfectly frozen in the frame.",
        id: "e42e03a0-bf31-4f41-8f59-3a649130b555",
        timestamp: 1724612264000,
      },
      {
        name: "Ash Tanaka",
        comment: "Good work.",
        id: "7b57e4c4-dda6-42ad-9e0f-18c9e13c592b",
        timestamp: 1725130664000,
      },
    ],
  },
  {
    id: "e966674f-58d5-442e-8f42-5902e5ee6571",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-14.png",
    photoDescription:
      "A man riding a skateboard down a sidewalk, outside of the Crystal Bridges Museum of American Art in Arizona.",
    photographer: "Amara Okoye",
    likes: 1017,
    timestamp: 1722365864000,
    tags: ["Arizona", "Courtyard", "Path"],
    comments: [
      {
        name: "Nico Pascucci",
        comment:
          "Excellent use of leading lines. Really draws the viewer's eye in.",
        id: "350aac5f-dd17-4957-806f-1da196f3b40b",
        timestamp: 1724957864000,
      },
      {
        name: "Charlene Thomas",
        comment:
          "The bokeh effect in the foreground really contributes to this composition.",
        id: "888457e0-97b0-4900-b24c-63efc4101f4e",
        timestamp: 1725476264000,
      },
    ],
  },
  {
    id: "94e05778-bcdb-48fa-b140-ef398b48e3c1",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-15.png",
    photoDescription:
      "Music City Center located in downtown Nashville, Tennessee.",
    photographer: "Ash Tanaka",
    likes: 360,
    timestamp: 1722365864000,
    tags: ["Tennessee", "Museum", "Buildings"],
    comments: [],
  },
  {
    id: "2ce85c21-4a1e-4b05-b147-8c4957706d3e",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-16.png",
    photoDescription:
      "Shadows on a building nested in the Bayou Ben Collection and Gardens, a facility of the Museum of Fine Arts.",
    photographer: "Nico Pascucci",
    likes: 2578,
    timestamp: 1722365864000,
    tags: ["Texas", "House", "Buildings"],
    comments: [
      {
        name: "Ali Novak-Greene",
        comment:
          "Amazing shot! The play of light and shadow is beautifully balanced.",
        id: "566a3622-012d-4aa3-a6ed-1ccf6306ae13",
        timestamp: 1724957864000,
      },
    ],
  },
  {
    id: "13307e72-f159-4a2f-ac09-f78bf3c7ce22",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-17.png",
    photoDescription:
      "An abandoned church and well, remnants of an old western town in Oregon.",
    photographer: "Maxime Deserres",
    likes: 1373,
    timestamp: 1672531200000,
    tags: ["Oregon", "House"],
    comments: [],
  },
  {
    id: "d8300fda-61f8-42da-8c21-212f01a48b96",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-18.png",
    photoDescription:
      "Cables of the Brooklyn Bridge at sunset, creating a geometric pattern across the sky.",
    photographer: "Thandiwe Ndugu",
    likes: 2563,
    timestamp: 1722106664000,
    tags: ["New York", "Bridge", "Buildings"],
    comments: [
      {
        name: "Elena Rossi",
        comment:
          "The symmetry in this shot is incredibly satisfying. Well done!",
        id: "eb13b23f-37dd-4075-9af5-320fabe10d88",
        timestamp: 1724957864000,
      },
      {
        name: "Nico Pascucci",
        comment:
          "Great use of line in this composition. Capturing the gradient of the sky and setting sun really adds to the magic of this snap.",
        id: "72f674dc-c8aa-4b88-872a-e2e0b7474df8",
        timestamp: 1725130664000,
      },
      {
        name: "Terry Wong",
        comment:
          "Great use of rule of thirds. The subject placement is perfect.",
        id: "07e4816c-4853-4ae5-9bb5-e64a35d41475",
        timestamp: 1725476264000,
      },
      {
        name: "Kai Muller",
        comment:
          "The lighting here is so natural and flattering. Great capture!",
        id: "f20f620a-efcf-41bf-ae1c-9e448982c3c7",
        timestamp: 1725476264000,
      },
    ],
  },
  {
    id: "c2e3a895-eaf0-42a8-8f9b-4722300ba847",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-19.png",
    photoDescription:
      "Curved lines form the white exterior of the Getty Museum in Los Angeles, California.",
    photographer: "Kai Muller",
    likes: 46,
    timestamp: 1722106664000,
    tags: ["California", "Museum", "Columns"],
    comments: [
      {
        name: "Terry Wong",
        comment:
          "The clarity and focus in this shot are impeccable. Great job!",
        id: "d1b93dcf-ec44-49be-b98b-7bd17456acaf",
        timestamp: 1725476264000,
      },
    ],
  },
  {
    id: "aae2a3f0-24d0-4410-bbd7-d63cfbe1c671",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-20.png",
    photoDescription:
      "Orange metro tram on the street during daytime in downtown Houston, Texas.",
    photographer: "Ingrid Smith",
    likes: 375,
    timestamp: 1722106664000,
    tags: ["Texas", "Subway", "Train"],
    comments: [
      {
        name: "Kai Muller",
        comment:
          "Such a captivating photo! The depth of field is beautifully executed.",
        id: "16bf5bb5-cbdf-4f61-8895-74b24f16c5a5",
        timestamp: 1724785064000,
      },
    ],
  },
  {
    id: "4731eeb7-64c7-4d56-933f-e3c17be293a8",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-21.png",
    photoDescription:
      "White tiles and coastal blue windows form the geometric exterior of the Getty Museum in Los Angeles, California.",
    photographer: "Kai Muller",
    likes: 1708,
    timestamp: 1722106664000,
    tags: ["California", "Museum", "Buildings"],
    comments: [
      {
        name: "Terry Wong",
        comment:
          "Fantastic capture! The reflections are perfectly executed and add dimension.",
        id: "3adb431d-61d3-4a20-bc86-caabca05d68e",
        timestamp: 1724785064000,
      },
      {
        name: "Ash Tanaka",
        comment: "Well done.",
        id: "65c71eec-0f39-4a9d-99b7-642a89e511ee",
        timestamp: 1724957864000,
      },
    ],
  },
  {
    id: "df129bd3-452b-41ca-bc59-bc9b1c606e09",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-22.png",
    photoDescription:
      "Brick apartment buildings in downtown Nashville, Tennessee.",
    photographer: "Ash Tanaka",
    likes: 2272,
    timestamp: 1721933864000,
    tags: ["Tennessee", "Buildings"],
    comments: [
      {
        name: "Kai Muller",
        comment:
          "Excellent shot! The composition and lighting create a striking visual",
        id: "6f25b0a0-fce2-4b5d-8b52-e14bcba6ce73",
        timestamp: 1724957864000,
      },
    ],
  },
  {
    id: "6321c961-de3b-44a3-9725-62a0560135db",
    photo:
      "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-23.png",
    photoDescription:
      "Looking down the columns at an amphitheater in Arlington, Virginia.",
    photographer: "Alejandro Gomez",
    likes: 88,
    timestamp: 1721933864000,
    tags: ["Virginia", "Columns"],
    comments: [
      {
        name: "Terry Wong",
        comment:
          "Impressive capture! The contrast and shadows add so much depth.",
        id: "17a5d5f4-be57-4b67-8904-34cf170f2eff",
        timestamp: 1724785064000,
      },
    ],
  },
];

export default photosData;
