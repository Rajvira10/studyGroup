import type { NextPage } from "next";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface StudyGroupProps {
  studygroup: {
    name: string;
    description: string;
    members: string[];
  };
}

const BasicCard: NextPage<StudyGroupProps> = ({ studygroup }) => {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h5" component="h5">
          {studygroup.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 1.5 }} color="text.secondary">
          {studygroup.description}
        </Typography>
        <Typography variant="body2">
          Number of Members : {studygroup.members.length}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Join
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
