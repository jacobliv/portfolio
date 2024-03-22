import {
  FaLinkedin,
  FaItchIo,
  FaGithub,
  FaJava,
  FaPython,
  FaUnity,
  FaExternalLinkAlt, // Add the external link icon
} from "react-icons/fa";
import { SiKrita, SiCsharp, SiGooglecloud } from "react-icons/si";

const iconMapping = {
  linkedin: FaLinkedin,
  itchio: FaItchIo,
  github: FaGithub,
  java: FaJava,
  python: FaPython,
  unity: FaUnity,
  krita: SiKrita,
  "c#": SiCsharp,
  gcp: SiGooglecloud,
  vertexai: () => (
    <img
      src={`${process.env.PUBLIC_URL}/icons/vertexai.png`}
      alt="vertexai"
      style={{ width: "20px" }}
    />
  ),
  externallink: FaExternalLinkAlt, // Add the external link icon

  // Add more icons as needed
};

const getIcon = (iconName) => {
  const IconComponent = iconMapping[iconName.toLowerCase().replace(/\s/g, "")];
  if (!IconComponent) {
    console.error(`Icon "${iconName}" is not defined in iconMapping.`);
    console.log("In the errrrrorr");
    return null;
  }
  return IconComponent;
};
export default getIcon;
