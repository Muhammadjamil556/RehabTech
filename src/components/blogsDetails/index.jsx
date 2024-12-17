import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Link,
  TextField,
  Button,
  Divider,
  Box,
} from "@mui/material";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import { blogPosts } from "../../pages/blogs/index"; // Assuming you import the same posts array

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  authorInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  authorName: {
    fontSize: "0.9rem !important",
    fontWeight: "bold",
  },
  authorDate: {
    fontSize: "0.7rem !important",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(3),
  },
  content: {
    marginBottom: theme.spacing(4),
    fontSize: "0.9rem",
    "& p": {
      marginBottom: theme.spacing(2),
    },
  },
  section: {
    marginBottom: theme.spacing(4),
  },
  sectionTitle: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  list: {
    paddingLeft: theme.spacing(2),
  },
  listItem: {
    display: "list-item",
    listStyleType: "disc",
    fontSize: "2rem",
  },
  link: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  shareButtons: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  commentForm: {
    marginBottom: theme.spacing(4),
  },
  commentList: {
    marginTop: theme.spacing(4),
  },
  comment: {
    marginBottom: theme.spacing(2),
  },
}));

export default function BlogPostDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  if (!post) {
    return (
      <Typography variant="h4" align="center" style={{ fontSize: "2rem" }}>
        Post not found
      </Typography>
    );
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          text: newComment,
          author: "Anonymous",
          date: new Date().toLocaleString(),
        },
      ]);
      setNewComment("");
    }
  };

  const shareUrl = window.location.href;

  return (
    <article className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        {post.title}
      </Typography>
      <div className={classes.authorInfo}>
        <Avatar
          src={post.authorAvatar || "/placeholder.svg?height=80&width=80"}
          alt={post.author}
          className={classes.avatar}
        />
        <div>
          <Typography variant="h6" className={classes.authorName}>
            {post.author}
          </Typography>
          <Typography variant="subtitle1" className={classes.authorDate}>
            {post.date}
          </Typography>
        </div>
      </div>
      {post.image && (
        <img src={post.image} alt={post.title} className={classes.image} />
      )}
      <Typography variant="h5" paragraph style={{ fontSize: "1.5rem" }}>
        {post.introduction}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Box mt={5} mb={5}>
        <div className={classes.shareButtons}>
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={post.title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>{" "}
      </Box>
      <section className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Key Takeaways:
        </Typography>
        <List className={classes.list}>
          {post.keyTakeaways.map((takeaway, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemText
                primary={takeaway}
                primaryTypographyProps={{ style: { fontSize: "1rem" } }}
              />
            </ListItem>
          ))}
        </List>
      </section>
      <section className={classes.section}>
        <Typography variant="h5" className={classes.sectionTitle}>
          References:
        </Typography>
        <List>
          {post.references.map((ref, index) => (
            <ListItem key={index}>
              <Link
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                {ref.title}
              </Link>
            </ListItem>
          ))}
        </List>
      </section>
      <Divider />
      <section className={classes.commentForm}>
        <Typography variant="h4" className={classes.sectionTitle}>
          Leave a Comment
        </Typography>
        <form onSubmit={handleCommentSubmit}>
          <TextField
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            placeholder="Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{ marginBottom: "1rem", fontSize: "0.9rem" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ fontSize: "0.9rem" }}
          >
            Submit Comment
          </Button>
        </form>
      </section>
      <section className={classes.commentList}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Comments
        </Typography>
        {comments.map((comment, index) => (
          <Box key={index} className={classes.comment}>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold", fontSize: "0.9rem" }}
            >
              {comment.author} - {comment.date}
            </Typography>
            <Typography variant="body1" style={{ fontSize: "0.9rem" }}>
              {comment.text}
            </Typography>
          </Box>
        ))}
      </section>
    </article>
  );
}
