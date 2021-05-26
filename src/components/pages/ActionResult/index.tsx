import { FC, Fragment } from "react";
import BackLink from "../../partials/BackLink";

interface ActionResultProps {
  error: boolean;
}

const ActionResultPage: FC<ActionResultProps> = ({ error }) => {
  const resultText = error ? "failed" : "succeed";
  const createIcon = () => {
    return { __html: error ? "&#10060;" : "&#9989;" };
  };
  return (
    <Fragment>
      <BackLink />
      <h4>
        <span dangerouslySetInnerHTML={createIcon()} />
        &nbsp; Creating event {resultText}.
      </h4>
    </Fragment>
  );
};

export default ActionResultPage;
