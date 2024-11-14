// import React, { useState } from "react";
// import {
//   Search,
//   AccessTime,
//   ThumbUp,
//   ChatBubble,
//   BookmarkBorder,
// } from "@mui/icons-material";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
// import Badge from "@mui/material/Badge";
// import picture1 from "../../assets/1.jpg";
// import picture2 from "../../assets/2.png";
// import picture3 from "../../assets/3.jpeg";
// import picture4 from "../../assets/4.jpeg";
// import picture5 from "../../assets/5.jpeg";
// import picture6 from "../../assets/6.jpeg";
// import CardMedia from "@mui/material/CardMedia";
// import { Box } from "@mui/material";
// const blogPosts = [
//   {
//     id: 1,
//     title: "Revolutionary Exoskeleton Technology in Physical Therapy",
//     category: "Physical Therapy",
//     excerpt:
//       "Explore how cutting-edge exoskeleton suits are transforming rehabilitation for patients with mobility impairments...",
//     image: picture1,
//     readTime: "5 min read",
//     author: "Dr. Jane Smith",
//     authorAvatar: "/placeholder.svg?height=40&width=40",
//     date: "May 15, 2023",
//     likes: 128,
//     comments: 32,
//     introduction: `
//       Exoskeleton technology is becoming a groundbreaking tool in the field of physical therapy. By enhancing mobility
//       and muscle reconditioning, these suits provide support for patients recovering from significant physical injuries.
//       Exoskeletons are now being used in clinics worldwide to help restore functional movements.`,
//     content: `
//       Exoskeletons work by mimicking natural movements and providing support where muscles or joints are weak, thus allowing
//       patients to perform exercises they might not be able to otherwise. Clinical trials have shown that these devices
//       improve recovery times and provide patients with a greater sense of independence.`,
//     keyTakeaways: [
//       "Exoskeletons offer stability and support for patients with limited mobility.",
//       "Research shows improved muscle reconditioning and functional movement.",
//       "Many rehabilitation centers are incorporating exoskeletons as a standard part of therapy.",
//     ],
//     references: [
//       {
//         title: "Impact of Exoskeletons in Physical Therapy",
//         url: "https://example.com/exoskeleton-impact",
//       },
//       {
//         title: "Exoskeletons in Rehabilitation",
//         url: "https://example.com/research-on-exoskeletons",
//       },
//     ],
//     tags: ["exoskeleton", "technology", "rehabilitation"],
//     relatedPosts: [2, 3],
//   },
//   {
//     id: 2,
//     title: "Mindfulness and Cognitive Behavioral Therapy in Rehab",
//     category: "Mental Health",
//     excerpt:
//       "Discover the powerful combination of mindfulness techniques and CBT in enhancing mental well-being during physical recovery...",
//     image: picture2,
//     readTime: "7 min read",
//     author: "Dr. Michael Johnson",
//     authorAvatar: "/placeholder.svg?height=40&width=40",
//     date: "May 18, 2023",
//     likes: 95,
//     comments: 28,
//     introduction: `
//       Mindfulness and Cognitive Behavioral Therapy (CBT) are two techniques that have proven effective in promoting
//       mental health during rehabilitation. By helping patients focus on the present moment and restructure
//       negative thought patterns, these methods improve both physical and mental outcomes.`,
//     content: `
//       CBT and mindfulness offer unique ways to enhance mental health in rehab settings. Mindfulness helps individuals
//       cope with pain by reducing anxiety and bringing their attention to the present, while CBT enables patients
//       to replace unhelpful thoughts with constructive alternatives.`,
//     keyTakeaways: [
//       "Mindfulness reduces stress and improves focus on recovery.",
//       "CBT helps reframe negative thoughts into positive outcomes.",
//       "These techniques support faster recovery and reduced anxiety levels.",
//     ],
//     references: [
//       {
//         title: "Mindfulness and CBT in Rehabilitation",
//         url: "https://example.com/mindfulness-cbt",
//       },
//       {
//         title: "CBT for Physical Recovery",
//         url: "https://example.com/cbt-in-rehab",
//       },
//     ],
//     tags: ["CBT", "mindfulness", "mental health"],
//     relatedPosts: [1, 6],
//   },
//   {
//     id: 3,
//     title: "Personalized Nutrition Plans: The Future of Recovery Diets",
//     category: "Nutrition",
//     excerpt:
//       "Learn how AI-driven personalized nutrition plans are optimizing recovery times and overall health outcomes...",
//     image: picture3,
//     readTime: "6 min read",
//     author: "Sarah Thompson, RD",
//     authorAvatar: "/placeholder.svg?height=40&width=40",
//     date: "May 20, 2023",
//     introduction: `
//       Personalized nutrition plans are reshaping how diet is used in rehabilitation. By analyzing patient data
//       through AI and machine learning, dietitians can create highly tailored nutrition plans that promote faster
//       recovery and improve overall health outcomes.`,
//     content: `
//       AI-driven personalized nutrition takes into account factors like genetic predispositions, lifestyle, and
//       specific medical needs. Studies show that patients receiving tailored nutrition plans recover faster and
//       experience fewer complications during rehab.`,
//     keyTakeaways: [
//       "Personalized nutrition improves recovery by addressing individual needs.",
//       "AI-based plans lead to better health outcomes and reduced recovery times.",
//       "Nutrition can be optimized for conditions like muscle recovery, joint health, and mental clarity.",
//     ],
//     references: [
//       {
//         title: "AI in Personalized Nutrition",
//         url: "https://example.com/ai-nutrition",
//       },
//       {
//         title: "Personalized Diets in Recovery",
//         url: "https://example.com/nutrition-recovery",
//       },
//     ],
//     tags: ["nutrition", "AI", "personalization"],
//     relatedPosts: [4, 5],
//   },
//   {
//     id: 4,
//     title: "Gamification in Rehab: Making Recovery Fun and Engaging",
//     category: "Technology",
//     excerpt:
//       "How gamified rehabilitation exercises are increasing patient motivation and adherence to treatment plans...",
//     image: picture4,
//     readTime: "8 min read",
//     author: "Alex Chen, PT",
//     authorAvatar: "/placeholder.svg?height=40&width=40",
//     date: "May 22, 2023",
//     introduction: `
//       Gamification is transforming rehab by incorporating elements from video games to make exercises engaging.
//       This approach, particularly popular with younger patients, encourages higher levels of motivation
//       and adherence to rehab exercises.`,
//     content: `
//       Patients are more likely to stick with their treatment plans when exercises are gamified. Techniques such as
//       point scoring, challenges, and interactive digital environments help make rehabilitation feel less like a
//       chore and more like an enjoyable activity.`,
//     keyTakeaways: [
//       "Gamified exercises improve motivation and adherence to treatment plans.",
//       "Challenges and rewards make rehab more engaging for patients.",
//       "Gamification is particularly effective in pediatric and adolescent rehab.",
//     ],
//     references: [
//       {
//         title: "Gamification in Physical Therapy",
//         url: "https://example.com/gamification-therapy",
//       },
//       {
//         title: "Motivational Impact of Gamification",
//         url: "https://example.com/gamification-research",
//       },
//     ],
//     tags: ["gamification", "therapy", "patient engagement"],
//     relatedPosts: [1, 3],
//   },
//   {
//     id: 5,
//     title: "Aquatic Therapy: Harnessing the Healing Power of Water",
//     category: "Physical Therapy",
//     excerpt:
//       "Dive into the benefits of aquatic therapy and how it's revolutionizing rehabilitation for various conditions...",
//     image: picture5,
//     readTime: "5 min read",
//     author: "Emily Waters, DPT",
//     authorAvatar: "/placeholder.svg?height=40&width=40",
//     date: "May 25, 2023",
//     introduction: `
//       Aquatic therapy uses the natural properties of water to aid recovery. By reducing weight-bearing stress
//       and providing resistance, water therapy creates an ideal environment for safe, low-impact exercises.`,
//     content: `
//       Water-based therapy is excellent for patients with joint issues or severe injuries, as the buoyancy
//       minimizes strain on the body. This allows for movement without the pain or risk associated with
//       land-based exercises.`,
//     keyTakeaways: [
//       "Aquatic therapy reduces joint stress and pain.",
//       "The buoyancy of water allows safe movement for patients with limited mobility.",
//       "Water resistance aids in muscle strengthening without excessive strain.",
//     ],
//     references: [
//       {
//         title: "Benefits of Aquatic Therapy",
//         url: "https://example.com/aquatic-therapy",
//       },
//       {
//         title: "Rehabilitation with Aquatic Exercises",
//         url: "https://example.com/water-rehab",
//       },
//     ],
//     tags: ["aquatic therapy", "rehabilitation", "physical therapy"],
//     relatedPosts: [2, 4],
//   },
//   {
//     id: 6,
//     title: "The Role of Sleep in Rehabilitation and Recovery",
//     category: "Mental Health",
//     excerpt:
//       "Uncover the latest research on sleep's crucial role in physical and mental recovery during rehabilitation...",
//     image: picture6,
//     readTime: "6 min read",
//     author: "Dr. Robert Lee",
//     authorAvatar: "/placeholder.svg?height=40&width=40",
//     date: "May 28, 2023",
//     introduction: `
//       Sleep plays an essential role in rehabilitation by aiding both mental and physical recovery. Quality
//       sleep enhances tissue repair, mood stabilization, and cognitive function—all critical factors
//       for successful rehabilitation.`,
//     content: `
//       Studies highlight that patients who prioritize sleep during recovery experience faster healing times
//       and better mental health outcomes. Strategies for achieving optimal sleep include establishing
//       a consistent sleep schedule and incorporating relaxing activities before bed.`,
//     keyTakeaways: [
//       "Adequate sleep is crucial for both physical and mental recovery.",
//       "Sleep enhances tissue repair and stabilizes mood.",
//       "Establishing a bedtime routine can improve sleep quality.",
//     ],
//     references: [
//       {
//         title: "Sleep and Physical Recovery",
//         url: "https://example.com/sleep-rehab",
//       },
//       {
//         title: "Importance of Sleep in Mental Health",
//         url: "https://example.com/sleep-mental-health",
//       },
//     ],
//     tags: ["sleep", "rehabilitation", "mental health"],
//     relatedPosts: [1, 3],
//   },
// ];

// const categories = [
//   "All",
//   "Physical Therapy",
//   "Mental Health",
//   "Nutrition",
//   "Technology",
// ];

// export default function InteractiveHealthBlog() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredPosts = blogPosts.filter((post) => {
//     const matchesSearch =
//       post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || post.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "#f9fafb",
//         padding: "2rem 1rem",
//       }}
//     >
//       <main style={{ maxWidth: "1200px", margin: "auto" }}>
//         <h1
//           style={{
//             textAlign: "center",
//             marginBottom: "1rem",
//             fontFamily: "Bebas Neue, sans-serif",
//             fontWeight: 500,
//             fontSize: "60px",
//             margin: 0,
//             paddingTop: "20px",
//             color: "#1F2937",
//           }}
//         >
//           Health And Tech Blogs
//         </h1>

//         {/* Search Bar */}
//         <div style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
//           <TextField
//             variant="outlined"
//             placeholder="Search for health insights..."
//             fullWidth
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: <Search style={{ marginRight: 8 }} />,
//               style: { borderRadius: "999px", paddingLeft: "1rem" },
//             }}
//           />
//         </div>

//         {/* Category Filter */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             gap: "0.5rem",
//             marginBottom: "2rem",
//           }}
//         >
//           {categories.map((category) => (
//             <Button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               variant={selectedCategory === category ? "contained" : "outlined"}
//               style={{
//                 borderRadius: "999px",
//                 padding: "0.5rem 1rem",
//                 fontSize: "0.875rem",
//                 fontWeight: "bold",
//                 backgroundColor:
//                   selectedCategory === category ? "#19202b" : "white",
//                 color: selectedCategory === category ? "white" : "#333",
//                 border:
//                   selectedCategory === category ? "none" : "2px solid #ccc",
//               }}
//             >
//               {category}
//             </Button>
//           ))}
//         </div>

//         {/* Blog Posts */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "1rem",
//           }}
//         >
//           {filteredPosts.map((post) => (
//             <Card
//               key={post.id}
//               style={{
//                 borderRadius: "12px",
//                 overflow: "hidden",
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={post.image}
//                 alt={post.title}
//               />
//               <Badge
//                 badgeContent={post.category}
//                 color="primary"
//                 sx={{
//                   "& .MuiBadge-badge": { width: "105px" },
//                   position: "relative",
//                   top: "1.5rem",
//                   left: "2.5rem",
//                   fontSize: "0.75rem",
//                   borderRadius: "4px",
//                   padding: "0.25rem 0.5rem",
//                   backgroundColor: "#3b82f6",
//                   color: "white",
//                 }}
//               />
//               <CardContent style={{ padding: "1rem 1.5rem" }}>
//                 <h2
//                   style={{
//                     fontSize: "1.25rem",
//                     fontWeight: "600",
//                     marginBottom: "0.5rem",
//                     lineHeight: "1.2",
//                   }}
//                 >
//                   {post.title}
//                 </h2>
//                 <p
//                   style={{
//                     color: "#6b7280",
//                     fontSize: "0.875rem",
//                     marginBottom: "1rem",
//                     lineHeight: "1.5",
//                   }}
//                 >
//                   {post.excerpt}
//                 </p>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     marginBottom: "1rem",
//                   }}
//                 >
//                   <Avatar
//                     src={post.authorAvatar}
//                     alt={post.author}
//                     style={{
//                       width: "32px",
//                       height: "32px",
//                       marginRight: "0.5rem",
//                     }}
//                   />
//                   <div>
//                     <p style={{ fontSize: "0.875rem", fontWeight: "500" }}>
//                       {post.author}
//                     </p>
//                     <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
//                       {post.date}
//                     </p>
//                   </div>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     fontSize: "0.875rem",
//                     color: "#9ca3af",
//                   }}
//                 >
//                   <span style={{ display: "flex", alignItems: "center" }}>
//                     <AccessTime
//                       fontSize="small"
//                       style={{ marginRight: "0.25rem" }}
//                     />
//                     {post.readTime}
//                   </span>
//                   <span style={{ display: "flex", alignItems: "center" }}>
//                     <ThumbUp
//                       fontSize="small"
//                       sx={{
//                         marginRight: "0.25rem",
//                         "&:hover": {
//                           color: "#3b82f6",

//                           // Adjust this color for the hover state
//                         },
//                       }}
//                     />
//                     {post.likes}
//                   </span>
//                   <span style={{ display: "flex", alignItems: "center" }}>
//                     <ChatBubble
//                       fontSize="small"
//                       sx={{
//                         marginRight: "0.25rem",
//                         "&:hover": {
//                           color: "#3b82f6",

//                           // Adjust this color for the hover state
//                         },
//                       }}
//                     />
//                     {post.comments}
//                   </span>
//                 </div>
//               </CardContent>
//               <CardActions
//                 style={{
//                   padding: "1rem 1.5rem",
//                   display: "flex",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Button
//                   variant="outlined"
//                   sx={{
//                     backgroundColor: "white",
//                     color: "#19202b",
//                     border: "2px solid #ccc",
//                     borderRadius: "999px",
//                     "&:hover": {
//                       backgroundColor: "#19202b",
//                       color: "white",
//                       border: "2px solid #ccc",
//                       // Adjust this color for the hover state
//                     },
//                   }}
//                 >
//                   Read More
//                 </Button>

//                 <Tooltip title="Bookmark this article">
//                   <Button
//                     variant="outlined"
//                     size="small"
//                     sx={{
//                       minWidth: "auto",
//                       padding: "0.5rem",
//                       borderColor: "#ccc",
//                       color: "#ccc",
//                       "&:hover": {
//                         color: "white",
//                         backgroundColor: "black",
//                         borderColor: "#ccc",
//                         // Adjust this color for the hover state
//                       },
//                     }}
//                   >
//                     <BookmarkBorder />
//                   </Button>
//                 </Tooltip>
//               </CardActions>
//             </Card>
//           ))}
//         </div>
//       </main>
//       <Box margin={5}>
//         <Box display={"flex"} justifyContent="center">
//           <Button
//             variant="outlined"
//             sx={{
//               backgroundColor: "white",
//               color: "#19202b",
//               border: "2px solid #ccc",
//               borderRadius: "999px",
//               "&:hover": {
//                 backgroundColor: "#19202b",
//                 color: "white",
//                 border: "2px solid #ccc",
//                 // Adjust this color for the hover state
//               },
//             }}
//           >
//             Load More
//           </Button>
//         </Box>
//       </Box>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  AccessTime,
  ThumbUp,
  ChatBubble,
  BookmarkBorder,
} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import picture1 from "../../assets/1.jpg";
import picture2 from "../../assets/2.png";
import picture3 from "../../assets/3.jpeg";
import picture4 from "../../assets/4.jpeg";
import picture5 from "../../assets/5.jpeg";
import picture6 from "../../assets/6.jpeg";
import CardMedia from "@mui/material/CardMedia";

export const blogPosts = [
  {
    id: 1,
    title: "Revolutionary Exoskeleton Technology in Physical Therapy",
    category: "Physical Therapy",
    excerpt:
      "Explore how cutting-edge exoskeleton suits are transforming rehabilitation for patients with mobility impairments...",
    image: picture1,
    readTime: "5 min read",
    author: "Dr. Jane Smith",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 15, 2023",
    likes: 128,
    comments: 32,
    introduction: `
      Exoskeleton technology is becoming a groundbreaking tool in the field of physical therapy. By enhancing mobility 
      and muscle reconditioning, these suits provide support for patients recovering from significant physical injuries. 
      Exoskeletons are now being used in clinics worldwide to help restore functional movements.`,
    content: `
      Exoskeletons work by mimicking natural movements and providing support where muscles or joints are weak, thus allowing 
      patients to perform exercises they might not be able to otherwise. Clinical trials have shown that these devices 
      improve recovery times and provide patients with a greater sense of independence.`,
    keyTakeaways: [
      "Exoskeletons offer stability and support for patients with limited mobility.",
      "Research shows improved muscle reconditioning and functional movement.",
      "Many rehabilitation centers are incorporating exoskeletons as a standard part of therapy.",
    ],
    references: [
      {
        title: "Impact of Exoskeletons in Physical Therapy",
        url: "https://example.com/exoskeleton-impact",
      },
      {
        title: "Exoskeletons in Rehabilitation",
        url: "https://example.com/research-on-exoskeletons",
      },
    ],
    tags: ["exoskeleton", "technology", "rehabilitation"],
    relatedPosts: [2, 3],
  },
  {
    id: 2,
    title: "Mindfulness and Cognitive Behavioral Therapy in Rehab",
    category: "Mental Health",
    excerpt:
      "Discover the powerful combination of mindfulness techniques and CBT in enhancing mental well-being during physical recovery...",
    image: picture2,
    readTime: "7 min read",
    author: "Dr. Michael Johnson",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 18, 2023",
    likes: 95,
    comments: 28,
    introduction: `
      Mindfulness and Cognitive Behavioral Therapy (CBT) are two techniques that have proven effective in promoting 
      mental health during rehabilitation. By helping patients focus on the present moment and restructure 
      negative thought patterns, these methods improve both physical and mental outcomes.`,
    content: `
      CBT and mindfulness offer unique ways to enhance mental health in rehab settings. Mindfulness helps individuals 
      cope with pain by reducing anxiety and bringing their attention to the present, while CBT enables patients 
      to replace unhelpful thoughts with constructive alternatives.`,
    keyTakeaways: [
      "Mindfulness reduces stress and improves focus on recovery.",
      "CBT helps reframe negative thoughts into positive outcomes.",
      "These techniques support faster recovery and reduced anxiety levels.",
    ],
    references: [
      {
        title: "Mindfulness and CBT in Rehabilitation",
        url: "https://example.com/mindfulness-cbt",
      },
      {
        title: "CBT for Physical Recovery",
        url: "https://example.com/cbt-in-rehab",
      },
    ],
    tags: ["CBT", "mindfulness", "mental health"],
    relatedPosts: [1, 6],
  },
  {
    id: 3,
    title: "Personalized Nutrition Plans: The Future of Recovery Diets",
    category: "Nutrition",
    excerpt:
      "Learn how AI-driven personalized nutrition plans are optimizing recovery times and overall health outcomes...",
    image: picture3,
    readTime: "6 min read",
    author: "Sarah Thompson, RD",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 20, 2023",
    introduction: `
      Personalized nutrition plans are reshaping how diet is used in rehabilitation. By analyzing patient data 
      through AI and machine learning, dietitians can create highly tailored nutrition plans that promote faster 
      recovery and improve overall health outcomes.`,
    content: `
      AI-driven personalized nutrition takes into account factors like genetic predispositions, lifestyle, and 
      specific medical needs. Studies show that patients receiving tailored nutrition plans recover faster and 
      experience fewer complications during rehab.`,
    keyTakeaways: [
      "Personalized nutrition improves recovery by addressing individual needs.",
      "AI-based plans lead to better health outcomes and reduced recovery times.",
      "Nutrition can be optimized for conditions like muscle recovery, joint health, and mental clarity.",
    ],
    references: [
      {
        title: "AI in Personalized Nutrition",
        url: "https://example.com/ai-nutrition",
      },
      {
        title: "Personalized Diets in Recovery",
        url: "https://example.com/nutrition-recovery",
      },
    ],
    tags: ["nutrition", "AI", "personalization"],
    relatedPosts: [4, 5],
  },
  {
    id: 4,
    title: "Gamification in Rehab: Making Recovery Fun and Engaging",
    category: "Technology",
    excerpt:
      "How gamified rehabilitation exercises are increasing patient motivation and adherence to treatment plans...",
    image: picture4,
    readTime: "8 min read",
    author: "Alex Chen, PT",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 22, 2023",
    introduction: `
      Gamification is transforming rehab by incorporating elements from video games to make exercises engaging. 
      This approach, particularly popular with younger patients, encourages higher levels of motivation 
      and adherence to rehab exercises.`,
    content: `
      Patients are more likely to stick with their treatment plans when exercises are gamified. Techniques such as 
      point scoring, challenges, and interactive digital environments help make rehabilitation feel less like a 
      chore and more like an enjoyable activity.`,
    keyTakeaways: [
      "Gamified exercises improve motivation and adherence to treatment plans.",
      "Challenges and rewards make rehab more engaging for patients.",
      "Gamification is particularly effective in pediatric and adolescent rehab.",
    ],
    references: [
      {
        title: "Gamification in Physical Therapy",
        url: "https://example.com/gamification-therapy",
      },
      {
        title: "Motivational Impact of Gamification",
        url: "https://example.com/gamification-research",
      },
    ],
    tags: ["gamification", "therapy", "patient engagement"],
    relatedPosts: [1, 3],
  },
  {
    id: 5,
    title: "Aquatic Therapy: Harnessing the Healing Power of Water",
    category: "Physical Therapy",
    excerpt:
      "Dive into the benefits of aquatic therapy and how it's revolutionizing rehabilitation for various conditions...",
    image: picture5,
    readTime: "5 min read",
    author: "Emily Waters, DPT",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 25, 2023",
    introduction: `
      Aquatic therapy uses the natural properties of water to aid recovery. By reducing weight-bearing stress 
      and providing resistance, water therapy creates an ideal environment for safe, low-impact exercises.`,
    content: `
      Water-based therapy is excellent for patients with joint issues or severe injuries, as the buoyancy 
      minimizes strain on the body. This allows for movement without the pain or risk associated with 
      land-based exercises.`,
    keyTakeaways: [
      "Aquatic therapy reduces joint stress and pain.",
      "The buoyancy of water allows safe movement for patients with limited mobility.",
      "Water resistance aids in muscle strengthening without excessive strain.",
    ],
    references: [
      {
        title: "Benefits of Aquatic Therapy",
        url: "https://example.com/aquatic-therapy",
      },
      {
        title: "Rehabilitation with Aquatic Exercises",
        url: "https://example.com/water-rehab",
      },
    ],
    tags: ["aquatic therapy", "rehabilitation", "physical therapy"],
    relatedPosts: [2, 4],
  },
  {
    id: 6,
    title: "The Role of Sleep in Rehabilitation and Recovery",
    category: "Mental Health",
    excerpt:
      "Uncover the latest research on sleep's crucial role in physical and mental recovery during rehabilitation...",
    image: picture6,
    readTime: "6 min read",
    author: "Dr. Robert Lee",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 28, 2023",
    introduction: `
      Sleep plays an essential role in rehabilitation by aiding both mental and physical recovery. Quality 
      sleep enhances tissue repair, mood stabilization, and cognitive function—all critical factors 
      for successful rehabilitation.`,
    content: `
      Studies highlight that patients who prioritize sleep during recovery experience faster healing times 
      and better mental health outcomes. Strategies for achieving optimal sleep include establishing 
      a consistent sleep schedule and incorporating relaxing activities before bed.`,
    keyTakeaways: [
      "Adequate sleep is crucial for both physical and mental recovery.",
      "Sleep enhances tissue repair and stabilizes mood.",
      "Establishing a bedtime routine can improve sleep quality.",
    ],
    references: [
      {
        title: "Sleep and Physical Recovery",
        url: "https://example.com/sleep-rehab",
      },
      {
        title: "Importance of Sleep in Mental Health",
        url: "https://example.com/sleep-mental-health",
      },
    ],
    tags: ["sleep", "rehabilitation", "mental health"],
    relatedPosts: [1, 3],
  },
];
const categories = [
  "All",
  "Physical Therapy",
  "Mental Health",
  "Nutrition",
  "Technology",
];

export default function InteractiveHealthBlog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        padding: "2rem 1rem",
      }}
    >
      <main style={{ maxWidth: "1200px", margin: "auto" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontFamily: "Bebas Neue, sans-serif",
            fontWeight: 500,
            fontSize: "60px",
            margin: 0,
            paddingTop: "20px",
            color: "#1F2937",
          }}
        >
          Health And Tech Blogs
        </h1>

        {/* Search Bar */}
        <div style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
          <TextField
            variant="outlined"
            placeholder="Search for health insights..."
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <Search style={{ marginRight: 8 }} />,
              style: { borderRadius: "999px", paddingLeft: "1rem" },
            }}
          />
        </div>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "contained" : "outlined"}
              style={{
                borderRadius: "999px",
                padding: "0.5rem 1rem",
                fontSize: "0.875rem",
                fontWeight: "bold",
                backgroundColor:
                  selectedCategory === category ? "#19202b" : "white",
                color: selectedCategory === category ? "white" : "#333",
                border:
                  selectedCategory === category ? "none" : "2px solid #ccc",
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
          }}
        >
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <Badge
                badgeContent={post.category}
                color="primary"
                sx={{
                  "& .MuiBadge-badge": { width: "105px" },
                  position: "relative",
                  top: "1.5rem",
                  left: "2.5rem",
                  fontSize: "0.75rem",
                  borderRadius: "4px",
                  padding: "0.25rem 0.5rem",
                  backgroundColor: "#3b82f6",
                  color: "white",
                }}
              />
              <CardContent style={{ padding: "1rem 1.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                    lineHeight: "1.2",
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.875rem",
                    marginBottom: "1rem",
                    lineHeight: "1.5",
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Avatar
                    src={post.authorAvatar}
                    alt={post.author}
                    style={{
                      width: "32px",
                      height: "32px",
                      marginRight: "0.5rem",
                    }}
                  />
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                      {post.author}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {post.date}
                    </p>
                  </div>
                </div>

                {/* Read More Button - Link to Post Detail Page */}
                <CardActions>
                  <Link to={`/post/${post.id}`}>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                  </Link>
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
