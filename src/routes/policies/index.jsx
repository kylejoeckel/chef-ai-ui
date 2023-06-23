import { Facebook } from "@mui/icons-material";
import { Button, Typography, Avatar } from "@mui/material";
import { fontWeight } from "@mui/system";
import { CardHeader } from "../../components/CardHeader";
import "../../Main.css";

export const PoliciesChefAi = () => {
  return (
    <div className="chefAiContainer">
      <div
        className="chefAiCard"
        style={{ marginTop: "80px", textAlign: "left" }}
      >
        <CardHeader title={`policies & disc.`} />
        <div className="chefAiCardContent">
          <p>
            <span style={{ fontWeight: "700" }}>Privacy Policy:</span> At
            ChefAI.recipes, we are committed to protecting the privacy and
            security of our users. Our Privacy Policy outlines the types of
            information we collect, how we use and disclose that information,
            and the steps we take to protect it.
            <br />
            <br />
            <span style={{ fontWeight: "700" }}>
              Information Collection:
            </span>{" "}
            We may collect information from you when you use our website, sign
            up for our newsletter, or interact with us through social media.
            This information may include your name, email address, IP address,
            and any other information you choose to provide.
            <br />
            <br />
            <span style={{ fontWeight: "700" }}>
              Use and Disclosure of Information:
            </span>{" "}
            We use the information we collect to provide you with a better user
            experience, to improve our website and services, and to communicate
            with you. We may also use your information to personalize your
            experience on our website, such as by providing you with customized
            recommendations. We may share your information with third-party
            service providers who help us operate our website and provide our
            services. These service providers are required to keep your
            information confidential and use it only for the purposes for which
            it was disclosed. We will not sell or rent your information to third
            parties for marketing purposes.
            <br />
            <br />
            <span style={{ fontWeight: "700" }}>
              Protection of Information:
            </span>{" "}
            We take reasonable measures to protect the information we collect
            from loss, misuse, and unauthorized access, disclosure, alteration,
            and destruction. <br />
            <br />
            <span style={{ fontWeight: "700" }}>Disclosure:</span> All content
            and recipes provided on ChefAI.Recipes are created and developed by
            ChatGPT, a language model trained by OpenAI, and are provided for
            informational purposes only. The images used on the website are
            sourced from various places on the internet and are not owned by
            ChefAI.Recipes. We do not claim ownership or copyright of these
            images, and they are used solely for illustrative purposes.
            ChefAI.Recipes is not responsible for any errors or omissions in the
            content and does not warrant or guarantee the accuracy,
            completeness, or usefulness of any information or recipe provided.
            The use of the information and recipes on this website is at your
            own risk, and ChefAI.Recipes shall not be held liable for any
            damages, losses, or injury resulting from the use of such
            information or recipes.
            <br />
            <br />
            <span style={{ fontWeight: "700" }}>General Disclaimer:</span> The
            information provided on ChefAI.recipes is for general informational
            purposes only and is not intended to be a substitute for
            professional advice. We make no representations or warranties of any
            kind, express or implied, about the completeness, accuracy,
            reliability, suitability or availability with respect to the website
            or the information, products, services, or related graphics
            contained on the website for any purpose. Any reliance you place on
            such information is therefore strictly at your own risk. In no event
            will we be liable for any loss or damage including without
            limitation, indirect or consequential loss or damage, or any loss or
            damage whatsoever arising from loss of data or profits arising out
            of, or in connection with, the use of this website. Through this
            website, you are able to link to other websites which are not under
            the control of ChefAI.recipes. We have no control over the nature,
            content and availability of those sites. The inclusion of any links
            does not necessarily imply a recommendation or endorse the views
            expressed within them. Every effort is made to keep the website up
            and running smoothly. However, ChefAI.recipes takes no
            responsibility for, and will not be liable for, the website being
            temporarily unavailable due to technical issues beyond our control.
            This disclaimer is subject to change at any time without notice.
          </p>
          <p>- Team ChefAI</p>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Avatar
              alt="ChefAI"
              sx={{
                width: 72,
                height: 72,
                borderRadius: "12px",
              }}
              variant="square"
              src="/chefAi.jpg"
            />
            <Button
              href={"/"}
              sx={{ backgroundColor: "#BC4846" }}
              variant="contained"
            >
              Start Cooking!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
