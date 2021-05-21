import { FC } from "react";
import Html from "../../layout/Html";
import BackLink from "../../partials/BackLink";

interface CreateResultProps {
  error: boolean;
}

const CreateResultPage: FC<CreateResultProps> = ({ error }) => {
  const resultText = error ? "failed" : "succeed";
  const createIcon = () => {
    return { __html: error ? "&#10060;" : "&#9989;" };
  };
  return (
    <Html title={resultText}>
      <BackLink />
      <h4>
        <span dangerouslySetInnerHTML={createIcon()} />
        &nbsp; Creating event {resultText}.
      </h4>
    </Html>
  );
};

export default CreateResultPage;
