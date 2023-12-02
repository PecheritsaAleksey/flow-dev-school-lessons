import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const Article = ({ title, text }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read</Button>
      </CardActions>
    </Card>
  );
};

export default Article;
