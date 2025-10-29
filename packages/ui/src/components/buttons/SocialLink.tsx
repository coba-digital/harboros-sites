import { socialLinkType } from "@repo/types";
import styles from "./SocialLink.module.css";

interface Props {
  social: socialLinkType;
}

const SocialLink = ({ social }: Props) => {
  const { icon, link, name } = social;
  return (
    <a href={link} target="_blank" rel="noreferrer" aria-label={name}>
      <div className={styles.socialLink}>{icon}</div>
    </a>
  );
};

export default SocialLink;
