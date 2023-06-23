import { Facebook } from "@mui/icons-material";

export const ChefAiFooter = () => {
  return (
    <div
      style={{
        width: "calc(100% - 36px)",
        height: "80px",
        backgroundColor: "black",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <a href="https://www.facebook.com/profile.php?id=100090012759164">
        <Facebook sx={{ color: "white" }} />
      </a>
      <a href="/contact">Contact Us</a>
      <a href="/policies">Privacy Policy & General Disclosure</a>
    </div>
  );
};
