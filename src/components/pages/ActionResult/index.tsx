import { FC, Fragment } from "react";
import BackLink from "../../partials/BackLink";

interface ActionResultProps {
  message: string;
  error: boolean;
}

const ActionResultPage: FC<ActionResultProps> = ({ message, error }) => {
  const createIcon = () => {
    return { __html: error ? "&#10060;" : "&#9989;" };
  };
  return (
    <Fragment>
      <BackLink />
      <h4>
        <span dangerouslySetInnerHTML={createIcon()} />
        &nbsp; {message}.
      </h4>
    </Fragment>
  );
};

export default ActionResultPage;
