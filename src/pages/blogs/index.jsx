import React, { useState } from "react";
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
import picture from "../../assets/ankle.jpg";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";

const blogPosts = [
  {
    id: 1,
    title: "Revolutionary Exoskeleton Technology in Physical Therapy",
    category: "Physical Therapy",
    excerpt:
      "Explore how cutting-edge exoskeleton suits are transforming rehabilitation for patients with mobility impairments...",
    image: picture,
    readTime: "5 min read",
    author: "Dr. Jane Smith",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 15, 2023",
    likes: 128,
    comments: 32,
  },
  {
    id: 2,
    title: "Mindfulness and Cognitive Behavioral Therapy in Rehab",
    category: "Mental Health",
    excerpt:
      "Discover the powerful combination of mindfulness techniques and CBT in enhancing mental well-being during physical recovery...",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "7 min read",
    author: "Dr. Michael Johnson",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 18, 2023",
    likes: 95,
    comments: 28,
  },
  {
    id: 3,
    title: "Personalized Nutrition Plans: The Future of Recovery Diets",
    category: "Nutrition",
    excerpt:
      "Learn how AI-driven personalized nutrition plans are optimizing recovery times and overall health outcomes...",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "6 min read",
    author: "Sarah Thompson, RD",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 20, 2023",
    likes: 112,
    comments: 45,
  },
  {
    id: 4,
    title: "Gamification in Rehab: Making Recovery Fun and Engaging",
    category: "Technology",
    excerpt:
      "How gamified rehabilitation exercises are increasing patient motivation and adherence to treatment plans...",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "8 min read",
    author: "Alex Chen, PT",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 22, 2023",
    likes: 87,
    comments: 19,
  },
  {
    id: 5,
    title: "Aquatic Therapy: Harnessing the Healing Power of Water",
    category: "Physical Therapy",
    excerpt:
      "Dive into the benefits of aquatic therapy and how it's revolutionizing rehabilitation for various conditions...",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "5 min read",
    author: "Emily Waters, DPT",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 25, 2023",
    likes: 76,
    comments: 23,
  },
  {
    id: 6,
    title: "The Role of Sleep in Rehabilitation and Recovery",
    category: "Mental Health",
    excerpt:
      "Uncover the latest research on sleep's crucial role in physical and mental recovery during rehabilitation...",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "6 min read",
    author: "Dr. Robert Lee",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "May 28, 2023",
    likes: 103,
    comments: 37,
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
                    <p style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                      {post.date}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.875rem",
                    color: "#9ca3af",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <AccessTime
                      fontSize="small"
                      style={{ marginRight: "0.25rem" }}
                    />
                    {post.readTime}
                  </span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <ThumbUp
                      fontSize="small"
                      sx={{
                        marginRight: "0.25rem",
                        "&:hover": {
                          color: "#3b82f6",

                          // Adjust this color for the hover state
                        },
                      }}
                    />
                    {post.likes}
                  </span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <ChatBubble
                      fontSize="small"
                      sx={{
                        marginRight: "0.25rem",
                        "&:hover": {
                          color: "#3b82f6",

                          // Adjust this color for the hover state
                        },
                      }}
                    />
                    {post.comments}
                  </span>
                </div>
              </CardContent>
              <CardActions
                style={{
                  padding: "1rem 1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "white",
                    color: "#19202b",
                    border: "2px solid #ccc",
                    borderRadius: "999px",
                    "&:hover": {
                      backgroundColor: "#19202b",
                      color: "white",
                      border: "2px solid #ccc",
                      // Adjust this color for the hover state
                    },
                  }}
                >
                  Read More
                </Button>

                <Tooltip title="Bookmark this article">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      minWidth: "auto",
                      padding: "0.5rem",
                      borderColor: "#ccc",
                      color: "#ccc",
                      "&:hover": {
                        color: "white",
                        backgroundColor: "black",
                        borderColor: "#ccc",
                        // Adjust this color for the hover state
                      },
                    }}
                  >
                    <BookmarkBorder />
                  </Button>
                </Tooltip>
              </CardActions>
            </Card>
          ))}
        </div>
      </main>
      <Box margin={5}>
        <Box display={"flex"} justifyContent="center">
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "white",
              color: "#19202b",
              border: "2px solid #ccc",
              borderRadius: "999px",
              "&:hover": {
                backgroundColor: "#19202b",
                color: "white",
                border: "2px solid #ccc",
                // Adjust this color for the hover state
              },
            }}
          >
            Load More
          </Button>
        </Box>
      </Box>
    </div>
  );
}
