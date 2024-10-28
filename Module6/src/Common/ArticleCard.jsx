import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditArticleForm from "../Components/EditArticleForm";

const ArticleCard = ({ _id, title, text, isEdited }) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsEditFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsEditFormOpen(false);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">{text}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component={Link} to={`/article/${_id}`}>
            Read
          </Button>
          {isEdited && (
            <Button size="small" onClick={handleOpenForm}>
              Edit
            </Button>
          )}
        </CardActions>
      </Card>
      {isEditFormOpen && (
        <EditArticleForm
          onClose={handleCloseForm}
          article={{ _id, title, text }}
        />
      )}
    </>
  );
};

export default ArticleCard;
