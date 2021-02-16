// Components
import ProblemInfo from "./ProblemInfo";
import DateItem from "./DateItem";

// Styles
import { Flex, Box, IconButton } from "@chakra-ui/react";
import { SmallCloseIcon, CheckCircleIcon } from "@chakra-ui/icons";

import { isDue } from "../../utils";

const ProblemGroup = ({ problem, date }) => {
  const { name, attemptDates, difficulty, url, leetcodeId } = problem;

  return (
    <Flex h={16} mb={5} align="flex-start">
      <ProblemInfo
        name={name}
        difficulty={difficulty}
        url={url}
        id={leetcodeId}
      />
      {attemptDates.map(({ dateFormatted, status, createdAt }) => {
        const createdDate = new Date(createdAt);
        const due = isDue(date, createdDate);
        /* Status must be pending to be changed to due ("success" and "failure" statuses mean that attempt has already been completed) */
        const displayStatus = due && status === "pending" ? "due" : status;
        return (
          <DateItem
            key={dateFormatted}
            date={dateFormatted}
            status={displayStatus}
            created={createdAt}
          />
        );
      })}
    </Flex>
  );
};

export default ProblemGroup;
