import Link from "next/link";
import { ButtonType } from "@repo/types";

// CSS
import styles from "./Button.module.css";

// Icons
import { HiDownload, HiExternalLink } from "react-icons/hi";

interface Props {
  button: ButtonType;
}

const Button = ({
  button: {
    action,
    className,
    color = "primary",
    darkText = false,
    disabled = false,
    download = false,
    external = false,
    link = "",
    size = "medium",
    style = "primary",
    text = "button",
    type = "button",
  },
}: Props) => {
  // Set the styling based on props
  const classes = `${styles.button} ${
    style == "primary"
      ? styles.primary
      : style == "secondary"
        ? styles.secondary
        : styles.tertiary
  } ${
    size == "large"
      ? styles.large
      : size == "small"
        ? styles.small
        : styles.medium
  } ${
    color == "primary"
      ? styles.primaryColor
      : color == "black"
        ? styles.black
        : styles.white
  } ${darkText ? styles.darkText : ""}`;

  if (download || external)
    // If download OR external
    return (
      <a
        className={`${classes} ${className}`}
        href={link}
        download={download}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center gap-2">
          {download && !external && <HiDownload />}
          {external && !download && <HiExternalLink />}
          {text}
        </div>
      </a>
    );

  if (type == "submit")
    // If submit button
    return (
      <button
        className={`${classes} ${className}`}
        disabled={disabled}
        type={type}
        onClick={action}
      >
        {text}
      </button>
    );

  return (
    // TODO I don't believe onClick should be called on a Link. Should be addressed
    <Link className={`${classes} ${className}`} href={link} onClick={action}>
      {text}
    </Link>
  );
};

export default Button;
