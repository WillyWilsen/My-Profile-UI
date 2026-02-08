export const AcademicProject = [
  {
    _id: { $oid: "6516665f1e0f235bb960690d" },
    title: "BEAST App",
    description: `<li>BEAST is a training management application for members, admins, and coaches of the Bandung Tennis Enthusiast organization.</li>
<li>The app is built using <b>React Native</b>, <b>Express.js</b>, and <b>PostgreSQL</b>.</li>
<li>Members can register for training sessions and complete training payments.</li>
<li>Coaches confirm training schedules, while admins verify training registrations.</li>
<li>Users can also view training history, payment history, tournaments, field lists, coach lists, and related training media.</li>
`,
    image_path: "/projects/BEAST.png",
    link: "https://gitlab.informatika.org/if3250_2023_k03_01_pro-13",
    sequence: { $numberInt: "15" },
  },
  {
    _id: { $oid: "6447ffad935faaf97896fe7a" },
    title: "3D WebGL Articulated Model",
    description: `<li>The application provides an interactive canvas where users can create and manipulate articulated objects using tools on the right panel.</li>
<li>Users can select components to modify through a hierarchical tree structure.</li>
<li>Transformation tools include translation, rotation, and scaling for editing object parts.</li>
<li>Models can be imported via a load button using a <b>.json</b> format containing name, vertices, colors, faces, animation, and children attributes.</li>
<li>Modified objects can be saved and reloaded, while the reset button restores the model to its original state.</li>
<li>Additional features include animation playback, camera and projection controls, mapping type selection, and adding a default cube.</li>
`,
    image_path: "/projects/WebGL.png",
    link: "https://github.com/WillyWilsen/IF3260_Tugas3_K03_G12",
    sequence: { $numberInt: "14" },
  },
  {
    _id: { $oid: "6446f3ae935faaf97896fe58" },
    title: "Extended Survival Shooter",
    description: `<li>Extended Survival Shooter is a desktop game developed using <b>C#</b> with <b>Unity</b>.</li>
<li>The game features story mode, quests, save/load system, game over screen, scoreboard, main menu, and shopkeeper system.</li>
<li>Players can use various weapons such as default gun, shotgun, sword, and bow.</li>
<li>The pet system includes healer, attacker, and aura buff companions.</li>
<li>Cheat features include no damage, one-hit kill, motherlode, double speed, full HP pet, and pet elimination.</li>
`,
    image_path: "/projects/ESS.png",
    link: "https://gitlab.informatika.org/JeremyRio/if3210-2023-unity-ess",
    sequence: { $numberInt: "13" },
  },
  {
    _id: { $oid: "6446f1a9935faaf97896fe53" },
    title: "Majika",
    description: `<li>Majika is an application developed using <b>Android Studio</b>.</li>
<li>The app includes features such as Twibbon selfies, restaurant branch listings, menus, baskets, and payments.</li>
<li>Users can take selfies with built-in Twibbon frames and view restaurant locations via Google Maps.</li>
<li>The menu and basket features allow users to select food or drinks and add them to the cart.</li>
<li>The payment feature enables users to complete transactions for items in their basket.</li>
`,
    image_path: "/projects/Majika.jpg",
    link: "https://gitlab.informatika.org/if3210-2023-android-mlk/malika",
    sequence: { $numberInt: "12" },
  },
  {
    _id: { $oid: "639ef6ae296bbe6bd7b76101" },
    title: "Binotify Website V2",
    description: `<li><b>Binotify Website</b> is built using <b>CodeIgniter</b> and <b>MySQL</b>, allowing users to browse music and subscribe to singers through the Binotify Premium integration.</li>
<li><b>Binotify Premium Website</b> is developed using <b>React.js + Vite</b>, where admins manage subscription approvals and singers manage their song data.</li>
<li><b>Binotify REST Service</b> is created using <b>Nest.js</b> and <b>MySQL</b>, providing authentication and APIs for managing singer and song data.</li>
<li><b>Binotify SOAP Service</b> is implemented using <b>JAX-WS</b> and <b>MySQL</b>, handling security, subscription request processing, callbacks, and request status checking.</li>
`,
    image_path: "/projects/BinotifyV2.jpg",
    link: "https://gitlab.informatika.org/if3110-2022-k01-02-10",
    sequence: { $numberInt: "11" },
  },
  {
    _id: { $oid: "639e3291296bbe6bd7b760bc" },
    title: "Binotify Website",
    description: `<li>Binotify website is built using <b>CodeIgniter</b> (with modified configurations) and <b>MySQL</b>.</li>
<li>The platform provides music streaming features with albums and songs.</li>
<li>Users can browse albums, view song details, search songs, and listen to music.</li>
<li>Admins have full user capabilities plus management features such as adding or deleting albums and songs, and viewing registered users.</li>
`,
    image_path: "/projects/Binotify.png",
    link: "http://binotify.epizy.com/public/",
    sequence: { $numberInt: "10" },
  },
  {
    _id: { $oid: "631a1568a2b7ef0b2f82a1a5" },
    title: "BNMO Website",
    description: `<li>BNMO website is built using <b>React.js</b> with CI/CD, <b>Spring Boot</b> with Docker and CI/CD, and <b>PostgreSQL</b>, and is deployed on <b>Heroku</b>.</li>
<li>The system implements Authorization Bearer Token, API Caching, and API Documentation using Swagger.</li>
<li>The platform supports two roles: admin and customer.</li>
<li>Customers can register, request balance top-ups, manage profiles, transfer balances, and view request and transaction histories.</li>
<li>Admins can verify customers, approve balance addition requests, and search customer data.</li>
`,
    image_path: "/projects/BNMO.png",
    link: "https://bnmo.herokuapp.com/",
    sequence: { $numberInt: "9" },
  },
  {
    _id: { $oid: "631a14f8a2b7ef0b2f82a1a1" },
    title: "MST-Based Clustering Website",
    description: `<li>MST-Based Clustering website is built using <b>React.js (TypeScript)</b>, <b>Go</b>, <b>Docker</b>, <b>CI/CD</b>, and <b>MySQL</b>.</li>
<li>The system implements an unsupervised machine learning clustering approach based on Minimum Spanning Tree (MST).</li>
<li>A MST is constructed from n data points, and clusters are formed by cutting the highest-weight edges.</li>
<li>The number of edges removed determines the number of clusters, with a maximum of n−1 possible cuts.</li>
`,
    image_path: "/projects/MST-Based_Clustering.png",
    link: "https://github.com/WillyWilsen/MST-Based-Clustering-UI",
    sequence: { $numberInt: "8" },
  },
  {
    _id: { $oid: "631a1483a2b7ef0b2f82a19f" },
    title: "Buzzer Checker Website",
    description: `<li>Buzzer Checker website is built using <b>Vue.js</b> and <b>Flask</b>.</li>
<li>The system analyzes a Twitter username to determine whether it is a buzzer account.</li>
<li>Detection is performed by converting account data into a three-dimensional vector and comparing it with known buzzer account vectors.</li>
`,
    image_path: "/projects/Buzzer_Checker.png",
    link: "https://github.com/WillyWilsen/Buzzer-Checker",
    sequence: { $numberInt: "7" },
  },
  {
    _id: { $oid: "631a142ea2b7ef0b2f82a19d" },
    title: "NIM Finder Website",
    description: `<li>NIM Finder website is built using <b>React.js</b> with Progressive Web App (PWA) technology.</li>
<li>The system helps users search for Bandung Institute of Technology student identities.</li>
<li>Search can be performed using student ID number, department/major, year of class, or name.</li>
`,
    image_path: "/projects/NIM_Finder.png",
    link: "https://nim-finder.netlify.app/",
    sequence: { $numberInt: "6" },
  },
  {
    _id: { $oid: "631a13e2a2b7ef0b2f82a19a" },
    title: "DNA Website",
    description: `<li>DNA website is built using <b>React.js</b>, <b>Go</b>, and <b>MySQL</b>.</li>
<li>Users can add new disease data to the database.</li>
<li>The system predicts diseases by analyzing patient DNA and provides percentage match results.</li>
<li>Users can search and review disease prediction history.</li>
`,
    image_path: "/projects/DNA.png",
    link: "https://tesdnanamanyamauapa.netlify.app/",
    sequence: { $numberInt: "5" },
  },
  {
    _id: { $oid: "6409acd6978163a29376acf8" },
    title: "Aether Wars Game (Desktop)",
    description: `<li>Aether Wars application is developed using <b>JavaFX</b>.</li>
<li>The game is designed for 2 players, each holding up to 5 cards.</li>
<li>Gameplay consists of four phases: Draw, Plan, Attack, and End.</li>
<li>Players draw new cards, plan strategies by placing or discarding cards, and take turns attacking opponents.</li>
`,
    image_path: "/projects/Aether_Wars.png",
    link: "https://github.com/WillyWilsen/Tugas-Besar-OOP-2",
    sequence: { $numberInt: "4" },
  },
  {
    _id: { $oid: "6409ae19978163a29376acfd" },
    title: "15-Puzzle (Desktop)",
    description: `<li>15-Puzzle application is developed using <b>Java Swing</b>.</li>
<li>The program solves the puzzle using the Branch and Bound algorithm.</li>
<li>It reads the initial puzzle configuration from a file and processes it until a solution is found.</li>
<li>The application supports both CLI and GUI interfaces.</li>
`,
    image_path: "/projects/15-Puzzle.png",
    link: "https://github.com/WillyWilsen/Tugas-Kecil-3-Strategi-Algoritma",
    sequence: { $numberInt: "3" },
  },
  {
    _id: { $oid: "6409aebd978163a29376ad00" },
    title: "Folder Crawling (Desktop)",
    description: `<li>Folder Crawling application is developed using <b>C#</b> with the <b>.NET</b> framework.</li>
<li>The system replicates file explorer functionality, enabling users to navigate directories.</li>
<li>It uses Breadth First Search (BFS) and Depth First Search (DFS) algorithms to locate target folders.</li>
<li>Search results are visualized in a tree structure.</li>
`,
    image_path: "/projects/Folder_Crawling.png",
    link: "https://github.com/WillyWilsen/Tubes2_13520128",
    sequence: { $numberInt: "2" },
  },
  {
    _id: { $oid: "631a0caea2b7ef0b2f82a190" },
    title: "Image Compressor Website",
    description: `<li>Image Compressor website is built using <b>Flask</b>.</li>
<li>The system allows users to compress selected images based on a chosen compression percentage.</li>
`,
    image_path: "/projects/Image_Compressor.png",
    link: "https://github.com/WillyWilsen/Algeo02-20137",
    sequence: { $numberInt: "1" },
  },
];
