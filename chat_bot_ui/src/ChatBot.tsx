import Layout from "./container/Layout";
import { DMSansGeneric } from "./components/Text";
import BoxLabeled from "./components/BoxLabeled";
import WaveIcon from "./assets/wave.svg";
import QuestionMark from "./assets/questionMark.svg";
import BotIcon from "./favicon.svg";
import { pxToRem } from "./utils/themeUtils";

import DotIcon from "./assets/dot.svg";
import ChatIcon from "./assets/chat.svg";
import { useStyles } from "./styles";

const ChatBot = () => {
  const styles = useStyles();
  return (
    <Layout>
      <div className={styles.banner}>
        <DMSansGeneric
          fontSize={30}
          lineHeight={39.09}
          fontWeight={700}
          color="#FFFFFF"
        >
          IRIS
        </DMSansGeneric>
        <DMSansGeneric
          fontSize={22}
          lineHeight={28.64}
          fontWeight={700}
          color="#FFFFFF"
        >
          Hello{" "}
          <img
            src={WaveIcon}
            alt="wave-icon"
            style={{ marginLeft: "1.2rem" }}
          />
        </DMSansGeneric>
        <DMSansGeneric
          fontSize={18}
          lineHeight={23}
          fontWeight={500}
          color="#FFFFFF"
        >
          I am Iris, a Virtual Assistant How may I help you?
        </DMSansGeneric>
      </div>
      <div className={styles.botIconContainer}>
        <img
          src={BotIcon}
          alt="bot-icon"
          style={{ height: pxToRem(30), width: pxToRem(60) }}
        />
      </div>
      <div className={styles.contentBody}>
        <div className={styles.contentContainer}>
          <div className={styles.contentTitle}>
            <DMSansGeneric
              fontSize={14}
              lineHeight={18}
              fontWeight={500}
              position="relative"
            >
              Frequently Asked Questions
              <img
                src={QuestionMark}
                alt="question-mark-icon"
                style={{
                  height: pxToRem(21),
                  width: pxToRem(21),
                  position: "absolute",
                  marginLeft: `${pxToRem(10)}`,
                  top: `${pxToRem(-2)}`,
                }}
              />
            </DMSansGeneric>
          </div>
          <div className={styles.content}>
            <BoxLabeled
              startIcon={DotIcon}
              width={"95%"}
              label="Can I redeem my FB before the original term?"
              margin={`${pxToRem(11)} 0 ${pxToRem(10)} 0 `}
            />
            <BoxLabeled
              startIcon={DotIcon}
              width={"95%"}
              label="How do I pay my Credit card bill?"
              margin={`0 0 ${pxToRem(10)} 0 `}
            />
            <BoxLabeled
              startIcon={DotIcon}
              width={"95%"}
              label="How can I get my Account Statement?"
              margin={`0 0 ${pxToRem(10)} 0 `}
            />
            <BoxLabeled
              width={"95%"}
              startIcon={DotIcon}
              margin={`0 0 ${pxToRem(10)} 0 `}
              label="What is the tenure of Fixed Deposit?"
            />

            <BoxLabeled
              fontWeight={500}
              startIcon={ChatIcon}
              borderRadius={`${pxToRem(100)}`}
              justifyContent="center"
              margin={`auto 0 ${pxToRem(5)}`}
              width={`${pxToRem(266)}`}
              boxShadow={`0px ${pxToRem(4)} ${pxToRem(5)} rgba(0, 0, 0, 0.1)`}
              label="Start a New Conversation"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatBot;
