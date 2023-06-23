import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { map } from "lodash";

export const BlogList = (props) => {
  const { blogs } = props;
  const { blogTitle } = useParams();
  return map(blogs, (blog) => {
    const current =
      (blogTitle !== undefined) & (blog?.link === blogTitle) || false;
    return (
      <>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "8px",
            justifyContent: "space-between",
            width: "calc(100% - 16px)",
          }}
        >
          <li style={{ paddingRight: "12px" }}>{blog.title}</li>
          <Button
            href={`/blogs/${blog.link}`}
            sx={{ backgroundColor: "#8E7419" }}
            variant="contained"
            disabled={current}
          >
            {current ? "Current" : "Read"}
          </Button>
        </div>
      </>
    );
  });
};
