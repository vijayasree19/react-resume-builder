import useResumeStore from "../../store/resumeStore";

import TwoColumnLayout from "./layouts/TwoColumnLayout";
import SingleColumnLayout from "./layouts/SingleColumnLayout";

export default function Resume() {

    const { layout } = useResumeStore();

    switch (layout) {

        case "single":
            return <SingleColumnLayout />;

        case "two":

        default:
            return <TwoColumnLayout />;

    }

}