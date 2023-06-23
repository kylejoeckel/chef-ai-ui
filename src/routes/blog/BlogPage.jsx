import { CardHeader } from "../../components/CardHeader";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../Main.css";
import useBlogStore from "../../state/blogState";
import { BlogList } from "./BlogList";

export const BlogPageChefAi = () => {
  const { blogTitle } = useParams();
  const navigate = useNavigate();
  const { blogs } = useBlogStore();
  useEffect(() => {
    if (!blogs[blogTitle]) {
      navigate("/blogs");
    }
  }, [blogs, blogTitle]);
  return (
    <div className="chefAiContainer">
      <div
        className="chefAiCard"
        style={{ marginTop: "80px", textAlign: "left" }}
      >
        <CardHeader title="blogs" />
        <div className="chefAiCardContent">
          {blogs[blogTitle] && blogs[blogTitle].content}
          <br />
          <BlogList blogs={blogs} />
        </div>
      </div>
    </div>
  );
};
