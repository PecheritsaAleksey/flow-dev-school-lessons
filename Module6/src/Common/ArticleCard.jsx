import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ _id, title, text }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/article/${_id}`}>
          Read
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
